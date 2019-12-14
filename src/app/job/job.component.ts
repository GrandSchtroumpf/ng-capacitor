import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UiQuery } from '../ui/+state/ui.query';
import { UiStore } from '../ui/+state/ui.store';

@Component({
  selector: 'job-root',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent {

  // TODO: Put them back in after view init
  mode$ = this.ui.selectMode('mobile', 'over');
  isDesktop$ = this.ui.isDesktop$;
  navOpened$ = this.ui.select('navOpened');

  constructor(private uiStore: UiStore, private ui: UiQuery) {}

  // Update the state depending on action from user
  setOpen(navOpened: boolean) {
    this.uiStore.update({ navOpened });
  }
}
