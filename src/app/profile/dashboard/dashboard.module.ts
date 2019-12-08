import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';


const material = [ MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatExpansionModule ];

import { DashboardComponent } from './dashboard.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { SplittedPanelModule } from '../../ui/splitted-panel/splitted-panel.module';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'introduction',
    component: IntroductionComponent,
  }, {
    path: 'experiences',
    component: ExperienceComponent
  }]
}];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SplittedPanelModule,
    ...material
  ],
  declarations: [DashboardComponent, IntroductionComponent, ExperienceComponent]
})
export class DashboardModule { }
