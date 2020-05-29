import { Component, OnInit , Input} from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() item: string;

  constructor(private home: HomeService) {
  }
  items = [];
  ngOnInit() {
    this.home.getSlider_party().then(data =>{
      this.items = this.item.split("*");
    });
  }
}
