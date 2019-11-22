import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';

export interface JobState extends EntityState<Job, string>, ActiveState<string> {
  form: Partial<Job>;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'job' })
export class JobStore extends EntityStore<JobState> {

  constructor() {
    super();
  }

  setForm(job: Partial<Job>) {
    this.update({ form: job });
  }
}

