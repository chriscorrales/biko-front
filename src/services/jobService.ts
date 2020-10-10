import { Observable } from 'rxjs';
import { apiService } from './API/index';
import { IJob } from '../interface/Job';

class JobService {
  public loadTransaction(idRequestor: string): Observable<IJob[]> {
    return apiService.get(`/job/${idRequestor}`);
  }
}

export const jobService = new JobService();
