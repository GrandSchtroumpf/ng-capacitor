import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  VerticalNavComponent,
  VerticalNavContentComponent,
  VerticalNavContainerComponent
} from './vertical-nav/vertical-nav.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListNavComponent } from './list-nav/list-nav.component';

@NgModule({
  declarations: [
    VerticalNavComponent,
    VerticalNavContentComponent,
    VerticalNavContainerComponent,
    SearchBarComponent,
    ListNavComponent
  ],
  exports: [
    VerticalNavComponent,
    VerticalNavContentComponent,
    VerticalNavContainerComponent,
  ],
  imports: [CommonModule]
})
export class UiModule {}
