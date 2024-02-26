import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';
import { CartsComponent } from '../carts/carts.component';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  index = -1;
  carts: [] = [];
  pro: any;
  prod: any[] = [];
  c: any[] = [];
  b: any[] = [];
  @Input() Category_id: any;
  @Input() Brand_id: any;
  @Input() liked: boolean = false;

  // carttsss:[{
  //   productname: any,
  //   product_id: any
  //   price: any
  //   quantity: any
  //   Total: any
  // }]
  constructor(private rest: RestService, private cart: CartService, private _router: Router, private state: StateService) { }

  ngOnInit(): void {
    this.Allproduct();
    this.Allcategory();
    this.Allbrand();
    this.getcarts()
  }

  Allproduct() {
    this.rest.Product().subscribe((data: any) => {
      console.log(data);
      if (data.length == 0) {
        console.log(data)
        alert('Data not found');
      }
      this.prod = data.data;

    }, (err: any) => {
      console.log(err);
    })
  }

  Allcategory() {
    this.rest.Category().subscribe((data: any) => {
      console.log(data);
      this.c = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Allbrand() {
    this.rest.Brand().subscribe((data: any) => {
      console.log(data);
      this.b = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getallproduct() {
    this.rest.Getproductbycategoryandbrand({ Category_id: this.Category_id, Brand_id: this.Brand_id }).subscribe((data: any) => {
      console.log(data);
      this.prod = data.data;
    }), (err: any) => {
      console.log(err);
    }
  }
  togglelike() {
    this.liked = !this.liked;
  }

  checktoken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.state.token = token;
      this.state.decodeToken();
      this._router.navigate(['/Cartts']);
    }
    else {
      // this._router.navigate(['/login']);
    }
  }


  // Addcart(data: any) {    
  //   this.rest.addtoCart(data).subscribe((data: any) => {
  //     console.log(data);
  //     this.carts.push();
  //     this.cart.getTotalPrice();
  //     // this._router.navigate(['/Cartts']);
  //   });
  // }

  // Addcart(data:any){
  //   this.rest.ADDCARTS(data).subscribe((data: any) => {
  //   console.log(data);
  //   localStorage.setItem('token', data.data);
  //   this.state.token = (data.data);
  //   this.state.decodeToken();
  //   this._router.navigate(['/Cartts']);
  // }, err => {
  //   console.log(err);
  // })
  // }

  getcarts() {
    this.rest.cart().subscribe((data: any) => {
      console.log(data);
      this.carts = data.data;
    }, (err: any) => {
      console.log(err)
    })
  }

  Addcart(data: any) {
    this.rest.ADDCARTS(data).subscribe((data: any) => {
      console.log(data);
      this.carts.push();
      this.cart.getTotalPrice();
    });
  }


}