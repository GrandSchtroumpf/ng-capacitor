import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

// Widget
import { AuthWidgetModule } from '../../auth/widget/widget.module';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatSidenavModule,
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  AuthWidgetModule,
];

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AuthWidgetModule,
    ...material
  ]
})
export class CompanyModule { }
