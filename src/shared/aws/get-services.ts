import AWS from 'aws-sdk';
import { PromiseResult } from 'aws-sdk/lib/request';
import { ICredentials } from '@aws-amplify/core';
import { GetParametersRequest } from 'aws-sdk/clients/ssm';
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

export async function getEcsServices(credentials: ICredentials): Promise<ServiceTask[]> {
  AWS.config.update({
    ...credentials,
    region: 'eu-central-1',
  });
  const ecs = new AWS.ECS();
  const ec2 = new AWS.EC2();
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
  const serviceTasks = await Promise.all(
    (serviceDescriptions.services || []).map(async (service) => {
      if (!service.serviceName) {
        return {
          service: '',
          publicIp: '',
        };
      }
      const tasks = await ecs
        .listTasks({
          cluster,
          serviceName: service.serviceName,
        })
        .promise();
      if (!tasks.taskArns || tasks.taskArns.length === 0) {
        return {
          service: service.serviceName,
          publicIp: '',
        };
      }
      const taskDescriptions = await ecs
        .describeTasks({
          cluster,
          tasks: tasks.taskArns || [],
        })
        .promise();
      const networkInterfaceIds = getNetworkInterfaceId(taskDescriptions);
      const eniDescription = await ec2
        .describeNetworkInterfaces({
          NetworkInterfaceIds: networkInterfaceIds,
        })
        .promise();
      return {
        service: service.serviceName,
        publicIp: (eniDescription.NetworkInterfaces || []).map(
          (eni) => eni.Association?.PublicIp || '',
        )[0],
      };
    }),
  );

  return serviceTasks.filter((service) => !!service.publicIp && !!service.service);
}

export async function getBotCredentials() {
  const parameterStore = new AWS.SSM();
  const parameterRequest: GetParametersRequest = {
    Names: ['parameter_6', 'parameter_7'],
  };
  const botCredentials = await parameterStore.getParameters(parameterRequest).promise();

  const params = botCredentials.Parameters?.reduce((acc, parameter) => {
    if (!parameter.Name || !parameter.Value) {
      return acc;
    }
    acc[parameter.Name] = parameter.Value;

    return acc;
  }, {} as Record<string, string>);
  if (!params) {
    return {};
  }
  return {
    username: params['parameter_6'],
    password: params['parameter_7'],
  };
}
