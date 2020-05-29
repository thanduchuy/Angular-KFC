export class Cart {
  img: string;
  info: string[];
  name: string;
  number: string;
  price: string;
  constructor(img, info, name, number, price) {
    this.img = img;
    this.info = info;
    this.name = name;
    this.number = number;
    this.price = price;
  }
}
