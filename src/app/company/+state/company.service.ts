import { Injectable } from '@angular/core';
import { CompanyStore, CompanyState } from './company.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'companies' })
export class CompanyService extends CollectionService<CompanyState> {

  constructor(store: CompanyStore) {
    super(store);
  }

}
