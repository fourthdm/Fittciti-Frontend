import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  u: any;
  pro: any
  Users: any[] = [];
  Wish: any[] = [];

  constructor(private _rest: RestService, private _state: StateService, private _router: Router) { }

  ngOnInit(): void {
    this.getusers();
    this.checktoken()
    // this.User();
  }

  checktoken() {
    const token = localStorage.getItem('token');
    if (token) {
      this._state.token = token;
      this._state.decodeToken();
      this._rest.Users().subscribe((result: any) => {
        console.log(result);
        this._state.users = (result as any)['data'];
        this.Users = this._state.users;
      }, (err: any) => {
        console.log(err);
      })
    }
  }

  getusers() {
    this._rest.Users().subscribe((data: any) => {
      console.log(data);
      this._state.users = (data as any)['data'];
      this.Users = this._state.users;
    }, err => {
      console.log(err);
    })
  }


  // User() {
  //   this.rest.Users().subscribe((result: any) => {
  //     console.log(result);
  //     this._state.report = (result as any).data;
  //     this.Users = result.data;
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  Wishlist() {
    this._rest.Wishlists().subscribe((result: any) => {
      console.log(result);
      this.Wish = result.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}
