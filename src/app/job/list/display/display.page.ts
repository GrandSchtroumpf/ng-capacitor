import { Component, OnInit } from '@angular/core';
import { UiQuery } from '../../../ui/+state/ui.query';
import { Observable } from 'rxjs';
import { JobQuery } from '../../+state';

@Component({
  selector: 'job-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class JobDisplayComponent implements OnInit {

  isMobile$: Observable<boolean>;
  id$ = this.query.selectActiveId();

  constructor(private ui: UiQuery, private query: JobQuery) { }

  ngOnInit() {
    this.isMobile$ = this.ui.selectSize('mobile');
  }

}
