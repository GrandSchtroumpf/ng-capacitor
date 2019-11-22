import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { redirectToSignin } from '../auth/auth.guard';

const routes = [{
  path: 'list',
  loadChildren: () => import('./list/list.module').then(m => m.JobListModule)
}, {
  path: 'dashboard',
  canActivate: [AngularFireAuthGuard],
  data: redirectToSignin,
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.JobDashboardModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class JobModule {}
