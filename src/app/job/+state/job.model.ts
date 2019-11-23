import { firestore } from 'firebase';

export interface Job {
  id: string;
  /** uid of the user who created this job offer */
  createdBy: string;
  title: string;
  description: string;
  url: string;
  position: google.maps.LatLngLiteral;
  company: string;
  city: string;
  state: string;
  country: string;
  source: string;
  date: firestore.Timestamp;
  expired: boolean;
}

/**
 * A factory function that creates Job
 */
export function createJob(params: Partial<Job>) {
  return {

  } as Job;
}
