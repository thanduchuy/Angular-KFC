import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { ModulesRoutingModule } from "./modules-routing.module";
import { HomeService } from "../shared/services/home.service";
import { CarouselComponent } from "./home/carousel/carousel.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MemberComponent } from "./member/member.component";
import { CartComponent } from "./cart/cart.component";
import { TabsComponent } from "./cart/tabs/tabs.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from "@angular/material/dialog";
import { PopupFooterComponent } from "./popup-footer/popup-footer.component";
import { MennuComponent } from "./mennu/mennu.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from "./mennu/card/card.component";
import { ItemComponent } from "./cart/tabs/item/item.component";
import { ShipmentComponent } from "./cart/tabs/shipment/shipment.component";
import { ConfirmComponent } from './cart/tabs/confirm/confirm.component';
@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    MemberComponent,
    CartComponent,
    TabsComponent,
    PopupFooterComponent,
    MennuComponent,
    CardComponent,
    ItemComponent,
    ShipmentComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    NgbModule,
    MDBBootstrapModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HomeService]
})
export class ModulesModule {}
