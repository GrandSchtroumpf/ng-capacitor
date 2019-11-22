import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job/map',
    pathMatch: 'full'
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
