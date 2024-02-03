import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-in2',
  templateUrl: './in2.component.html',
  styleUrls: ['./in2.component.css']
})
export class In2Component implements OnInit {

  product: any[] = [];
  category: any[] = [];
  brands: any[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getbyid(6);
    this.Allcategory();
    this.Allbrands();
  }

  getbyid(Brand_id: any) {
    this.rest.getbybrandid(Brand_id).subscribe((data: any) => {
      console.log(data);
      this.product = data.data;
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