import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../../shared/services/home.service";
import { AuthService } from "../../../shared/services/auth.service";
import { MennuService } from "../../../shared/services/mennu.service";
import { Food } from 'src/app/shared/models/food.models';
import { CartService } from 'src/app/shared/services/cart.service';
import { element } from 'protractor';
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit {
  constructor(
    private home: HomeService,
    private auth: AuthService,
    private mennu: MennuService,
    private cart: CartService
  ) {}
  email: string;
  data = [];
  dataOfEmail:any[] = [];
  total :number;
  ngOnInit() {
    this.auth.checkLogin().onAuthStateChanged((user) => {
      this.email = user.email;
      this.data = this.getData(this.email);
    });
    this.mennu.getNumber.subscribe(data => {
      this.total = data;
    });
  }
  getData(email) {
    let temp = [];
    this.home.getDataCart(email).then((result) => {
      this.dataOfEmail = result.data()["Items"];
      result.data()["Items"].forEach((element) => {
        let be = element.split(".");
        this.mennu.getFoodvsId(be[2], be[0]).then((re) => {
          let item = new Food(
            re.data()["img"],
            re.data()["name"],
            re.data()["info"],
            re.data()["price"],
            re.data()["like"],
            re.data()["location"],
            re.id
          );
          temp.push({
            data: item,
            number: be[1],
            table: be[2]
          });
          this.mennu.setNumber(temp);
        });
      });
    });
    return temp;
  }
  ondataTotal(a) {

  }
  onChangeNumber(event) {
    let temp = event.split('.');
    this.data = this.data.map(element => {
      if (temp[0].includes(element['data']['uid'])) {
        element['number'] = temp[1]; 
      }
      return element;
    });
    this.dataOfEmail = this.dataOfEmail.map (element => {
      let tpd = element.split('.');
      if(temp[0].includes(tpd[0])) {
        tpd[1] = temp[1];
      }
      return tpd.join('.');
    });
    console.log(this.dataOfEmail);
    this.mennu.deleteItemInCart(this.email,this.dataOfEmail);
    this.mennu.setNumber(this.data);
  }
  onDeleteItem(event) {
    this.dataOfEmail = this.dataOfEmail.filter(element => {
      return element !== event; 
    });
    this.mennu.deleteItemInCart(this.email,this.dataOfEmail).then(result => {
      this.data = this.data.filter(item=> {
        return !event.includes(item['data']['uid']);
      });
    }).catch(err => {
      console.log(err);
    })
  }
  onSubmit() {
    this.cart.setFoods(this.data);
  }
}
