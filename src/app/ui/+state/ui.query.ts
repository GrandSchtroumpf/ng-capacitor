import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Query } from '@datorama/akita';
import { UiStore, UiState } from './ui.store';
import { combineLatest } from 'rxjs';
import { map, delay, shareReplay } from 'rxjs/operators';

const screenSize = ['mobile', 'tablet', 'desktop'] as const;
export type Size = typeof screenSize[number];
export type DrawerMode = MatDrawer['mode'];

const breakpoints: Record<Size, string[]> = {
  desktop: [Breakpoints.Large],
  tablet: [Breakpoints.Medium, Breakpoints.Large],
  mobile: [Breakpoints.Small]
};

@Injectable({ providedIn: 'root' })
export class UiQuery extends Query<UiState> {
  isDesktop$ = this.selectSize('desktop');
  isMobile$ = this.selectSize('mobile');

  constructor(
    protected store: UiStore,
    private breakpointObserver: BreakpointObserver,
    private routerQuery: RouterQuery
  ) {
    super(store);
  }

  /**
   * Return true when the size of the screen match the size
   * @param size Size of the screen to match
   */
  selectSize(size: Size) {
    return this.breakpointObserver.observe(breakpoints[size]).pipe(
      deplay(0), // Needed for Expression has changed after it was checked
      map(({ matches }) => matches),
      shareReplay(1)
    );
  }

  selectMode(size: Size, mode: DrawerMode, fallback: DrawerMode = 'side') {
    return this.selectSize(size).pipe(map(match => (match ? mode : fallback)));
  }

  /**
   * Check if router focus the panel list (based on the name of the route)
   * @param name The name of the main route for the list
   */
  focusList(name: 'job') {
    return this.routerQuery
      .select(s => s.state.url)
      .pipe(map(url => url.split('/').pop() === name));
  }

  openViewPanel(size: Size, name: 'job') {
    return combineLatest([
      this.focusList(name),
      this.selectSize(size)
    ]).pipe(
      map(([focusList, desktop]) => !focusList || desktop),
    );
  };
}
