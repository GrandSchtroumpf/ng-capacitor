import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { UiQuery, DrawerMode } from '../ui/+state/ui.query';

@Component({
  selector: 'job-root',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;
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

