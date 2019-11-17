import { InjectionToken, NgModule, Inject } from '@angular/core';
// Import firebase analytics
import { analytics } from 'firebase/app'; // <- Types
import 'firebase/analytics'; // <- Content
// Import function to get the app
import { appProvider, APP, App } from './app';

export type Analytics = analytics.Analytics;

// Create an injectable token for Google Analytics
export const ANALYTICS = new InjectionToken<Analytics>('Google Analytics for Firebase');


@NgModule({
  providers: [
    // Fill the app token with the function provided by @angular/fire
    appProvider,
    // Fill the analytics token on this app
    { provide: ANALYTICS, useFactory: (app: App) => app.analytics(), deps: [APP]}
  ]
})
export class AngularFireAnalyticsModule {
  constructor(@Inject(ANALYTICS) _) {
    // DI inject Analytics here for the automatic data collection
  }
}
