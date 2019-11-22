import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot} from '@angular/router';
import { JobService, JobQuery, JobState } from './+state';
import { CollectionGuard } from 'akita-ng-fire';

@Injectable({
  providedIn: 'root'
})
export class JobActiveGuard extends CollectionGuard<JobState> {
  private id: string;

  constructor(
    protected service: JobService,
    private query: JobQuery
  ) {
    super(service);
  }

  get awaitSync() {
    return !this.query.hasEntity(this.id);
  }

  sync(next: ActivatedRouteSnapshot) {
    this.id = next.params.jobId;
    return this.service.syncActive({ id: this.id });
  }

}
