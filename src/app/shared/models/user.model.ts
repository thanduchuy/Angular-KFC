export class User {
  name?: string;
  email?: string;
  bithday?: string;
  gender: string;
  numberPhone: string;
  constructor(name, email, genderMale, day, month, year, phone) {
    this.name = name;
    this.email = email;
    this.gender = genderMale === 'on' ? 'male' : 'female';
    this.bithday = day + '/' + month + '/' + year;
    this.numberPhone = phone;
  }
}
