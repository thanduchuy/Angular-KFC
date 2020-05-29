import { Component, OnInit } from "@angular/core";
import { MennuService } from "src/app/shared/services/mennu.service";
import { Food } from "src/app/shared/models/food.models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-mennu",
  templateUrl: "./mennu.component.html",
  styleUrls: ["./mennu.component.scss"]
})
export class MennuComponent implements OnInit {
  foods = [];
  location: string;
  tables = [
    "mennu_food",
    "combo_GaRan",
    "mennu_combo_1nguoi",
    "mennu_combo_2nguoi",
    "mennu_food_combo_nhom"
  ];
  number = 1;
  constructor(private mn: MennuService, private routes: ActivatedRoute) {}
  ngOnInit() {
    this.location = this.routes.snapshot.params.city;
    this.tables.forEach((data) => {
      this.foods.push({
        data: this.getDataMennuFood(data),
        id: this.number + "a",
        nameTable: data
      });
      this.number++;
    });
  }
  getDataMennuFood(data) {
    let temp: Food[] = [];
    this.mn.getMennuFood(data).then((result) => {
      result.forEach((element) => {
        if (element.data()["location"].includes(this.location)) {
          let item = new Food(
            element.data()["img"],
            element.data()["name"],
            element.data()["info"],
            element.data()["price"],
            element.data()["like"],
            element.data()["location"],
            element.id
          );
          temp.push(item);
        }
      });
    });
    return temp;
  }
}
