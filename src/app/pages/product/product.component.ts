import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';
import { CartsComponent } from '../carts/carts.component';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/state.service';
import { HttpClient } from '@angular/common/http';
import { CartsssComponent } from 'src/app/common/cartsss/cartsss.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  carts: any[] = [];
  pro: any;
  prod: any[] = [];
  c: any[] = [];
  b: any[] = [];
  @Input() Category_id: any;
  @Input() Brand_id: any;
  @Input() liked: boolean = false;
  @Input() id = 0;

  images: [] = [];
  productList: any;
  wishlist: [] = [];
  // carttsss:[{
  //   productname: any,
  //   product_id: any
  //   price: any
  //   quantity: any
  //   Total: any
  // }]
  constructor(private rest: RestService, private cart: CartService, private _router: Router, private _route: ActivatedRoute,
    private state: StateService, private http: HttpClient, private _cart: CartsssComponent) { }

  ngOnInit(): void {


    this.rest.Product().subscribe(resp => {
      this.productList = resp;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })

    this.id = this._route.snapshot.params['id'];
    this.rest.Productsviews(this.id).subscribe((data: any) => {
      console.log(data['data'][0]);
      this.prod = data['data'][0];
    }, err => {
      console.log(err);
    })
    this.Allproduct();
    this.Allcategory();
    this.Allbrand();
    this.car()
    // this.getcarts();
    // this.image();
  }

  // image() {
  //   this.rest.images().subscribe((data: any) => {
  //     console.log(data);
  //     this.images = data.data;
  //   }, (err: any) => {
  //     console.log(err)
  //   })
  // }


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

  // togglelike() {
  //   this.rest.Addwishlist().subscribe((data: any) => {
  //     console.log(data);
  //     this.wishlist = data.data;
  //   })
  //   this.liked = !this.liked;
  // }

  togglelike(Product_id: number) {
    this.rest.Addwishlists(Product_id).subscribe((data: any) => {
      console.log(data);
      this.wishlist = data.data;
      this.liked = !this.liked; // Move the toggle inside the subscription block
    });
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

  addToWishlist(Product_id: number): void {
    this.rest.Addwishlists(Product_id).subscribe(
      (response: any) => {
        // Handle success, maybe update the UI to show the heart as red
        console.log('Product added to wishlist:', response);
        this.wishlist = response.data
      },
      (error: any) => {
        console.error('Error adding product to wishlist:', error);
      }
    );
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

  // getcarts() {
  //   this.rest.cart().subscribe((data: any) => {
  //     console.log(data);
  //     this.carts = data.data;
  //   }, (err: any) => {
  //     console.log(err)
  //   })
  // }

  // Addcart(data: any) {
  //   this.rest.addtoCart(data).subscribe((data: any) => {
  //     console.log(data);
  //     this.carts.push();
  //     this.cart.getTotalPrice();
  //   });
  // }

  addToCart(product: any) {
    this._cart.Addcarts(product);
  }


  Addcart(data: any) {
    this.rest.addtoCart(data).subscribe((response: any) => {
      console.log(response); // Log the response from adding to cart
      this.carts.push(data); // Push the added data to the carts array
      if (this.cart) {
        this.cart.getTotalPrice(); // Call getTotalPrice() method if this.cart is defined
      } else {
        console.error('Cart is not defined.'); // Log an error if cart is not defined
      }
    });
  }

  car() {
    this.rest.cart().subscribe((data: any) => {
      console.log(data);
      this.carts = data.data;
    }, (err: any) => {
      console.log(err)
    })
  }

  views() {
    this.rest.Productsviews(this.id).subscribe(data => {
      console.log(data);
      this.prod = (data as any)['data'];
    }, err => {
      console.log(err);
    })
  }

}