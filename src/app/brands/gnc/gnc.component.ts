import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-gnc',
  templateUrl: './gnc.component.html',
  styleUrls: ['./gnc.component.css']
})
export class GncComponent implements OnInit {

  pro: any;
  category: any[] = [];
  brands: any[] = [];
  products: any[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getid(1);
    this.Allbrands();
    this.Allcategory();
  }

  getid(Brand_id: any) {
    this.rest.getbybrandid(Brand_id).subscribe((result: any) => {
      console.log(result);
      this.products = result.data;
    }, (err: any) => {
      console.log(err);
    })
  }
  Allcategory() {
    this.rest.category().subscribe((data: any) => {
      console.log(data);
      this.category = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  Allbrands() {
    this.rest.brand().subscribe((data: any) => {
      console.log(data);
      this.brands = data.data;
    }, (err) => {
      console.log(err);
    })
  }
  
  // AllProducts() {
  //   this.rest.getproduct().subscribe((data: any) => {
  //     console.log(data);
  //     this.products = data.data;
  //   }, (err) => {
  //     console.log(err);
  //   })
  // }

  // Getgncproduct(data: any) {
  //   this.rest.GetProductbyBrand(data).subscribe((data: any) => {
  //     console.log("Data", data);
  //     this.products = data.data;
  //   }, (err: any) => {
  //     alert('Error');
  //   })
  // }

}
