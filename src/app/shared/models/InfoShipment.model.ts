export class Shipment {
  name: string;
  address: string;
  city: string;
  distinct: string;
  local: string;
  phone: string;
  gmail: string;
  constructor(name, address, city, distinct, local, phone, gmail) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.distinct = distinct;
    this.local = local;
    this.phone = phone;
    this.gmail = gmail;
  }
}
