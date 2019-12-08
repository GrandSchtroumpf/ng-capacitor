import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectToSignin } from './auth/auth.guard';
import { canActivate, redirectUnauthorizedTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  // {
  //   path: 'signin',
  //   loadChildren: () =>
  //     import('./auth/signin/signin.module').then(m => m.SigninModule)
  // },
  {
    path: 'job',
    loadChildren: () =>
      import('./job/job.module').then(m => m.JobModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./layout/company/company.module').then(m => m.CompanyModule),
    ...canActivate(() => redirectUnauthorizedTo(['landing/signin']))
  },
  {
    path: 'landing',
    loadChildren: () => import('./layout/landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [QuicklinkModule, RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
