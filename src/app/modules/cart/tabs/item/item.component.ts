import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() id: string;
  @Input() table: string;
  @Input() name: string;
  @Input() price: string;
  @Input() img: string;
  @Input() number: string;
  @Input() info: string;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() buttonDelete: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  list = [];
  amount: number;
  sumPrice: number;
  PriceFormat: string;
  ngOnInit() {
    this.list = this.info.split('*');
    this.amount = Number.parseInt(this.number);
    this.sumPrice = Number.parseInt(this.price)*this.amount;
    this.PriceFormat = formatNumber(this.sumPrice,"en-US");
  }
  onDown() {
    if (this.amount === 1) {
      this.amount = 99;
      this.sumPrice = Number.parseInt(this.price)*this.amount;
      this.PriceFormat = formatNumber(this.sumPrice,"en-US");
    } else {
      this.amount -- ;
      this.sumPrice = Number.parseInt(this.price)*this.amount;
      this.PriceFormat = formatNumber(this.sumPrice,"en-US");
    }
    this.buttonClicked.emit(this.id + "." + this.amount+ "."+this.table);
  }
  onUp() {
    if (this.amount === 99) {
      this.amount = 1;
      this.sumPrice = Number.parseInt(this.price)*this.amount;
      this.PriceFormat = formatNumber(this.sumPrice,"en-US");
    } else {
      this.amount ++ ;
      this.sumPrice = Number.parseInt(this.price)*this.amount;
      this.PriceFormat = formatNumber(this.sumPrice,"en-US");
    }
    this.buttonClicked.emit(this.id + "." + this.amount+ "."+this.table);
  }
  deleteItem() {
    this.buttonDelete.emit(this.id + "." + this.number+ "."+this.table);
  }
}
