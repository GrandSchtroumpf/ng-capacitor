import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const redirectToSignin = {
  authGuardPipe: () => redirectUnauthorizedTo(['signin'])
};
