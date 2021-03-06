import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';


// Component
import { ListNavComponent } from './list-nav.component';

const material = [MatSidenavModule, MatIconModule, MatButtonModule, DragDropModule];

@NgModule({
  imports: [CommonModule, ...material],
  declarations: [ListNavComponent],
  exports: [ListNavComponent]
})
export class ListNavModule {}
