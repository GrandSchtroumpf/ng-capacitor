import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

const material = [MatListModule, MatRadioModule, MatIconModule];

import { ThemeComponent } from './theme.component';

const routes = [{
  path: '',
  component: ThemeComponent
}];

@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...material
  ]
})
export class ThemeModule { }
