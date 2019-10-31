import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { JobRootPage } from './root.page';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UiModule } from 'src/app/ui/ui.module';

const material = [
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
];

const routes: Routes = [
  {
    path: '',
    component: JobRootPage,
    children: [{
      path: '',
      loadChildren: () => import('../empty/empty.module').then(m => m.JobEmptyPageModule)
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
    ...material
  ],
  declarations: [JobRootPage]
})
export class JobRootPageModule {}
