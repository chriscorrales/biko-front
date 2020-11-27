import { IFreelancer } from 'interface/People';
import { ICategory } from './Category';
import { IJob } from './Job';

export interface IVacancy {
  amount: number;
  id?: string;
  createDate?: Date;
  updateDate?: Date;
  freelancers?: IFreelancer[];
  category?: ICategory;
  hasCandidate?: boolean;
  wasSelected?: boolean;
  job: IJob;
}
