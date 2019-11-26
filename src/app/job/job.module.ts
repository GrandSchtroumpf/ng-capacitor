import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { redirectToSignin } from '../auth/auth.guard';

import { JobComponent } from './job.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatSidenavModule,
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
];

// Component
import { AuthWidgetModule } from '../auth/widget/widget.module';

// Routes
const routes = [
  {
    path: '',
    component: JobComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then(m => m.JobListModule)
      },
      {
        path: 'dashboard',
        canActivate: [AngularFireAuthGuard],
        data: redirectToSignin,
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.JobDashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthWidgetModule,
    ...material
  ],
  declarations: [JobComponent]
})
export class JobModule {}
