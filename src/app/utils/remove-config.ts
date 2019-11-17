import { InjectionToken, NgModule, APP_INITIALIZER } from '@angular/core';
import { remoteConfig } from 'firebase/app';
import 'firebase/remote-config';
import { App } from './app';
import { _firebaseAppFactory } from '@angular/fire';
import { environment } from '../../environments/environment';

export type RemoteConfig = remoteConfig.RemoteConfig;

export const REMOTE_CONFIG = new InjectionToken('Firebase Remote Config');
export const APP = new InjectionToken<App>('Firebase app');

// Set default and Fetch the content of config from Remote Config
function fetchConfig(config: RemoteConfig) {
  return () => {
    config.settings.minimumFetchIntervalMillis = 3600000;
    config.defaultConfig = {
      lang: 'en'
    };
    return config.fetchAndActivate();
  };
}

@NgModule({
  providers: [
    // Fill the app token with the function provided by @angular/fire
    {
      provide: APP,
      useFactory: () => _firebaseAppFactory(environment.firebase, 'ng-capacitor')
    },
    // Fill the analytics token on this app
    {
      provide: REMOTE_CONFIG,
      useFactory: (app: App) => app.remoteConfig(),
      deps: [APP]
    },
    // Run fetchConfig during initialization of the app
    {
      provide: APP_INITIALIZER,
      useFactory: fetchConfig,
      multi: true,
      deps: [REMOTE_CONFIG]
    }
  ]
})
export class AngularFireRemoteConfigModule {}
