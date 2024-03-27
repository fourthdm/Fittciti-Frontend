import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './state.service';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitems: any[] = [];
  public cartslist = new BehaviorSubject<any>([])

  constructor(private http: HttpClient, private _state: StateService,private _rest:RestService) { }


  getProducts() {
    return this.cartslist.asObservable();
  }

  setProduct(product: any) {
    this.cartitems.push(...product);
    this.cartslist.next(product);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartitems.map((a: any) => {
      grandTotal += a.price;
    })
    return grandTotal;
  }

 


  addtoCart(product: any) {
    this.cartitems.push(product);
    this.cartslist.next(this.cartitems);
    this.getTotalPrice();
    console.log(this.cartitems)
  }

  add() {
  }

  // remove single item
  removeCartItem(product: any) {
    this.cartitems.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartitems.splice(index, 1);
      }
    })
    this.cartslist.next(this.cartitems)
  }

  ///when you remove the product from cart that is added from the cproduct carts in that the first added product delete first and after 
  // that all product the same same product id product deleteed at the time of remove the carts.

  //empty cart at a time
  removeAllCart() {
    this.cartitems = [];
    this.cartslist.next(this.cartitems);
  }

}
