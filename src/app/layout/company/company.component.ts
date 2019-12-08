import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { UiQuery } from '../../ui/+state/ui.query';
import { Observable } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements AfterViewInit {

  mode$: Observable<MatDrawerMode>;
  isDesktop$: Observable<boolean>;
  navOpened$: Observable<boolean>;

  constructor(private ui: UiQuery) {}

  ngAfterViewInit() {
    this.mode$ = this.ui.selectMode('mobile', 'over');
    this.isDesktop$ = this.ui.isDesktop$;
    this.navOpened$ = this.ui.select('navOpened');
  }
}
