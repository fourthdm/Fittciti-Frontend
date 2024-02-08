import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';
import { CartsComponent } from '../carts/carts.component';
import { Router } from '@angular/router';

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
  @Input() category_id: any;
  @Input() brand_id: any;
  @Input() liked: boolean = false;

  // carttsss:[{
  //   productname: any,
  //   product_id: any
  //   price: any
  //   quantity: any
  //   Total: any
  // }]
  constructor(private rest: RestService, private cart: CartService, private _router: Router) { }

  ngOnInit(): void {
    this.Allproduct();
    this.Allcategory();
    this.Allbrand();
    this.getcarts()
  }

  Allproduct() {
    this.rest.Productsss().subscribe((data: any) => {
      console.log(data);
      this.prod = data.data
    }, (err: any) => {
      console.log(err);
    })
  }

  Allcategory() {
    this.rest.Categoriesss().subscribe((data: any) => {
      console.log(data);
      this.c = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Allbrand() {
    this.rest.Brandss().subscribe((data: any) => {
      console.log(data);
      this.b = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getallproduct() {
    this.rest.Getproductbycategoryandbrand({ category_id: this.category_id, brand_id: this.brand_id }).subscribe((data: any) => {
      console.log(data);
      this.prod = data.data;
    }), (err: any) => {
      console.log(err);
    }
  }
  togglelike() {
    this.liked = !this.liked;
  }

  Addcarts(data: any) {
    this.Addcart(data);
    // this._router.navigate(['/Cartts']);
  }

  getcarts() {
    this.rest.carts().subscribe((data: any) => {
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