import { Component, OnInit, Inject } from "@angular/core";
import { HomeService } from "src/app/shared/services/home.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private home: HomeService) {}
  list = [];
  party = [];
  ngOnInit() {
    this.home.getSlider().then((data) => {
      data.forEach((ele) => {
        this.list.push(ele.data().img);
      });
    });
    this.home.getSlider_party().then((data) => {
      data.forEach((ele) => {
        this.party.push(ele.data().img);
      });
    });
  }
}
