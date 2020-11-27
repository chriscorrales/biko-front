import { Observable } from 'rxjs';
import { apiService } from 'services/API';

class SelectedCandidatesService {
  public selectedCandidates(data: any): Observable<void> {
    console.log('MANDANDO PRA API', data);
    return apiService.post('/job/selected', data);
  }
}

export const selectedCandidatesService = new SelectedCandidatesService();
