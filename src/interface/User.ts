import { IFreelancer } from 'interface/People';
import { IRequestor } from './People';

export interface IUser {
  email: string;
  fullName: string;
  personType: string;
  image: string;
  phone: string;
  requestor?: IRequestor;
  freelancer?: IFreelancer;
}
