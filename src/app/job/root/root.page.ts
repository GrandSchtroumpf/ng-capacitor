import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UiQuery, DrawerMode } from '../../ui/+state/ui.query';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, combineLatest } from 'rxjs';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'job-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss'],
})
export class JobRootPage implements AfterViewInit {
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  showFilter = false;
  isOpened$: Observable<boolean>;
  mode$: Observable<DrawerMode>;
  sidenavWidth$: Observable<{ width: string }>;

  constructor(private ui: UiQuery) { }

  ngAfterViewInit() {
    this.mode$ = this.ui.selectMode('mobile', 'over');
    this.sidenavWidth$ = this.ui.selectSize('mobile').pipe(
      map(match => ({ width: match ? '100%' : '60%'}))
    );
    this.isOpened$ = this.ui.openViewPanel('tablet', 'job').pipe(
      tap(shouldOpen => shouldOpen ? this.sidenav.open() : this.sidenav.close())
    );
  }

  open(event: MouseEvent) {
    event.stopPropagation();
  }

  close(event: MouseEvent) {
    event.stopPropagation();
    this.showFilter = false;
  }

}
