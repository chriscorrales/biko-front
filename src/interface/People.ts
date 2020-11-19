import { ICategory } from './Category';

export interface IPeople {
  birthdayDate: Date;
  createDate: Date;
  fullName: string;
  gender: enGender;
  id: string;
  image: string;
  personType: enPersonType;
  phone: string;
  updateDate: Date;
  linkedin?: string;
  github?: string;
  facebook?: string;
}

export enum enGender {
  MALE = 'M',
  FEMALE = 'F',
}

export enum enPersonType {
  NATURAL = 'F',
  JURISTIC = 'J',
  BOTH = 'A',
}

export interface IFreelancer {
  id: string;
  people: IPeople;
  category?: ICategory;
  expText?: string;
  createDate: Date;
  updateDate: Date;
}
