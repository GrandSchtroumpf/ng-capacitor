import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FireProvider } from 'akita-ng-fire';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../+state/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {
  providers: FireProvider[] = ['google', 'microsoft', 'facebook', 'twitter']
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private service: AuthService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.providers.forEach(provider => {
      iconRegistry.addSvgIcon(provider, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${provider}.svg`));
    });
  }

  ngOnInit() {
  }

  signinWith(provider: FireProvider) {
    this.service.signin(provider);
  }

  signin() {
    const { email, password } = this.form.value;
    this.service.signin(email, password);
  }
}
