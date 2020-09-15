import { apiService } from './API/index';
import { Observable } from 'rxjs';

class JobService {
  public loadTransaction(idRequestor: string): Observable<any> {
    return apiService.get(`/job/3c2be1d7-0bae-4578-993f-9f010595909a`);
  }

}

export const jobService = new JobService();