import { Component, OnInit } from '@angular/core';
import { IconsManager } from '../utils/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(icons: IconsManager) {
    icons.register('theme');
  }

  ngOnInit() {
  }

}
