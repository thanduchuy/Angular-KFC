import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-shipment",
  templateUrl: "./input-shipment.component.html",
  styleUrls: ["./input-shipment.component.scss"]
})
export class InputShipmentComponent implements OnInit {
  @Input() value: string;
  @Input() default: string;
  constructor() {}

  ngOnInit() {}
}
