import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material = [ MatToolbarModule, MatButtonModule, MatIconModule ];


import { JobDisplayPage } from './display.page';

const routes: Routes = [
  {
    path: '',
    component: JobDisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...material
  ],
  declarations: [JobDisplayPage]
})
export class JobDisplayPageModule {}
