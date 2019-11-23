import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { JobStore, JobState } from './job.store';
import * as Fuse from 'fuse.js';
import { map, startWith } from 'rxjs/operators';
import { Job } from './job.model';
import { combineLatest, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

type JobSearchOptions = Partial<Fuse.FuseOptions<Job>>;
function createSearch(options: Partial<JobSearchOptions>): JobSearchOptions {
  return {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 10,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ['title', 'company'],
    ...options
  };
}

@Injectable({ providedIn: 'root' })
export class JobQuery extends QueryEntity<JobState> {

  form$ = this.select('form');

  constructor(protected store: JobStore) {
    super(store);
  }

  search(searchForm: FormControl, options: JobSearchOptions = {}): Observable<Job[]> {
    return combineLatest([
      this.createSearch(options),
      searchForm.valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([fuse, search]) => search ? fuse.search<Job>(search) : this.getAll())
    ) as Observable<Job[]>;
  }

  createSearch(options: JobSearchOptions = {}) {
    return this.selectAll().pipe(
      map(jobs => new Fuse(jobs, createSearch(options)))
    );
  }

  get form() {
    return this.getValue().form;
  }
}
