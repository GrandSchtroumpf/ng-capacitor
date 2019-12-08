import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
}, {
  path: 'list',
  loadChildren: () => import('./list/list.module').then(m => m.ListModule)
}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ProfileModule { }
