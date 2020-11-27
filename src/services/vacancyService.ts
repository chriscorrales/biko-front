import { Observable, ReplaySubject } from 'rxjs';
import { IVacancy } from 'interface/Vacancy';
import { apiService } from './API/index';

class VacancyService {
  private vacancies$ = new ReplaySubject<IVacancy[]>(1);

  public loadJobsByCategory() {
    apiService.get(`/vacancy`).subscribe((vacancies) => {
      this.vacancies$.next(vacancies);
    });
  }

  public getJobs(): Observable<IVacancy[]> {
    return this.vacancies$.asObservable();
  }

  public subscribeAndUnsubscribe(vacancyId: string) {
    return apiService.put('/vacancy/subscribe/', { id: vacancyId });
  }
}

export const vacancyService = new VacancyService();
