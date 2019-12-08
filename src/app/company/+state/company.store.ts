import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CompanyState extends EntityState<Company, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'company' })
export class CompanyStore extends EntityStore<CompanyState> {

  constructor() {
    super();
  }

}

