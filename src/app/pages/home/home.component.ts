import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pq: number = 1

  products: any[] = [];

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

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this.rest.Productsss().subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}
