import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconsManager } from '../../utils/icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {

  socials = ['facebook', 'twitter', 'linkedIn'];

  constructor(private icon: IconsManager) {}

  ngOnInit() {
    this.icon.register(this.socials);
  }

}
