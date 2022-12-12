export class CredentialsService {
  public saveBotCredentials(username: string, password: string, url: string): void {
    const base64 = btoa(JSON.stringify({ username, password, url }));
    localStorage.setItem('CRED', base64);
  }

  public getBotCredentials(): [string, string, string] {
    const base64 = localStorage.getItem('CRED');
    if (!base64) {
      return ['', '', ''];
    }
    const { username, password, url } = JSON.parse(atob(base64));
    return [username, password, url];
  }
}

export function useCredentialsService() {
  return new CredentialsService();
}
