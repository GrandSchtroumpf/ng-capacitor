import { Component, OnInit } from '@angular/core';
import { SettingsStore, Theme } from '../+state';

@Component({
  selector: 'settings-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(private store: SettingsStore) { }

  ngOnInit() {
  }

  setTheme(theme: Theme) {
    this.store.update({ theme });
  }

  setLanguage(lang: string) {}
}
