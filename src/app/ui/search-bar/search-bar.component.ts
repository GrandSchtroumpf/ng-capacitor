import { Component, OnInit, Self, ChangeDetectionStrategy } from '@angular/core';
import { UiStore } from '../+state/ui.store';
import { NgControl } from '@angular/forms';

@Component({
  selector: '[formControl]search-bar, [formControlName]search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  constructor(
    @Self() public ngControl: NgControl,
    private uiStore: UiStore
  ) { }

  get control() {
    return this.ngControl['form'];
  }

  ngOnInit() {
  }

  toggleNav() {
    this.uiStore.toggleNav();
  }

}
