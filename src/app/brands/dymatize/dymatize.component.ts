import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-dymatize',
  templateUrl: './dymatize.component.html',
  styleUrls: ['./dymatize.component.css']
})
export class DymatizeComponent implements OnInit {

  category: any[] = [];
  brands: any[] = [];
  product: any[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getbyid(7);
    this.Allbrands();
    this.Allcategory();
  }

  getbyid(Brand_id: any) {
    this.rest.getbybrandid(Brand_id).subscribe((data: any) => {
      console.log(data);
      this.product = data.data;
    }, (err: any) => {
      console.log(err)
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
}
