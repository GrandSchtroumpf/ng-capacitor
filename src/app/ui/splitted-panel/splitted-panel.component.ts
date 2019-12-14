import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { UiQuery } from '../+state/ui.query';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

function getSize([ size, isMobile, isOpen ]) {
  if (isOpen) {
    return isMobile ? '100%' : `${size}px`;
  } else {
    return isMobile ? '0' : `${size}px`;
  }
}

@Component({
  selector: 'splitted-panel',
  templateUrl: './splitted-panel.component.html',
  styleUrls: ['./splitted-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplittedPanelComponent {
  initialPosition = 800;
  private isOpen = new BehaviorSubject(true);
  private size = new BehaviorSubject(this.initialPosition);
  private next = 0;

  @Input() set position(size: number) {
    this.size.next(size);
  }
  @Input() set opened(isOpen: boolean) {
    this.isOpen.next(isOpen);
  }

  showFilter = false;
  isMobile$ = this.ui.selectSize('mobile');
  dragging: boolean;

  // If mobile don't split the screen
  size$ = combineLatest([
    this.size.asObservable(),
    this.isMobile$,
    this.isOpen.asObservable()
  ]).pipe(
    map(getSize)
  );

  constructor(private ui: UiQuery) { }

  changeSize(move: CdkDragMove) {
    this.next = move.distance.x;
  }

  exit() {
    this.size.next(this.size.getValue() - this.next);
    this.next = 0;
    this.dragging = false;
  }
}
