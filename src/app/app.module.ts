import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { Nav2Component } from './common/nav2/nav2.component';
import { TermComponent } from './footers/term/term.component';
import { DeliveryComponent } from './footers/delivery/delivery.component';
import { RefundComponent } from './footers/refund/refund.component';
import { PrivacyComponent } from './footers/privacy/privacy.component';

import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietComponent } from './goods/diet/diet.component';
import { SupplementComponent } from './goods/supplement/supplement.component';
import { HealthComponent } from './goods/health/health.component';
import { LoginComponent } from './common/login/login.component';
import { GncComponent } from './brands/gnc/gnc.component';
import { MbComponent } from './brands/mb/mb.component';
import { In2Component } from './brands/in2/in2.component';
import { HealthfarmComponent } from './brands/healthfarm/healthfarm.component';
import { MuscletechComponent } from './brands/muscletech/muscletech.component';
import { Healthinnova8Component } from './brands/healthinnova8/healthinnova8.component';
import { BsnComponent } from './brands/bsn/bsn.component';
import { IsopureComponent } from './brands/isopure/isopure.component';
import { OnComponent } from './brands/on/on.component';
import { RcComponent } from './brands/rc/rc.component';
import { MyproteinComponent } from './brands/myprotein/myprotein.component';
import { DymatizeComponent } from './brands/dymatize/dymatize.component';
import { InsanelabzComponent } from './brands/insanelabz/insanelabz.component';
import { GatComponent } from './brands/gat/gat.component';
import { Navbar2Component } from './common/navbar2/navbar2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { BuildsComponent } from './brands/builds/builds.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { CartsComponent } from './pages/carts/carts.component';
import { CartsssComponent } from './common/cartsss/cartsss.component';
import { RegisterComponent } from './common/register/register.component';
import { OrderComponent } from './common/order/order.component';
import { UserdetailsComponent } from './common/userdetails/userdetails.component';
import { CartComponent } from './common/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    TestimonialsComponent,
    Nav2Component,
    TermComponent,
    DeliveryComponent,
    RefundComponent,
    PrivacyComponent,
    DietComponent,
    SupplementComponent,
    HealthComponent,
    LoginComponent,
    GncComponent,
    MbComponent,
    In2Component,
    HealthfarmComponent,
    MuscletechComponent,
    Healthinnova8Component,
    BsnComponent,
    IsopureComponent,
    OnComponent,
    RcComponent,
    MyproteinComponent,
    DymatizeComponent,
    InsanelabzComponent,
    GatComponent,
    Navbar2Component,
    ViewproductComponent,
    BuildsComponent,
    CartsComponent,
    CartsssComponent,
    RegisterComponent,
    OrderComponent,
    UserdetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
