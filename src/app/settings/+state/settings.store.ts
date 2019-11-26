import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export type Theme = 'default' | 'dark' | 'light';

export interface SettingsState {
  theme: Theme;
}

export function createInitialState(): SettingsState {
  return {
    theme: 'default'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'settings' })
export class SettingsStore extends Store<SettingsState> {

  constructor() {
    super(createInitialState());
  }

}

