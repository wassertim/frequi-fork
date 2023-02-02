import AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';

type TaskDescriptions = PromiseResult<AWS.ECS.DescribeTasksResponse, AWS.AWSError>;

function mapPublicIp(networkInterface: AWS.EC2.NetworkInterface) {
  if (!networkInterface.Association) {
    throw new Error('No association found');
  }

  return networkInterface.Association.PublicIp;
}

function getNetworkInterfaceId(taskDescriptions: TaskDescriptions): string {
  if (!taskDescriptions.tasks || taskDescriptions.tasks.length === 0) {
    throw new Error('No tasks found');
  }
  const { attachments } = taskDescriptions.tasks[0];
  if (!attachments || attachments.length === 0) {
    throw new Error('No attachments found');
  }
  const { details } = attachments[0];
  if (!details || details.length === 0) {
    throw new Error('No details found');
  }
  const eni = details.find((detail) => detail.name === 'networkInterfaceId');
  if (!eni) {
    throw new Error('No eni found');
  }
  if (!eni.value) {
    throw new Error('No eni value found');
  }

  return eni.value;
}

export async function getPublicIp(taskDescriptions: TaskDescriptions) {
  const ec2 = new AWS.EC2();
  const networkInterfaceIds = getNetworkInterfaceId(taskDescriptions);
  const eniDescription = await ec2
    .describeNetworkInterfaces({ NetworkInterfaceIds: [networkInterfaceIds] })
    .promise();
  if (!eniDescription.NetworkInterfaces || eniDescription.NetworkInterfaces.length === 0) {
    throw new Error('No network interfaces found');
  }
  const publicIp = eniDescription.NetworkInterfaces.map(mapPublicIp)[0];
  if (!publicIp) {
    throw new Error('No public ip found');
  }

  return publicIp;
}
