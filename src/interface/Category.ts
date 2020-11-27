import { IVacancy } from 'interface/Vacancy';

export interface ICategory {
  createDate?: Date;
  id: string;
  name: string;
  updateDate: string;
  vacancies: IVacancy[];
}
