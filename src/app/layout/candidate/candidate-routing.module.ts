import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateComponent } from './candidate.component';

const routes: Routes = [{
  path: '',
  component: CandidateComponent,
  children: [{
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }, {
    path: 'list',
    loadChildren: () => import('../../job/list/list.module').then(m => m.JobListModule)
  }, {
    path: 'settings',
    loadChildren: () => import('../../settings/settings.module').then(m => m.SettingsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
