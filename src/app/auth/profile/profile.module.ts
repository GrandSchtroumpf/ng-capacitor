import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListNavModule } from '../../ui/list-nav/list-nav.module';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';


const material = [ MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatExpansionModule ];

import { ProfileComponent } from './profile.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [{
  path: '',
  component: ProfileComponent,
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
    RouterModule.forChild(routes),
    ListNavModule,
    ...material
  ],
  declarations: [ProfileComponent, IntroductionComponent, ExperienceComponent]
})
export class ProfileModule {}
