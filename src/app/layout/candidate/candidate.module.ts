import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';

// Widget
import { AuthWidgetModule } from '../../auth/widget/widget.module';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatSidenavModule,
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  AuthWidgetModule,
];

@NgModule({
  declarations: [CandidateComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    AuthWidgetModule,
    ...material
  ]
})
export class CandidateModule { }
