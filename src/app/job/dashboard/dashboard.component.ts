import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { JobService, JobQuery } from '../+state';
import { AuthQuery } from 'src/app/auth/+state/auth.query';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'job-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobDashboardComponent implements OnInit {
  jobs$ = this.query.selectAll();

  constructor(
    private service: JobService,
    private query: JobQuery,
    private auth: AuthQuery
  ) { }

  ngOnInit() {
    this.auth.select('uid').pipe(
      switchMap(uid => this.service.syncCollection(ref => ref.where('createdBy', '==', uid)))
    ).subscribe();
  }

}
