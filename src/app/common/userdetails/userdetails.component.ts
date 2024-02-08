import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  pro: any
  Users: any[] = [];
  Wish: any[] = [];

  constructor(private rest: RestService, private state: StateService) { }

  ngOnInit(): void {
    this.state.checktoken();
    this.User();
  }

  User() {
    this.rest.Users().subscribe((result: any) => {
      console.log(result);
      this.state.report = (result as any).data;
      this.Users = result.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Wishlist() {
    this.rest.Wishlists().subscribe((result: any) => {
      console.log(result);
      this.Wish = result.data;
    }, (err: any) => {
      console.log(err);
    })
  }
  
}
