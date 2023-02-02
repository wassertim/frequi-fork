import AWS from 'aws-sdk';
import { getPublicIp } from './get-public-ip';

const cluster = 'ecs_playground';

interface ServiceTask {
  service: string;
  publicIp: string;
}

const getTaskDescriptions = async (ecs: AWS.ECS, serviceName: string) => {
  const tasks = await ecs.listTasks({ cluster, serviceName }).promise();
  if (!tasks.taskArns || tasks.taskArns.length === 0) {
    throw new Error('No tasks found');
  }

  return ecs.describeTasks({ cluster, tasks: tasks.taskArns }).promise();
};

const mapToServiceTask = (services: AWS.ECS.Service[]) => {
  const ecs = new AWS.ECS();

  return Promise.all(
    services.map(async ({ serviceName }) => {
      if (!serviceName) {
        throw new Error('No service name');
      }
      const taskDescriptions = await getTaskDescriptions(ecs, serviceName);
      const publicIp = await getPublicIp(taskDescriptions);

      return {
        service: serviceName,
        publicIp,
      } as ServiceTask;
    }),
  );
};

export const getEcsServices = async () => {
  const ecs = new AWS.ECS();
  const services = await ecs.listServices({ cluster }).promise();
  if (!services.serviceArns || services.serviceArns.length === 0) {
    return [];
  }
  const describeServicesParams = { cluster, services: services.serviceArns };
  const serviceDescriptions = await ecs.describeServices(describeServicesParams).promise();
  if (!serviceDescriptions.services) {
    throw new Error('No services found');
  }
  const serviceTasks = await mapToServiceTask(serviceDescriptions.services);

  return serviceTasks;
};
