import { Component, AfterViewInit, HostBinding } from '@angular/core';
import { SettingsQuery, Theme } from './settings/+state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  // @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  // navOpened$: Observable<boolean>;
  // isDesktop$: Observable<boolean>;
  // mode$: Observable<DrawerMode>;
  @HostBinding('class')
  theme: Theme;

  constructor(private settings: SettingsQuery) {}

  ngAfterViewInit() {
    this.settings.select('theme').subscribe(theme => this.theme = theme);
    // this.mode$ = this.ui.selectMode('mobile', 'over');
    // this.isDesktop$ = this.ui.isDesktop$;
    // this.navOpened$ = this.ui.select('navOpened');
  }
}
