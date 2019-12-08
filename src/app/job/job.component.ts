import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UiQuery, DrawerMode } from '../ui/+state/ui.query';

@Component({
  selector: 'job-root',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent implements AfterViewInit {

  // TODO: Put them back in after view init
  mode$ = this.ui.selectMode('mobile', 'over');
  isDesktop$ = this.ui.isDesktop$;
  navOpened$ = this.ui.select('navOpened');

  constructor(private ui: UiQuery) {}

  ngAfterViewInit() {

  }
}
