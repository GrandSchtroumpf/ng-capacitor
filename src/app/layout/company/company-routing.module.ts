import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyComponent } from './company.component';

const routes: Routes = [{
  path: '',
  component: CompanyComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () => import('../../job/dashboard/dashboard.module').then(m => m.JobDashboardModule)
  }, {
    path: 'company',
    loadChildren: () => import('../../company/dashboard/dashboard.module').then(m => m.DashboardModule)
  }, {
    path: 'settings',
    loadChildren: () => import('../../settings/settings.module').then(m => m.SettingsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
