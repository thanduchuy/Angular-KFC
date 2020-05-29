import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() img: string;
  @Input() name: string;
  @Input() price: string;
  @Input() like: string;
  @Input() info: string;
  @Input() uid: string;
  @Input() nameTable: string;
  display = 'none';
  constructor() { }

  ngOnInit() {
  }
  onSumbmit() {
    this.display = 'block';
  }
  onClose(event) {
    this.display = event;
  }
}
