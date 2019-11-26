import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';

import { SplittedPanelModule } from '../ui/splitted-panel/splitted-panel.module';

// Material
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const material = [MatListModule, MatIconModule];

const routes = [{
  path: '',
  component: SettingsComponent,
  children: [{
    path: 'theme',
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
  }]
}];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SplittedPanelModule,
    ...material
  ]
})
export class SettingsModule { }
