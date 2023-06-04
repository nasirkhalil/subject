import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  Component2Data: any = '';  
  
  
  constructor(private _cart: CartService) {  
    this._cart.SharingData.subscribe((res: any) => {  
      this.Component2Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    this._cart.SharingData.next(data.value);  
  }  
}
