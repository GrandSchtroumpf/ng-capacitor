import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService, JobStore } from './+state';

@Injectable({
  providedIn: 'root'
})
export class JobEditGuard implements CanActivate {

  constructor(
    private service: JobService,
    private store: JobStore,
  ) {}

  async canActivate(next: ActivatedRouteSnapshot) {
    const id: string = next.params.jobId;
    if (id === 'form') {
      this.store.setForm({});
    } else {
      const job = await this.service.getValue(id);
      this.store.setForm(job);
    }
    return true;
  }

}
