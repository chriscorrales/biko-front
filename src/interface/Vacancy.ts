import { IFreelancer } from 'interface/People';
import { ICategory } from './Category';

export interface IVacancy {
  amount: number;
  id?: string;
  createDate?: Date;
  updateDate?: Date;
  freelancers?: IFreelancer[];
  category?: ICategory;
}
