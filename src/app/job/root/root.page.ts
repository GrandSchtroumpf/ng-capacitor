import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss'],
})
export class JobRootPage implements OnInit {
  showFilter = false;

  constructor() { }

  ngOnInit() {
  }

  open(event: MouseEvent) {
    event.stopPropagation();
  }

  close(event: MouseEvent) {
    event.stopPropagation();
    this.showFilter = false;
  }

}
