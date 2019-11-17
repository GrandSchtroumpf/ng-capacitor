import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Analytics, ANALYTICS } from '../../utils/analytics';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    // @Inject(ANALYTICS) private analytics: Analytics
  ) { }

  ngOnInit() {
  }

  signin() {
    // this.analytics.logEvent('signin');
  }
}
