import { apiService } from './API/index';
import { Observable } from 'rxjs';
import { IJob } from '../interface/Job';

class JobService {
  public loadTransaction(idRequestor: string): Observable<IJob> {
    return apiService.get(`/job/${idRequestor}`);
  }

}

export const jobService = new JobService();