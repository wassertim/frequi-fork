import AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

type NetworkInterface = PromiseResult<AWS.EC2.DescribeNetworkInterfacesResult, AWS.AWSError>;

const cluster = 'ecs_playground';

interface ServiceTask {
  service: string;
  publicIp: string;
}

function getNetworkInterfaceId(
  taskDescriptions: PromiseResult<AWS.ECS.DescribeTasksResponse, AWS.AWSError>,
): string[] {
  const eni = taskDescriptions.tasks?.[0]?.attachments?.[0]?.details?.find(
    (detail) => detail.name === 'networkInterfaceId',
  );

  return eni?.value ? [eni?.value] : [];
}

async function getTaskDescriptions(
  ecs: AWS.ECS,
  serviceName: string | undefined,
): Promise<PromiseResult<AWS.ECS.DescribeTasksResponse, AWS.AWSError>> {
  if (!serviceName) {
    throw new Error('No service name');
  }
  const tasks = await ecs
    .listTasks({
      cluster,
      serviceName,
    })
    .promise();
  if (!tasks.taskArns || tasks.taskArns.length === 0) {
    throw new Error('No tasks found');
  }

  return ecs
    .describeTasks({
      cluster,
      tasks: tasks.taskArns || [],
    })
    .promise();
}

function getPublicIp(eniDescription: NetworkInterface) {
  return (eniDescription.NetworkInterfaces || []).map((eni) => eni.Association?.PublicIp || '')[0];
}

async function mapToServiceTask(services: AWS.ECS.Service[]) {
  const ecs = new AWS.ECS();
  const ec2 = new AWS.EC2();

  return Promise.all(
    services.map(async ({ serviceName }) => {
      if (!serviceName) {
        throw new Error('No service name');
      }
      const taskDescriptions = await getTaskDescriptions(ecs, serviceName);
      const networkInterfaceIds = getNetworkInterfaceId(taskDescriptions);
      const eniDescription = await ec2
        .describeNetworkInterfaces({
          NetworkInterfaceIds: networkInterfaceIds,
        })
        .promise();
      return {
        service: serviceName,
        publicIp: getPublicIp(eniDescription),
      };
    }),
  );
}

export async function getEcsServices(): Promise<ServiceTask[]> {
  const ecs = new AWS.ECS();
  const services = await ecs.listServices({ cluster }).promise();
  if (!services.serviceArns || services.serviceArns.length === 0) {
    return [];
  }
  const serviceDescriptions = await ecs
    .describeServices({
      cluster,
      services: services.serviceArns || [],
    })
    .promise();
  const serviceTasks = await mapToServiceTask(serviceDescriptions.services || []);

  return serviceTasks;
}
