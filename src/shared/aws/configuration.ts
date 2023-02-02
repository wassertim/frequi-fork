import { Amplify } from 'aws-amplify';

export const region = 'eu-central-1';

const domain = 'ecs-playground-login';
const identityPoolId = 'eu-central-1:6d10e0b4-f593-479e-9afb-50c96555b2b4';
const userPoolId = 'eu-central-1_9rHZkAYds';
const userPoolWebClientId = '52mkukb0sokb91vp3f25pdlgns';

export const configureAws = () => {
  Amplify.configure({
    Auth: {
      region,
      userPoolId,
      userPoolWebClientId,
      identityPoolId,
      identityPoolRegion: region,
      oauth: {
        domain: `${domain}.auth.eu-central-1.amazoncognito.com`,
        scope: ['email', 'openid'],
        redirectSignIn: 'http://localhost:3000',
        redirectSignOut: 'http://localhost:3000',
        responseType: 'code',
      },
    },
  });
};
