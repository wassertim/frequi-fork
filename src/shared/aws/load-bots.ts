import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import { ref } from '@vue/reactivity';
import { useUserService } from '../userService';
import { useBotStore } from '@/stores/ftbotwrapper';
import { AuthPayload, BotDescriptor } from '@/types';
import { configureAws, region } from './configuration';
import { getEcsServices } from './get-services';
import { getBotCredentials } from './get-bot-credentials';

interface BotInfo {
  botName: string;
  ip: string;
  username: string;
  password: string;
  botStore: ReturnType<typeof useBotStore>;
}

async function addBot({ botName, ip, username, password, botStore }: BotInfo) {
  const url = `http://${ip}:8080`;
  const auth = ref<AuthPayload>({
    botName,
    url,
    username,
    password,
  });
  const botId = botName;
  const userService = useUserService(botId);
  await userService.login(auth.value);
  const botDescriptor = {
    botName,
    botId: botName,
    botUrl: url,
  } as BotDescriptor;
  botStore.addBot(botDescriptor);
}

export async function loadBots() {
  configureAws();
  const botStore = useBotStore();
  const awsCredentials = await Auth.currentCredentials();
  AWS.config.update({
    ...awsCredentials,
    region,
  });
  const services = await getEcsServices();
  const [username, password] = await getBotCredentials();

  await Promise.all(
    services.map(({ service, publicIp }) =>
      addBot({ botName: service, ip: publicIp, username, password, botStore }),
    ),
  );
}
