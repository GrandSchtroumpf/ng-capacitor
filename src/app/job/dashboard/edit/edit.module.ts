import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Material

const material = [  ];


import { EditComponent } from './edit.component';

const routes: Routes = [{
  path: '',
  component: EditComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...material
  ],
  declarations: [EditComponent]
})
export class JobEditModule {}
