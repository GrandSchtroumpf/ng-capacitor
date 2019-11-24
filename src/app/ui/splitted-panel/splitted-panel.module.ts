import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';


// Component
import { SplittedPanelComponent } from './splitted-panel.component';

const material = [MatIconModule, MatButtonModule, DragDropModule];

@NgModule({
  imports: [CommonModule, ...material],
  declarations: [SplittedPanelComponent],
  exports: [SplittedPanelComponent]
})
export class SplittedPanelModule {}
