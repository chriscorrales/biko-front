import Yup from 'components/Util/Yup';
import { Observable } from 'rxjs';
import { apiService } from 'services/API';
import { ICategory } from '../../interface/Category';

export const JobSchema = Yup.object().shape({
  title: Yup.string().max(60).required(),
  description: Yup.string().required().max(255),
  vacancies: Yup.array(
    Yup.object().shape({
      category: Yup.object().required(),
      amount: Yup.number().min(1).max(10),
    })
  )
    .max(10)
    .min(1),
});

class JobModalService {
  public listCategories(): Observable<ICategory[]> {
    return apiService.get('/category');
  }
}

export const jobModalService = new JobModalService();
