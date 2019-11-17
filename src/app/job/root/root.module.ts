import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { JobRootPage } from './root.page';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiModule } from 'src/app/ui/ui.module';

const material = [
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
];

const transloco = { provide: TRANSLOCO_SCOPE, useValue: 'jobs' };

const routes: Routes = [
  {
    path: '',
    component: JobRootPage,
    children: [{
      path: 'map',
      loadChildren: () => import('../map/map.module').then(m => m.MapModule)
    }, {
      path: ':jobId',
      loadChildren: () => import('../display/display.module').then(m => m.JobDisplayPageModule),
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    TranslocoModule,
    ...material
  ],
  declarations: [JobRootPage],
  providers: [transloco]
})
export class JobRootPageModule {}
