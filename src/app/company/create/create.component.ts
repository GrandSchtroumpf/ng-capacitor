import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { CreateCompanyForm } from './create.form';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {

  constructor(public form: CreateCompanyForm) {}

  select(event: StepperSelectionEvent) {

  }
}
