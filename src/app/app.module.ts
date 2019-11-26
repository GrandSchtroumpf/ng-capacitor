import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

// Akita Transloco
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { translocoLoader } from './transloco.loader';
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TranslocoConfig
} from '@ngneat/transloco';


const material = [];

const translocoConfig = {
  provide: TRANSLOCO_CONFIG,
  useValue: {
    availableLangs: ['fr', 'en'],
    defaultLang: 'fr',
    prodMode: environment.production
  } as TranslocoConfig
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material,

    // Angular Firebase
    AngularFireModule.initializeApp(environment.firebase, 'ng-capacitor'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,

    // Akita & Transloco
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    HttpClientModule,
    TranslocoModule
  ],
  providers: [translocoConfig, translocoLoader],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
