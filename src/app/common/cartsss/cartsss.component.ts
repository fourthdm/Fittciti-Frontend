import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';

declare var Razorpay: any;

@Component({
  selector: 'app-cartsss',
  templateUrl: './cartsss.component.html',
  styleUrls: ['./cartsss.component.css']
})
export class CartsssComponent implements OnInit {

  carts: any[] = [];
  pro: any;

  count: number = 1;
  temp: number = 0;
  total: number = 0;

  public grandTotal !: number;


  constructor(private rest: RestService, private cart: CartService, private route: Router) { }

  ngOnInit(): void {
    this.getcarts();
  }

  OnIncrement() {
    this.count = this.count + 1
    this.total = this.temp * this.count
  }

  OnDecrement() {
    if (this.count == 1) {
      alert('Can not decrement')
    }
    else {
      this.count = this.count - 1
      this.total = this.temp * this.count
    }
  }

  calculate = (showproduct: any) => {
    let Total_amount = 0;
    for (const p of showproduct) {
      Total_amount += p.Price * p.Quantity;
    }
    return Total_amount;
  };

  // onAddToCart() {
  //   if (localStorage['login_status'] == '0') {
  //     alert('You need to login first')
  //   }
  //   else {
  //     if (confirm('Do You want to add itmes')) {
  //       this.rest.ADDCARTS(['product_id'])
  //         .subscribe((data: any) => {
  //           if (data['status'] == 'success') {
  //             this.total = (data.price * data.quantity) - this.total

  //             this.carts = data.data;
  //             alert('items added in your cart')
  //           }
  //         })

  //     }

  //   }
  // }

  Addcarts(data: any) {
    this.rest.addtoCart(data).subscribe((data: any) => {
      console.log(data);
      this.carts.push();
      this.getTotalPrice()
    }, (err: any) => {
      console.log(err)
    })
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.Addcarts((carts: any) => {
      grandTotal = carts.Total + carts.Total;
    })
    return grandTotal;
  }

  g(){}


  getcarts() {
    this.rest.cart().subscribe((data: any) => {
      console.log(data);
      this.carts = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Deletecartss(Cart_id: any) {
    if (confirm('Are you want to delete the cart')) {
      this.rest.DeleteCart(Cart_id).subscribe((data: any) => {
        console.log(data);
        this.getcarts();
      }, (err: any) => {
        console.log(err);
      })
    }
  }

  removeItem(Product_id: any) {
    this.rest.DeletebyProduct(Product_id).subscribe((data: any) => {
      console.log(data);
      this.getcarts();
    }, (err: any) => {
      console.log(err);

    })
  }
  paynow() {
    const razorpayoption = {
      description: 'sample razorpay demo',
      currency: 'INR',
      // amount: 200000,
      amount: this.grandTotal * 100,
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

  emptycart() { }

}
