import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public listitems: PriceAble[] = [];
  public burgerlist: PriceAble[]=[];
  public saladlist: PriceAble[]=[];
  public drinklist: PriceAble[]=[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<PriceAble[]>(baseUrl + 'order').subscribe(result => {
      this.listitems = result;
      console.log(this.listitems );   
      this.splitlist();
    }, error => console.error(error));
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
