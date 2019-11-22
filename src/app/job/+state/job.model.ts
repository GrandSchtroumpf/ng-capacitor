export interface Job {
  id: string;
  title: string;
}

/**
 * A factory function that creates Job
 */
export function createJob(params: Partial<Job>) {
  return {

  } as Job;
}
