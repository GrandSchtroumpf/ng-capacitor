import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  VerticalNavComponent,
  VerticalNavContentComponent,
  VerticalNavContainerComponent
} from './vertical-nav/vertical-nav.component';

@NgModule({
  declarations: [
    VerticalNavComponent,
    VerticalNavContentComponent,
    VerticalNavContainerComponent,
  ],
  exports: [
    VerticalNavComponent,
    VerticalNavContentComponent,
    VerticalNavContainerComponent,
  ],
  imports: [CommonModule]
})
export class UiModule {}
