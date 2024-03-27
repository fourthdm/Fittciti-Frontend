import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  searchResults: any[] = [];

  pro: any;
  showproduct: any[] = [];

  public grandTotal !: number;

  public totalitems: number = 0;

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  constructor(private rest: RestService, private cart: CartService, private _router: Router, private _state: StateService) {

  }
  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.totalitems = res.length;
    })
  }

  closeNavbar() {
    // Close the navbar by toggling the collapse class
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.click();
    }
  }

  disble() {
    this._state.checktoken();
  }

  Addcarts(data: any) {
    this.cart.addtoCart(data);
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    // this._toastr.success('logged out successfully', 'thanks for visit!');
  }

  // A(){
  //   this.rest.addtoCart().subscribe((data:any)=>{
  //     console.log(data);
  //     this.showproduct= data.data;
  //     this.showproduct = data
  //   },(err:any)=>{
  //     console.log(err)
  //   })
  // }


  performSearch(searchTerm: string) {
    // Implement your search logic here
    console.log('Performing search for:', searchTerm);
    this.searchResults = (searchTerm as any).data;
  }

}