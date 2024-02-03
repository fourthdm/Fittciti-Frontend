import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public cartitems: any[] = [];
  public cartslist = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  url = "http://localhost:4040";

  getproduct() {
    return this.http.get(this.url + '/Allproducts');
  }

  getbybrandid(Brand_id: any) {
    return this.http.get(this.url + '/getProductBrand/' + Brand_id);
  }

  category() {
    return this.http.get(this.url + '/Categories');
  }

  brand() {
    return this.http.get(this.url + '/Allbrand');
  }

  bybrand(data: any) {
    return this.http.post(this.url + '/Getproductbybrandname', data);
  }

  ByCatgeoryAndBrand(data: any) {
    return this.http.post(this.url + '/getproductbycatgeoryandbrand', data);
  }

  GetProductbyBrand(data: any) {
    return this.http.post(this.url + "/getproductbybrandid", data);
  }

  GetProd() {
    return this.http.get(this.url + '/getProd');
  }

  getproductbyid(Prod_id: number) {
    return this.http.get(this.url + '/Products/' + Prod_id);
  }

  getbyCategoryandBrand(data: any) {
    return this.http.post(this.url + '/getproductbycatgeoryandbrand', data);
  }

  url2 = "http://localhost:4000";

  Categoriesss() {
    return this.http.get(this.url2 + '/Allcategory');
  }

  Brandss() {
    return this.http.get(this.url2 + '/Allbrand');
  }

  Productsss() {
    return this.http.get(this.url2 + '/products');
  }

  Getproductbycategoryandbrand(data: any) {
    return this.http.post(this.url2 + '/productBycategoryBrand', data);
  }

  ADDCARTS(data: any) {
    return this.http.post(this.url2 + '/ca', data);
  }

  carts() {
    return this.http.get(this.url2 + '/CART');
  }

  DeletecartbyProduct(product_id: any) {
    return this.http.delete(this.url2 + '/Deletebyproduct_id/' + product_id);
  }

  DeletecartbyId(cart_id: any) {
    return this.http.delete(this.url2 + '/Deletecart/' + cart_id);
  }

  

}
