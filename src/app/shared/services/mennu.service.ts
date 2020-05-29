import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class MennuService {
  db = firebase.firestore();
  private _location: BehaviorSubject<string> = new BehaviorSubject<string>("");
  textLocation: Observable<string> = this._location.asObservable();
  private _number: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  getNumber: Observable<number> = this._number.asObservable();
  constructor() {}
  getMennuFood(table: string) {
    return this.db.collection(table).get();
  }
  setTextLocation(text: string) {
    this._location.next(text);
  }
  setNumber(text) {
    let totalPrice = 0;
    text.forEach((element) => {
      totalPrice +=
        Number.parseInt(element["data"]["price"]) *
        Number.parseInt(element["number"]);
    });
    this._number.next(totalPrice);
  }
  getFoodvsId(nameTable, id) {
    return this.db
      .collection(nameTable)
      .doc(id)
      .get();
  }
  deleteItemInCart(email, data) {
    return this.db
      .collection("Cart")
      .doc(email)
      .set({
        Items: data
      });
  }
}
