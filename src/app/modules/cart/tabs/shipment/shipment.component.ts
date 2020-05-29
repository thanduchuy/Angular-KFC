import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/shared/services/location.service";
import { City } from "src/app/shared/models/city.models";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Distinct } from "src/app/shared/models/distinct.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { Shipment } from "src/app/shared/models/InfoShipment.model";
import { CartService } from "src/app/shared/services/cart.service";
@Component({
  selector: "app-shipment",
  templateUrl: "./shipment.component.html",
  styleUrls: ["./shipment.component.scss"]
})
export class ShipmentComponent implements OnInit {
  dataCitys: City[];
  dataDistict: Distinct[];
  dataWard: Distinct[];
  formGroup: FormGroup;
  formLogin: FormGroup;
  onClickDistict = true;
  onClickWard = true;
  onLogin: boolean;
  name: string;
  gmail: string;
  city: string;
  distint: string;
  constructor(
    private local: LocationService,
    private fb: FormBuilder,
    private auth: AuthService,
    private cart: CartService
  ) {}
  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required]],
      city: ["Tỉnh/Thành Phố", [Validators.required]],
      distict: ["Quận/Huyện", [Validators.required]],
      ward: ["Phường", [Validators.required]]
    });
    this.formLogin = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
      password: ["", [Validators.required]]
    });
    this.auth.checkLogin().onAuthStateChanged((user) => {
      this.onLogin = user != null;
      this.gmail = user.email;
      this.auth.getInfoUser(this.gmail).then((data) => {
        this.name = data.data()["name"];
      });
    });
    this.local.getAllCity().subscribe((data) => {
      this.dataCitys = Object.values(data);
    });
  }
  onChangeCity() {
    const cityName = this.formGroup.value["city"].split(",");
    this.onClickDistict = false;
    this.local.getDistinctOfCity(cityName[0]).subscribe((data) => {
      this.dataDistict = Object.values(data);
    });
  }
  onChangeDistict() {
    const distict = this.formGroup.value["distict"].split(",");
    this.onClickWard = false;
    this.local.getWardOfDistinct(distict[0]).subscribe((data) => {
      this.dataWard = Object.values(data);
    });
  }
  OnSignUp() {}
  onSubmit() {
    let {
      name,
      address,
      phone,
      email,
      city,
      distict,
      ward
    } = this.formGroup.value;
    if (name === "") {
      name = this.name;
    }
    if (email === "") {
      email = this.gmail;
    }
    let confirm = new Shipment(
      name,
      address,
      city.split(",")[1],
      distict.split(",")[1],
      ward,
      phone,
      email
    );
    this.cart.setInfoShipment(confirm);
  }
}
