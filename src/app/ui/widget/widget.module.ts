import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';
import { WidgetDirective } from './widget.directive';

import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [WidgetComponent, WidgetDirective],
  exports: [WidgetComponent, WidgetDirective],
  imports: [CommonModule, OverlayModule]
})
export class MatWidgetModule {}
