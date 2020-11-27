import { Observable, ReplaySubject } from 'rxjs';
import { apiService } from './API/index';
import { IJob } from '../interface/Job';

class JobService {
  private jobs$ = new ReplaySubject<IJob[]>(1);

  public loadJobs() {
    this.jobs$.next([]);
    apiService.get(`/job`).subscribe((jobs) => {
      this.jobs$.next(jobs);
    });
  }

  public getJobs(): Observable<IJob[]> {
    return this.jobs$.asObservable();
  }
}

export const jobService = new JobService();
