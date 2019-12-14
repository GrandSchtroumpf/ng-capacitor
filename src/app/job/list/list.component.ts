import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JobQuery, JobService } from '../+state';
import { AuthQuery } from 'src/app/auth/+state/auth.query';
import { AuthService } from 'src/app/auth/+state/auth.service';
import { map } from 'rxjs/operators';
import { fade } from '../../ui/animations';

@Component({
  selector: 'job-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [fade()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent implements OnInit {
  showFilter = false;

  searchForm = new FormControl('');
  jobs$ = this.query.search(this.searchForm);
  connected$ = this.authQuery.uid$;
  isFavorites$ = this.authQuery.selectFavorite('job').pipe(
    map((favorites) => favorites.reduce((acc, favorite) => {
      acc[favorite] = true;
      return acc;
    }, {}))
  );

  constructor(
    private service: JobService,
    private query: JobQuery,
    private authQuery: AuthQuery,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.service.syncCollection().subscribe();
  }

  toggleFavorite(jobId: string) {
    this.authService.toggleFavorite('job', jobId);
  }
}
