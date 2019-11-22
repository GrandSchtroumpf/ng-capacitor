import { Injectable } from '@angular/core';
import { JobStore, JobState } from './job.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'jobs' })
export class JobService extends CollectionService<JobState> {

  constructor(store: JobStore) {
    super(store);
  }

}
