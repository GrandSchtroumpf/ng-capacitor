import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { JobListComponent } from './list.component';

// Material
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { JobActiveGuard } from '../active.guard';

import { SplittedPanelModule } from '../../ui/splitted-panel/splitted-panel.module';
import { SearchBarModule } from '../../ui/search-bar/search-bar.module';

const material = [
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

const transloco = { provide: TRANSLOCO_SCOPE, useValue: 'jobs' };

const routes: Routes = [
  {
    path: '',
    component: JobListComponent,
    children: [{
      path: 'map',
      loadChildren: () => import('./map/map.module').then(m => m.MapModule)
    }, {
      path: ':jobId',
      canActivate: [JobActiveGuard],
      canDeactivate: [JobActiveGuard],
      loadChildren: () => import('./view/view.module').then(m => m.JobViewModule),
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslocoModule,
    SplittedPanelModule,
    SearchBarModule,
    ...material
  ],
  declarations: [JobListComponent],
  providers: [transloco]
})
export class JobListModule {}
