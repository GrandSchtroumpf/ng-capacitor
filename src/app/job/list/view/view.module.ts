import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material = [ MatToolbarModule, MatButtonModule, MatIconModule ];


import { JobViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',
    component: JobViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...material
  ],
  declarations: [JobViewComponent]
})
export class JobViewModule {}
