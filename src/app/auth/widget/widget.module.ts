import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { WidgetComponent } from './widget.component';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRippleModule,
  MatDividerModule,
  MatCardModule
];

import { MatWidgetModule } from '../../ui/widget/widget.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatWidgetModule,
    ...material
  ],
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
})
export class AuthWidgetModule {}
