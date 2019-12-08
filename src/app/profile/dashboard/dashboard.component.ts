import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthQuery, AuthService } from 'src/app/auth/+state';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'profile-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  profile$ = this.query.profile$;

  newExperience = new FormControl();

  constructor(
    private service: AuthService,
    private query: AuthQuery
  ) { }

  addExperience() {
    const title = this.newExperience.value;
    if (title) {
      this.service.update(profile => ({ experiences: [...profile.experiences, { title }] }));
      this.newExperience.reset();
    }
  }
}
