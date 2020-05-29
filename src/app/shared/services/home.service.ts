import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.models';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  db = firebase.firestore();
  constructor() { }
  getFirebase() {
    return this.db;
  }
  getSlider() {
    return this.db.collection('slider-banner').get();
  }
  getSlider_food() {
    return this.db.collection('slider_food').get();
  }
  getSlider_party() {
    return this.db.collection('slider_party').get();
  }
  setDataUser(email, user: User) {
    return this.db.collection('member').doc(email).set({
      birthday: user.bithday,
      name: user.name,
      gender: user.gender,
      email: user.email,
      numberPhone: user.numberPhone
    });
  }
  async getDataCart(email) {
    let check = await this.isEmptyOfCart(email);
    if (!check) {
      this.db.collection('Cart').doc(email).set(
        {
          Items: []
        }
      );
    }
    return this.db.collection('Cart').doc(email).get();
  }
  addItemOfCart(email, item) {
    return this.db.collection('Cart').doc(email).set(
      {
        Items: item
      }
    );
  }
  async isEmptyOfCart(email) {
    let bool;
    await this.db.collection('Cart').doc(email).get().then(result => {
      bool = result.exists;
    });
    return bool;
  }
}
