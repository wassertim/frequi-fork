import { Auth } from 'aws-amplify';
import { ref } from '@vue/reactivity';
import { useUserService } from '../userService';
import { useBotStore } from '@/stores/ftbotwrapper';
import { AuthPayload, BotDescriptor } from '@/types';
import { configureAws } from './configuration';
import { getBotCredentials, getEcsServices } from './get-services';

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

export function loadBots() {
  const botStore = useBotStore();
  configureAws();
  Auth.currentCredentials().then(async (credentials) => {
    const services = await getEcsServices(credentials);
    const { username, password } = await getBotCredentials();
    if (!username || !password) {
      throw new Error('No username or password');
    }
    await Promise.all(
      services.map(({ service, publicIp }) => {
        return addBot({ botName: service, ip: publicIp, username, password, botStore });
      }),
    );
  });
}