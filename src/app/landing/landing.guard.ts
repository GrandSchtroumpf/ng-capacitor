import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UiStore } from '../ui/+state/ui.store';

@Injectable({ providedIn: 'root' })
export class LandingGuard implements CanActivate {
  constructor(private uiStore: UiStore) {}
  canActivate() {
    this.uiStore.closeNav();
    return true;
  }
}
