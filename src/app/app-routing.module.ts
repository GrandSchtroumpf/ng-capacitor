import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectToSignin } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./auth/profile/profile.module').then(m => m.ProfileModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
