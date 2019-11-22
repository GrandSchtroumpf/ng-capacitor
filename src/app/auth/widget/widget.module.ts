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

import { WidgetComponent } from './widget.component';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRippleModule,
  MatDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ...material
  ],
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
})
export class AuthWidgetModule {}
