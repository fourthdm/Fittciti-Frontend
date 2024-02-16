import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';

declare var Razorpay: any;

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  pq: number = 1;
  Product_id: number = 1;
  pro: any;
  showproduct: any[] = [];
  public grandTotal !: number;

  constructor(private rest: RestService, private cart: CartService) { }

  ngOnInit(): void {
    // this.cart.getProducts().subscribe((resp: any) => {
    //   this.showproduct = resp;
    //   this.grandTotal = this.cart.getTotalPrice();
    // })
  }

  handlequantity(val: string) {
    if (this.Product_id < 100 && val === 'plus') {
      this.Product_id += 1;
      this.grandTotal
    }
    else if (this.Product_id > 1 && val === 'min') {
      this.Product_id
        -= 1;
    }
  }

  // Users() {
  //   this.rest.Adduser()

  // }

  removeItem(item: any) {
    this.cart.removeCartItem(item)
  }

  emptycart() {
    this.cart.removeAllCart();
  }

  paynow() {
    const razorpayoption = {
      description: 'sample razorpay demo',
      currency: 'INR',
      amount: 200000,
      // amount: this.grandTotal * 100,
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

}