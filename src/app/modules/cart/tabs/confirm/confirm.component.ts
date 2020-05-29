import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "src/app/shared/services/cart.service";
import { Shipment } from "src/app/shared/models/InfoShipment.model";
import { Food } from "src/app/shared/models/food.models";
import { MennuService } from "src/app/shared/services/mennu.service";
import { formatNumber } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"]
})
export class ConfirmComponent implements OnInit {
  dataShipment: Shipment;
  dataFoods = [];
  totalPrice: any;
  priceLast: any;
  date: string;
  constructor(
    private cart: CartService,
    private menu: MennuService,
    private router: Router
  ) {}
  ngOnInit() {
    this.cart.textInfo.subscribe((data) => {
      this.dataShipment = data;
    });
    this.cart.food.subscribe((data) => {
      console.log(data);

      data.forEach((element) => {
        this.dataFoods.push({
          info:element["id"] + "," + element["number"] + "," + element["table"],
          name: element["data"]["name"],
          price: element["data"]["price"],
          number: element["number"],
          total:
            Number.parseInt(element["data"]["price"]) *
            Number.parseInt(element["number"])
        });
      });
      this.totalPrice = this.dataFoods.reduce((result, element) => {
        return result + element["total"];
      }, 0);
      this.priceLast = formatNumber(this.totalPrice + 10, "en-US");
      this.totalPrice = formatNumber(this.totalPrice, "en-US");
      this.date = Date().toString();
    });
  }
  onSubmit() {
    const day = this.date;
    const name = this.dataShipment.name;
    const phone = this.dataShipment.phone;
    const gmaill =
      this.dataShipment.gmail +
      "*" +
      Math.random()
        .toString(36)
        .slice(2);
    const address =
      this.dataShipment.address +
      "-" +
      this.dataShipment.city +
      "-" +
      this.dataShipment.distinct +
      "-" +
      this.dataShipment.local;
    const total = this.totalPrice;
    const foods = this.dataFoods.reduce((result: string[], element) => {
      result.push(element["info"]);
      return result;
    }, []);
    this.cart
      .addDataBill({ address, name, day, phone, total, foods }, gmaill)
      .then((ree) => {
        console.log(ree);
      });
    this.router.navigate(["/home"]);
  }
}
