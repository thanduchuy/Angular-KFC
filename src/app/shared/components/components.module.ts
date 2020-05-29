import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MennuSliderComponent } from './mennu-slider/mennu-slider.component';
@NgModule({
  declarations: [SliderComponent, MennuSliderComponent],
  imports: [
    CommonModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [SliderComponent, MennuSliderComponent]
})
export class ComponentsModule { }
