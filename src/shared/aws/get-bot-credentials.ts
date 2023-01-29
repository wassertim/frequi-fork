import AWS from 'aws-sdk';

import { GetParametersRequest } from 'aws-sdk/clients/ssm';

const USERNAME = 'parameter_6';
const PASSWORD = 'parameter_7';

export async function getBotCredentials() {
  const parameterStore = new AWS.SSM();
  const parameterRequest: GetParametersRequest = {
    Names: [USERNAME, PASSWORD],
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
    username: params[USERNAME],
    password: params[PASSWORD],
  };
}
