import { Component, OnInit } from '@angular/core';
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
    this.AllProducts();
    // this.view();
  }

  AllProducts() {
    // this.Prod_id = this._route.snapshot.params[this.Prod_id];
    // this.rest.getproductbyid(this.Prod_id).subscribe((data: any) => {
    //   console.log(data);
    //   this.products = data['data'][0];
    // })

    this.rest.Productsss().subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  // view() {
  //   this.rest.getproductbyid(this.Prod_id).subscribe(data => {
  //     console.log(data);
  //     this.products = (data as any)['data'];
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }
}
