import { Component, HostBinding, OnInit } from '@angular/core';
import { SettingsQuery, Theme } from './settings/+state';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class')
  theme: Theme;

  constructor(
    private settings: SettingsQuery,
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit() {
    this.settings.select('theme').subscribe(theme => {
      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      overlayContainerClasses.remove('dark', 'light', 'default');
      overlayContainerClasses.add(theme);
      this.theme = theme;
    });
  }

}
