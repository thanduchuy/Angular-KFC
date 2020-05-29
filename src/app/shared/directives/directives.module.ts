import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { PopupComponent } from "./popup/popup.component";
import { InputShipmentComponent } from "./input-shipment/input-shipment.component";

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    PopupComponent,
    InputShipmentComponent
  ],
  imports: [CommonModule],
  exports: [
    InputComponent,
    CheckboxComponent,
    DropdownComponent,
    PopupComponent,
    InputShipmentComponent
  ]
})
export class DirectivesModule {}
