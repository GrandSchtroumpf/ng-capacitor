import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CreateCompanyForm extends FormGroup {
  constructor() {
    super({
      create: new FormGroup({}),
      role: new FormGroup({}),
      members: new FormGroup({}),
    });
  }

}
