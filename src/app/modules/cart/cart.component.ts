import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  constructor(private local: LocationService) {}
  ngOnInit() {}
}
