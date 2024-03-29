import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  pq: number = 1

  products: any[] = [];
  prod: any;

  Prod_id = 0;
  images: any[] = [];
  productList: any[] = [];


  id = 0;
  // myindex = -1;

  constructor(private rest: RestService, private _route: ActivatedRoute) { }

  handlequantity(val: string) {
    if (this.pq < 100 && val === 'plus') {
      this.pq += 1;
    }
    else if (this.pq > 1 && val === 'min') {
      this.pq -= 1;
    }
  }

  ngOnInit(): void {
    // this.id = this._route.snapshot.params['id'];
    // this.rest.Productsviews(this.id).subscribe((data: any) => {
    //   console.log(data['data'][0]);
    //   this.products = data['data'][0];
    // }, err => {
    //   console.log(err);
    // })

    this.getproduct();
    // this.AllProducts();
    // this.fetchimage();
    // this.view();
    this.show();

  }

  getproduct() {
    const id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    id && this.rest.productwithmain(id).subscribe((data: any) => {
      this.productList = data.data;
    }, (err: any) => {
      console.log(err);
    })

    this.productList.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.pricewithdiscount });
    });
  }

  AllProducts() {
    // this.Prod_id = this._route.snapshot.params[this.Prod_id];
    // this.rest.getproductbyid(this.Prod_id).subscribe((data: any) => {
    //   console.log(data);
    //   this.products = data['data'][0];
    // })

    this.rest.Product().subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  // views() {
  //   this.rest.imagearray(1).subscribe(data => {
  //     console.log(data);
  //     this.images = (data as any)['data'];
  //   }, err => {
  //     console.log(err);
  //   })




  // fetchimage(product_id: number) {
  //   this.rest.imagearray(product_id).subscribe((data: any) => {
  //     console.log(data);
  //     this.images = (data as any)['data'];
  //   }, (err: any) => {
  //     console.log(err)
  //   });
  // }



  view() {
    this.rest.Productsviews(this.id).subscribe(data => {
      console.log(data);
      this.products = (data as any)['data'];
    }, (err: any) => {
      console.log(err);
    })
  }

  show() {
    this.rest.Getimages().subscribe((data: any) => {
      console.log(data);
      // this.Imagess = data.data;
      this.images = (data as any)['data'];
    }, (err: any) => console.log(err));
  }

  addToCart() { }

}

