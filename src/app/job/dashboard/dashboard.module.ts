import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListNavModule } from '../../ui/list-nav/list-nav.module';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const material = [ MatToolbarModule, MatButtonModule, MatIconModule, MatListModule ];

import { JobDashboardComponent } from './dashboard.component';
import { JobEditGuard } from '../edit.guard';

const routes: Routes = [{
  path: '',
  component: JobDashboardComponent,
  children: [{
    path: ':jobId',
    canActivate: [JobEditGuard],
    loadChildren: () => import('./edit/edit.module').then(m => m.JobEditModule)
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ListNavModule,
    ...material
  ],
  declarations: [JobDashboardComponent]
})
export class JobDashboardModule {}
