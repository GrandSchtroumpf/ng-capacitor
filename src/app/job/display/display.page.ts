import { Component, OnInit } from '@angular/core';
import { UiQuery } from '../../ui/+state/ui.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'job-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class JobDisplayPage implements OnInit {

  isMobile$: Observable<boolean>;

  constructor(private ui: UiQuery) { }

  ngOnInit() {
    this.isMobile$ = this.ui.selectSize('mobile');
  }

}
