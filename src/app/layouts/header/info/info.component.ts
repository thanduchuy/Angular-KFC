import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent implements OnInit {
  constructor(private auth: AuthService) {}
  email: string;
  url: string;
  User = {};
  ngOnInit() {
    this.auth.checkLogin().onAuthStateChanged((user) => {
      this.email = user.email;
      this.auth.getInfoUser(this.email).then((result) => {
        this.User = result.data();
        this.url =
          this.User["gender"] === "male"
            ? "/assets/img/mennu_food/depositphotos_263184192-stock-illustration-male-silhouette-avatar-default-avatar.jpg"
            : "/assets/img/mennu_food/f15b91de365c6e637d5d7e5b2ae682bc.jpg";
      });
    });
  }
  logOut() {
    this.auth.onLogout();
  }
}
