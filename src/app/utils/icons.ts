import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({ providedIn: 'root' })
export class IconsManager {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  register(icons: string[] | string) {
    if (Array.isArray(icons)) {
      icons.forEach(icon => {
        const path = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`);
        this.iconRegistry.addSvgIcon(icon, path);
      });
    } else {
      const path = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icons}.svg`);
      this.iconRegistry.addSvgIcon(icons, path);
    }
  }
}
