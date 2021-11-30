import { SystemUserProxy } from './system-user/system-ser-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Teste', 'teste123');
  console.log('Isso vai levar dois segundos');
  console.log(await user.getAddresses());
}

clientCode();
