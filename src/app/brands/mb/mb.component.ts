import { Component, OnInit,Input } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-mb',
  templateUrl: './mb.component.html',
  styleUrls: ['./mb.component.css']
})
export class MbComponent implements OnInit {
  product: any[] = [];
  category: any[] = [];
  brands: any[] = [];

  @Input() Category_id: any;
  @Input() Brand_id: any;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getbyid(3);
    this.Allbrands();
   this.getallproduct();
    this.Allcategory();
  }

  getbyid(Brand_id: any) {
    this.rest.GetproductbyBrandid(Brand_id).subscribe((data: any) => {
      console.log(data);
      this.product = data.data;
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

  getallproduct() {
    this.rest.Getproductbycategoryandbrand({ Category_id: this.Category_id, Brand_id: this.Brand_id }).subscribe((data: any) => {
      console.log(data);
      this.product = data.data;
    }), (err: any) => {
      console.log(err);
    }
  }

}
