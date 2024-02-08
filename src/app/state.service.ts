import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  token = '';
  
  report: any = undefined;

  user: any = undefined;

  constructor(private _router: Router) { }

  decodeToken() {
    // this.report = jwt_decode(this.token);
    console.log(this.report);
  }

  checktoken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.decodeToken();
    } else {
      this._router.navigate(['/login']);
    }
  }

}