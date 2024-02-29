import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pq: number = 1

  products: any[] = [];
  wishlist: any[] = [];
  @Input() liked: boolean = false;
  @Input() Product_id: any;

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  handlequantity(val: string) {
    if (this.pq < 100 && val === 'plus') {
      this.pq += 1;
    }
    else if (this.pq > 1 && val === 'min') {
      this.pq -= 1;
    }
  }

  constructor(private rest: RestService, private state: StateService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this.rest.Product().subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  // togglelike(Product_id: number) {
  //   this.products[Product_id].liked == !this.products[Product_id].liked;
  //   this.rest.Addwishlists(Product_id).subscribe((data: any) => {
  //     console.log(data);
  //     this.wishlist = data.data;
  //   })
  // }

  toggleliked(i: number) {
    this.rest.togglelike(this.products[i]);
  }

}
