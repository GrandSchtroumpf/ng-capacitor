import { Injectable } from '@angular/core';
import { AuthStore, AuthState, FavoriteKeys } from './auth.store';
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

  /**
   * Add or remove an id to on of the favorite list
   * @param key The key of the favorite entity
   * @param id The id to add or remove
   */
  toggleFavorite(key: FavoriteKeys, id: string) {
    this.update((profile) => {
      if (!profile.favorites) {   // If there is no favorite at all
        return { favorites: { [key]: [id] } };
      } else if (!profile.favorites[key]) {   // If there is no favorite of this key
        return { favorites: { ...profile.favorites, [key]: [id] } };
      }
      return profile.favorites[key].includes(id)
        ? { favorites: { ...profile.favorites, [key]: profile.favorites[key].filter(fId => fId !== id)} }
        : { favorites: { ...profile.favorites, [key]: [ ...profile.favorites[key], id ] } };
    });
  }
}
