import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Component
import { SearchBarComponent } from './search-bar.component';

const material = [MatToolbarModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ...material],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchBarModule {}
