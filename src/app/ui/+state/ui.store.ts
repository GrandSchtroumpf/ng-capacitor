import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UiState {
  opened: boolean;
}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {

  constructor() {
    super({ opened: true });
  }

}

