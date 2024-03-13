import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { CarttssService } from 'src/app/carttss.service';
import { RestService } from 'src/app/rest.service';

declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pro: any

  public products: any = [];
  public grandTotal !: number;

  carts: any[] = [];

  constructor(private cart: CartService, private rest: RestService, private _cart: CarttssService) { }

  ngOnInit(): void {
    this._cart.getProducts().subscribe((resp) => {
      this.products = resp;
      this.grandTotal = this._cart.getTotalPrice();
    })
  }
  removeItem(c: any) {
    this._cart.removeCartItem(c);
  }

  emptycart() {
    this._cart.removeAllCart();
  }



  paynow() {
    const razorpayoption = {
      description: 'sample razorpay demo',
      currency: 'INR',
      amounts: 200000,
      amount: this._cart.getTotalPrice(),
      name: 'Fittciti',
      key: 'rzp_live_kFr6gQiD2PCk11',
      image: 'https://t4.ftcdn.net/jpg/06/09/50/93/360_F_609509369_6xlux7VFjFMb0pORhdrJG4zdyn4s6EHO.jpg',
      prefill: {
        name: 'Fittciti',
        email: 'fittciti@gmail.com',
        phone: '020 4124 2513'
      },
      theme: {
        color: '#'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed')
        }
      }
    }
    const successCallback = (paymentid: any) => {
      console.log(paymentid)
    }
    const failurecallback = (e: any) => {
      console.log(e);
    }
    Razorpay.open(razorpayoption, successCallback, failurecallback)
  }

  placeorder() {
    
  }

}
