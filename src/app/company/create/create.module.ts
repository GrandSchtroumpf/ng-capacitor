import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

const material = [
  MatSidenavModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
];

const routes = [{
  path: '',
  component: CreateComponent,
}];

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ...material
  ]
})
export class CreateModule { }
