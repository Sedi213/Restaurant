import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Order, PriceAble } from '../fetch-data/fetch-data.component';
@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css'],
})
export class CartOrderComponent implements OnInit {
  @Input()
  Item: Order = new Order(new PriceAble,0);
  @Output() onChangeMember = new EventEmitter<Order>();
  Increase() {
    this.Item.count++;
    this.onChangeMember.emit(this.Item);
  }

  Decrease() {
    this.Item.count--;
    if(this.Item.count===0){
      this.DeleteMember()
      return;
    }
    this.onChangeMember.emit(this.Item);
  }
  @Output() onDeleteMember = new EventEmitter<Order>();
  DeleteMember() {
    this.onDeleteMember.emit(this.Item);
  }
  constructor() {}

  ngOnInit(): void {}
}
