import { Component, OnInit } from '@angular/core';
import { UiQuery } from '../../../ui/+state/ui.query';
import { Observable } from 'rxjs';
import { JobQuery } from '../../+state';

@Component({
  selector: 'job-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class JobViewComponent implements OnInit {

  isMobile$: Observable<boolean>;
  id$ = this.query.selectActiveId();

  constructor(private ui: UiQuery, private query: JobQuery) { }

  ngOnInit() {
    this.isMobile$ = this.ui.selectSize('mobile');
  }

}
