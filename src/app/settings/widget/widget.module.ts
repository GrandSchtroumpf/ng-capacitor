import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const material = [MatButtonModule, MatIconModule, MatMenuModule];

@NgModule({
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
  imports: [
    CommonModule,
    ...material
  ]
})
export class SettingsWidgetModule { }
