import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerMode, UiQuery } from '../+state/ui.query';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CdkDragMove, CdkDragExit, moveItemInArray, CdkDragRelease } from '@angular/cdk/drag-drop';

@Component({
  selector: 'list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListNavComponent implements AfterViewInit {
  @Input() position = 800;
  size = this.position;
  next = 0;

  showFilter = false;
  isOpened$: Observable<boolean>;
  mode$: Observable<DrawerMode>;
  sidenavWidth$: Observable<{ width: string }>;
  dragging: boolean;

  constructor(private ui: UiQuery) { }

  ngAfterViewInit() {
    this.mode$ = this.ui.selectMode('mobile', 'over');
    this.sidenavWidth$ = this.ui.selectSize('mobile').pipe(
      map(match => ({ width: match ? '100%' : '60%'}))
    );

  }

  changeSize(move: CdkDragMove) {
    this.next = move.distance.x;
  }

  exit() {
    this.size -= this.next;
    this.next = 0;
    this.dragging = false;
  }
}
