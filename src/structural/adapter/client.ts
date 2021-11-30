import { emailValidatorFnAdapter } from './validation/email-validator-function-adapter';

const email = 'teste@gmail.com';

if (emailValidatorFnAdapter(email)) {
  console.log('É válido');
} else {
  console.log('É inválido');
}
