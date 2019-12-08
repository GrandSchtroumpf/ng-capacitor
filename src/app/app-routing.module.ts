import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectToSignin } from './auth/auth.guard';

import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./auth/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'job',
    loadChildren: () =>
      import('./job/job.module').then(m => m.JobModule)
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then(m => m.CompanyModule)
  }
];

@NgModule({
  imports: [QuicklinkModule, RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
