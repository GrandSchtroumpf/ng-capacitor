import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JobService, JobQuery } from '../../+state';
import { AuthQuery } from 'src/app/auth/+state/auth.query';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private service: JobService,
    private query: JobQuery,
    private auth: AuthQuery
  ) { }

  ngOnInit() {
    this.sub = this.query.form$.pipe(
      tap(job => this.form.patchValue(job))
    ).subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  create() {
    const createdBy = this.auth.uid;
    this.service.add({ ...this.form.value, createdBy });
  }
}
