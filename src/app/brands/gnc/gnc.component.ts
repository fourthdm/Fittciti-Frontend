import { Component, Input, OnInit } from '@angular/core';
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
 
  prod: any[] = [];
  c: any[] = [];
  b: any[] = [];
  @Input() Category_id: any;
  @Input() Brand_id: any;
  @Input() liked: boolean = false;


  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getid(1);
    this.Allbrands();
    this.Allcategory();
  }

  getid(Brand_id: any) {
    this.rest.GetproductbyBrandid(Brand_id).subscribe((result: any) => {
      console.log(result);
      this.products = result.data;
    }, (err: any) => {
      console.log(err);
    })
  }
  Allcategory() {
    this.rest.Category().subscribe((data: any) => {
      console.log(data);
      this.category = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  Allbrands() {
    this.rest.Brand().subscribe((data: any) => {
      console.log(data);
      this.brands = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  
  
  filter() {
    this.rest.Getproductbycategoryandbrand({ Category_id: this.Category_id, Brand_id: this.Brand_id }).subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    }), (err: any) => {
      console.log(err);
    }
  }
  togglelike() {
    this.liked = !this.liked;
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
