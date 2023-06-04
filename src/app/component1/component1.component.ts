import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  Component1Data: any = '';  
  
  constructor(private _cart: CartService) {  
    this._cart.SharingData.subscribe((res: any) => {  
      this.Component1Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this._cart.SharingData.next(data.value);  
  }  
}
