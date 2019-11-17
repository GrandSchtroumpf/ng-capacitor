// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4200',
  production: false,
  firebase: {
    apiKey: 'AIzaSyAy3Aful41aZPkPMdw5o1xLrumawSF3E7o',
    authDomain: 'ng-capacitor.firebaseapp.com',
    databaseURL: 'https://ng-capacitor.firebaseio.com',
    projectId: 'ng-capacitor',
    storageBucket: 'ng-capacitor.appspot.com',
    messagingSenderId: '390422235451',
    appId: '1:390422235451:web:20819910af54f58b494f1e',
    measurementId: 'G-098LZQ3CXQ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
