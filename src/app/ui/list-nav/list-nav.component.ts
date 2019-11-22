import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerMode, UiQuery } from '../+state/ui.query';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.scss']
})
export class ListNavComponent implements AfterViewInit {
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


}
