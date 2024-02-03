import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
  constructor(private rest: RestService, private cart: CartService) {

  }
  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
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


  Addcarts(data: any) {
    this.cart.addtoCart(data);
  }

}