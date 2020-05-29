import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Shipment } from "../models/InfoShipment.model";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class CartService {
  db = firebase.firestore();
  private _Info: BehaviorSubject<Shipment> = new BehaviorSubject<Shipment>(
    new Shipment("", "", "", "", "", "", "")
  );
  textInfo: Observable<Shipment> = this._Info.asObservable();
  private _foods: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  food: Observable<any[]> = this._foods.asObservable();
  setInfoShipment(ship: Shipment) {
    this._Info.next(ship);
  }
  setFoods(food: any[]) {
    this._foods.next(food);
  }
  addDataBill(data, email) {
    return this.db
      .collection("Bill")
      .doc(email)
      .set({
        address: data["address"],
        name: data["name"],
        day: data["day"],
        phone: data["phone"],
        total: data["total"],
        Listfoods: data["foods"]
      });
  }
  constructor() {}
}
