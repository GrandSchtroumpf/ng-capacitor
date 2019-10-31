import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
    ]).pipe(
      delay(0), // Needed for Expression has changed after it was checked
    ).subscribe(({matches}) => matches ? this.sidenav.open() : this.sidenav.close());
  }
}
