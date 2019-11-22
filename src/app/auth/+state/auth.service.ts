import { Injectable } from '@angular/core';
import { AuthStore, AuthState } from './auth.store';
import { CollectionConfig, FireAuthService } from 'akita-ng-fire';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'profiles' })
export class AuthService extends FireAuthService<AuthState> {

  constructor(store: AuthStore, private router: Router) {
    super(store);
  }

  onSignin() {
    this.router.navigate(['/']);
  }
}
