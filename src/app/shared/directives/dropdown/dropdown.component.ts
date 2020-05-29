import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
  constructor() {}
  @Input() items: string;
  @Input() widgth: string;
  drops = [];
  ngOnInit() {
    this.drops = this.items.split("*");
  }
}
