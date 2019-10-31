import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { JobEmptyPage } from './empty.page';

const routes: Routes = [
  {
    path: '',
    component: JobEmptyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JobEmptyPage]
})
export class JobEmptyPageModule {}
