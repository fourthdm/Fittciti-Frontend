import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './state.service';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class CarttssService {

  public cartitems: any[] = [];
  cart: any[] = [];

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);


  constructor(private http: HttpClient, private _state: StateService, private _rest: RestService) { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  // add to cart
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  // get totl price
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  // remove single item
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList)
  }

  // empty cart at a time
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
