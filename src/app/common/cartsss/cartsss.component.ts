import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';

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
    this.rest.ADDCARTS(data).subscribe((data: any) => {
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
      grandTotal += carts.price;
    })
    return grandTotal;
  }


  getcarts() {
    this.rest.carts().subscribe((data: any) => {
      console.log(data);
      this.carts = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Deletecartss(cart_id: any) {
    if (confirm('Are you want to delete the cart')) {
      this.rest.DeletecartbyId(cart_id).subscribe((data: any) => {
        console.log(data);
        this.getcarts();
      }, (err: any) => {
        console.log(err);
      })
    }
  }

  removeItem(product_id: any) {
    this.rest.DeletecartbyProduct(product_id).subscribe((data: any) => {
      console.log(data);
      this.getcarts();
    }, (err: any) => {
      console.log(err);
    })
  }

  
  emptycart() { }

}
