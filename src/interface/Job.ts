import { IAddress } from './Address';
import { IFreelancer, IRequestor } from './People';
import { IVacancy } from './Vacancy';

export interface IJob {
  createDate: Date;
  dateFinished: Date;
  description: string;
  id?: string;
  status: enStatus;
  title: string;
  updateDate: Date;
  selecteds: IFreelancer[];
  freelancers: IFreelancer[];
  vacancies: IVacancy[];
  address?: IAddress;
  requestor?: IRequestor;
}

export enum enStatus {
  OPEN_ENDED = 0,
  IN_PROGRESS = 1,
  FINISHED = 2,
  CANCELLED = 3,
}
