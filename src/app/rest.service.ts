import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public cartitems: any[] = [];
  public cartslist = new BehaviorSubject<any>([])

  constructor(private http: HttpClient, private _state: StateService) { }

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

  // Categoriesss() {
  //   return this.http.get(this.url2 + '/Allcategory');
  // }

  // Brandss() {
  //   return this.http.get(this.url2 + '/Allbrand');
  // }

  Productsss() {
    return this.http.get(this.url2 + '/products');
  }

  Getproductcategoryandbrand(data: any) {
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

  url3 = 'http://localhost:5000';

  Login(data: any) {
    return this.http.post(this.url3 + '/login', data);
  }

  Registeration(data: any) {
    return this.http.post(this.url3 + '/Registeration', data);
  }

  Product() {
    return this.http.get(this.url3 + '/Product');
  }

  addtoCart(data: any) {
    this._state.checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this.http.post(this.url3 + '/AddCart', { headers }, data);
  }

  cart() {
    this._state.checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this.http.get(this.url3 + "/Carts", { headers });
  }

  DeleteCart(data: any) {
    this._state.checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this.http.delete(this.url3 + "/Emptycart/" + data.Cart_id, { headers })
  }

  DeletebyProduct(data: any) {
    this._state.checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this.http.delete(this.url3 + "/DeletebyProduct/" + data.Product_id, { headers });
  }

  enquiry(data: any) {
    return this.http.post(this.url3 + '/Contact', data);
  }

  Users() {
    // this._state.checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this.http.get(this.url3 + '/Information', { headers });
  }

  Wishlists() {
    this._state.checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this.http.get(this.url3 + "/Wishlist", { headers });
  }

  Category() {
    return this.http.get(this.url3 + '/Allcategory');
  }

  Brand() {
    return this.http.get(this.url3 + '/Allbrand');
  }

  Getimages() {
    return this.http.get(this.url + '/Showimages');
  }

  Getproductbycategoryandbrand(data: any) {
    return this.http.post(this.url3 + '/Productbycategoryandbrand', data);
  }

  GetproductbyBrandid(Brand_id: any) {
    return this.http.get(this.url + '/Productbybrand/' + Brand_id);
  }

}