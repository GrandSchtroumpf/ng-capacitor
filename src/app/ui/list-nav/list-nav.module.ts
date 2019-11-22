import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';

// Component
import { ListNavComponent } from './list-nav.component';

const material = [MatSidenavModule];

@NgModule({
  imports: [CommonModule, ...material],
  declarations: [ListNavComponent],
  exports: [ListNavComponent]
})
export class ListNavModule {}
