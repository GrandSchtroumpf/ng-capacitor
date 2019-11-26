import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsStore, SettingsQuery, Theme } from '../+state';

type ThemeIcons = {
  [key in Theme]: string
};

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeComponent {

  selected$ = this.query.select('theme');
  themes: ThemeIcons = {
    default: 'brightness_4',
    dark: 'brightness_2',
    light: 'brightness_5'
  };

  constructor(
    private store: SettingsStore,
    private query: SettingsQuery,
  ) { }

  select(theme: Theme) {
    this.store.update({ theme });
  }
}
