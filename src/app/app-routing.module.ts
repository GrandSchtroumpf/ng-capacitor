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
  {
    path: 'job',
    loadChildren: () =>
      import('./job/job.module').then(m => m.JobModule)
  },
  {
    path: 'candidate',
    loadChildren: () => import('./layout/candidate/candidate.module').then(m => m.CandidateModule),
  },
  {
    path: 'company',
    ...canActivate(() => redirectUnauthorizedTo(['landing/signin'])),
    children: [{
      path: '',
      loadChildren: () => import('./layout/company/company.module').then(m => m.CompanyModule),
      // Todo : add verification on user
    }, {
      path: 'create',
      loadChildren: () => import('./company/create/create.module').then(m => m.CreateModule),
    }]
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
