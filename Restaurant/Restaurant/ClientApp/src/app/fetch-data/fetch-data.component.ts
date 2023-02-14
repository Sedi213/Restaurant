import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
   listitems: PriceAble[] = [];
   burgerlist: PriceAble[]=[];
   saladlist: PriceAble[]=[];
   drinklist: PriceAble[]=[];
  orderlist: PriceAble[]=[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<PriceAble[]>(baseUrl + 'order').subscribe(result => {
      this.listitems = result;
      console.log(this.listitems );   
      this.splitlist();
    }, error => console.error(error));
  }

 NewMember(item:PriceAble){
  this.orderlist.push(item);
}
DeleteMember(item:PriceAble){
 this.orderlist.splice( this.orderlist.indexOf(item),1);
}
  private splitlist():void{
    this.listitems.forEach(item=>{
        switch(item.category){
          case 0:
            this.burgerlist.push(item);
            break;
          case 1:
            this.saladlist.push(item)
            break;
          case 2:
              this.drinklist.push(item)
            break;      
        }
    
      });
  }
}

interface PriceAble {
  price: number;
  category: number;
  name: string;
  description: string;
}
