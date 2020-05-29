import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { HomeService } from "../../services/home.service";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  @Input() like: string;
  @Input() name: string;
  @Input() price: string;
  @Input() info: string;
  @Input() img: string;
  @Input() uid: string;
  @Input() nameTable: string;
  @Output() Close: EventEmitter<string> = new EventEmitter<string>();
  list = [];
  number = 1;
  email: string;
  carts = [];
  constructor(private auth: AuthService, private home: HomeService) {}

  ngOnInit() {
    this.list = this.info.split(",");
    this.auth.checkLogin().onAuthStateChanged(user => {
      this.email = user.email;
    });
  }
  onUp() {
    this.number === 99 ? (this.number = 1) : this.number++;
  }
  onDown() {
    this.number === 1 ? (this.number = 99) : this.number--;
  }
  onClose() {
    this.Close.emit("none");
  }
  async onAddCart() {
    await this.home.getDataCart(this.email).then(data => {
        this.carts = data.data()["Items"];
      })
      .catch(error => {
        console.log(error);
      });
    await this.carts.push(this.uid + '.' + this.number + '.' + this.nameTable);
    await this.home.addItemOfCart(this.email, this.carts).then(err => {
        console.log(err);
      })
      .catch(ree => {
        console.log(ree);
      });
      this.Close.emit("none");
  }
}
