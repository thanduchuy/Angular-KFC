export class Food {
  img?: string;
  name?: string;
  info?: string[];
  price?: number;
  like?: number;
  location?: string[];
  uid?: string;
  constructor(img, name, info, price, like, location, uid) {
    this.img = img;
    this.name = name;
    this.info = info;
    this.price = price;
    this.like = like;
    this.location = location;
    this.uid = uid;
  }
}
