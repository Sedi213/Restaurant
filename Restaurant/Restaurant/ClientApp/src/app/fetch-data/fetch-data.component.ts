import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { smoothHeight } from '../animationDirective/animation';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
  animations: [smoothHeight],
})
export class FetchDataComponent {
  listitems: PriceAble[] = [];
  burgerlist: PriceAble[] = [];
  saladlist: PriceAble[] = [];
  drinklist: PriceAble[] = [];
  orderlist: Order[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<PriceAble[]>(baseUrl + 'order').subscribe(
      (result) => {
        this.listitems = result;
        console.log(this.listitems);
        this.splitlist();
      },
      (error) => console.error(error)
    );
  }

  NewMember(item: PriceAble) {
    let temp = new Order(item, 1);
    for (let index = 0; index < this.orderlist.length; index++) {
      if (this.orderlist[index].item.name === temp.item.name) {
        this.orderlist[index].count++;
        return;
      }
    }
    this.orderlist.push(temp);
  }
  onChangeMember(item: Order) {
    for (let index = 0; index < this.orderlist.length; index++) {
      if (this.orderlist[index].item.name === item.item.name) {
        this.orderlist[index] = item;
      }
    }
  }
  DeleteMember(item: Order) {
    this.orderlist = this.orderlist.filter(
      (x) => x.item.name != item.item.name
    );
  }
  private splitlist(): void {
    this.listitems.forEach((item) => {
      switch (item.category) {
        case 0:
          this.burgerlist.push(item);
          break;
        case 1:
          this.saladlist.push(item);
          break;
        case 2:
          this.drinklist.push(item);
          break;
      }
    });
  }
}

export class PriceAble {
  price: number = 0;
  category: number = -1;
  name: string = '';
  description: string = '';
}
export class Order {
  item: PriceAble = new PriceAble();
  count: number = 1;
  constructor(_item: PriceAble, _count: number) {
    this.item = _item;
    this.count = _count;
  }
}
