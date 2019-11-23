import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JobQuery, JobService } from '../+state';

@Component({
  selector: 'job-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class JobListComponent implements OnInit {
  showFilter = false;

  searchForm = new FormControl('');
  jobs$ = this.query.search(this.searchForm);

  constructor(
    private service: JobService,
    private query: JobQuery
  ) { }

  ngOnInit() {
    this.service.syncCollection().subscribe();
  }
}
