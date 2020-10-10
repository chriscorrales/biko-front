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
}

enum enGender {
  MALE = 'M',
  FEMALE = 'F',
}

enum enPersonType {
  NATURAL = 'F',
  JURISTIC = 'J',
}

export interface IFreelancer {
  createDate: Date;
  id: string;
  people: IPeople;
  updateDate: Date;
}
