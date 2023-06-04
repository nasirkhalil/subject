import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
  Component3Data: any = '';  
  
  constructor(private _cart: CartService) {  
    this._cart.SharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data:any) {  
    // this._cart.SharingData.next(data.value); 
    this._cart.setValue(data.value);
  }  
}
