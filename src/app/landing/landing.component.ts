import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  socials = ['facebook', 'twitter', 'linkedIn'];

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.socials.forEach(social => {
      iconRegistry.addSvgIcon(social, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${social}.svg`));
    });
  }

  ngOnInit() {
  }

}
