import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SigninComponent } from './signin.component';

const material = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SigninComponent
      }
    ]),
    ...material
  ],
  declarations: [SigninComponent]
})
export class SigninModule {}
