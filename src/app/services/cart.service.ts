import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  SharingData = new Subject();
  constructor() { 
  }
  setValue(value:any){
    this.SharingData.next(value);

  }
}
