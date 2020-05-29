import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layouts/header/header.component";
import { SharedModule } from "./shared/shared.module";
import * as firebase from "firebase/app";
import { FooterComponent } from "./layouts/footer/footer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { InfoComponent } from "./layouts/header/info/info.component";
import { environment } from "src/environments/environment";
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, InfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    NgbModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAmrJF7w6YtElcjpGp0SZUtBnhIfYqV2NE",
      authDomain: "kfc-vn-3ee3e.firebaseapp.com",
      databaseURL: "https://kfc-vn-3ee3e.firebaseio.com",
      projectId: "kfc-vn-3ee3e",
      storageBucket: "",
      messagingSenderId: "1084176226317",
      appId: "1:1084176226317:web:d250f7a358ca2fc0991d44"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
