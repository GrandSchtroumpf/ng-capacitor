import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


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
    RouterModule.forChild(routes)
  ],
  declarations: [JobDisplayPage]
})
export class JobDisplayPageModule {}
