import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatSidenavModule,
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ...material
  ]
})
export class CompanyModule { }
