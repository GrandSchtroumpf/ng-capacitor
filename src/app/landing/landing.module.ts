import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

// Widget
import { SettingsWidgetModule } from '../settings/widget/widget.module';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatDividerModule,
];

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SettingsWidgetModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'signin',
            loadChildren: () =>
              import('../auth/signin/signin.module').then(m => m.SigninModule)
          }
        ]
      }
    ]),
    ...material
  ]
})
export class LandingModule {}
