import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthQuery } from '../+state/auth.query';
import { AuthService } from '../+state/auth.service';

@Component({
  selector: 'auth-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit {

  profile$ = this.query.profile$;

  constructor(
    private service: AuthService,
    private query: AuthQuery
  ) { }

  ngOnInit() {
    this.service.sync().subscribe();
  }
}
