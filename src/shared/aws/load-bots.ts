import { ref } from 'vue';
import { UserService, useUserService } from '../userService';

import { AuthPayload } from '@/types';
import { getEcsServices } from './get-services';
import { useCredentialsService } from '../credentialsService';

interface BotInfo {
  botName: string;
  ip: string;
  username: string;
  password: string;
}

async function addBot({ botName, ip, username, password }: BotInfo) {
  const url = `http://${ip}:8080`;
  const auth = ref<AuthPayload>({
    botName,
    url,
    username,
    password,
  });
  const botId = botName;
  const userService = useUserService(botId);
  cleanUpBots();
  await userService.login(auth.value);
}

function cleanUpBots() {
  Object.keys(UserService.getAvailableBots()).forEach((botId) => {
    const userService = useUserService(botId);
    userService.logout();
  });
}

export async function loadBots() {
  const credentialsService = useCredentialsService();
  const [username, password, url] = credentialsService.getBotCredentials();
  if (!username || !password || !url) {
    return;
  }
  const services = await getEcsServices(url);

  await Promise.all(
    services.map(({ service, publicIp }) =>
      addBot({ botName: service, ip: publicIp, username, password }),
    ),
  );
}
