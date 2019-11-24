import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStore, AuthState, FavoriteKeys } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {

  profile$ = this.select('profile');
  uid$ = this.select('uid');

  constructor(protected store: AuthStore) {
    super(store);
  }

  get uid() {
    return this.getValue().uid;
  }

  get profile() {
    return this.getValue().profile;
  }

  selectFavorite(key: FavoriteKeys) {
    return this.select(state => {
      return state.profile && state.profile.favorites && state.profile.favorites[key] || [];
    });
  }
}
