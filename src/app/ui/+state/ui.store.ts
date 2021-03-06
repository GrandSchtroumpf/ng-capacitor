import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UiState {
  navOpened: boolean;
  viewOpened: boolean;
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {

  constructor() {
    super({ navOpened: true, viewOpened: true });
  }

  closeNav() {
    this.update({ navOpened: false });
  }

  openNav() {
    this.update({ navOpened: true });
  }

  toggleNav() {
    this.update(state => ({ navOpened: !state.navOpened }));
  }

}

