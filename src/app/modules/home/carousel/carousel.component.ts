import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home.service';
import { Slider_Food } from 'src/app/shared/models/Slider_food.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  constructor(private home: HomeService ) { }
  items: Slider_Food[] = [];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.home.getSlider_food().then(data =>{
      data.forEach(value => {
        this.items.push(value.data());
      });
      this.slides = this.chunk(this.items,3);
    });
  }

}
