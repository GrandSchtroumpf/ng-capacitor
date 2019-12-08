import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

// Widget
import { SettingsWidgetModule } from '../../settings/widget/widget.module';
import { AuthWidgetModule } from '../../auth/widget/widget.module';

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
    LandingRoutingModule,
    SettingsWidgetModule,
    AuthWidgetModule,
    ...material
  ]
})
export class LandingModule { }
