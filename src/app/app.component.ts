import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { UiQuery, DrawerMode } from './ui/+state/ui.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  navOpened$: Observable<boolean>;
  isDesktop$: Observable<boolean>;
  mode$: Observable<DrawerMode>;

  constructor(private ui: UiQuery) {}

  ngAfterViewInit() {
    this.mode$ = this.ui.selectMode('mobile', 'over');
    this.isDesktop$ = this.ui.isDesktop$;
    this.navOpened$ = this.ui.select('navOpened');
  }
}
