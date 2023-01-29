import AWS from 'aws-sdk';

const USERNAME = 'parameter_6';
const PASSWORD = 'parameter_7';

const map = (parameters: AWS.SSM.ParameterList) => {
  const params = parameters.reduce((acc, parameter) => {
    if (!parameter.Name || !parameter.Value) {
      throw new Error('No parameter name or value');
    }
    acc[parameter.Name] = parameter.Value;

    return acc;
  }, {} as Record<string, string>);

  return [params[USERNAME], params[PASSWORD]];
};

export async function getBotCredentials() {
  const parameterStore = new AWS.SSM();
  const botCredentials = await parameterStore
    .getParameters({ Names: [USERNAME, PASSWORD] })
    .promise();
  if (!botCredentials.Parameters) {
    throw new Error('could not get bot credentials');
  }

  return map(botCredentials.Parameters);
}
