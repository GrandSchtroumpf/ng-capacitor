import { InjectionToken } from '@angular/core';
import { initializeApp, app } from 'firebase/app';
import { environment } from '../../environments/environment';
import { _firebaseAppFactory } from '@angular/fire';

export type App = app.App;

export const APP = new InjectionToken<App>('Firebase app');

export const appProvider = {
  provide: APP,
  useFactory: () => _firebaseAppFactory(environment.firebase, 'ng-capacitor')
};
