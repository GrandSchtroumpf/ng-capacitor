import { ID } from '@datorama/akita';

export type Role = 'admin' | 'member';

export interface Company {
  id: ID;
  members: Record<string, Role>;
  name: string;
  logo: string;
  website: string;
}

/**
 * A factory function that creates Company
 */
export function createCompany(params: Partial<Company>) {
  return {

  } as Company;
}
