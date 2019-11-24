import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FireAuthState, initialAuthState } from 'akita-ng-fire';

interface Favorites {
  job: string[];
}

export type FavoriteKeys = keyof Favorites;

export interface Profile {
  displayName: string;
  photoURL: string;
  favorites: Favorites;
}

export interface AuthState extends FireAuthState<Profile> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(initialAuthState);
  }
}

