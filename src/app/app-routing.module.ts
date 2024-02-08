import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { TermComponent } from './footers/term/term.component';
import { RefundComponent } from './footers/refund/refund.component';
import { PrivacyComponent } from './footers/privacy/privacy.component';
import { DeliveryComponent } from './footers/delivery/delivery.component';
import { DietComponent } from './goods/diet/diet.component';
import { SupplementComponent } from './goods/supplement/supplement.component';
import { HealthComponent } from './goods/health/health.component';
import { GncComponent } from './brands/gnc/gnc.component';
import { BsnComponent } from './brands/bsn/bsn.component';
import { DymatizeComponent } from './brands/dymatize/dymatize.component';
import { GatComponent } from './brands/gat/gat.component';
import { HealthfarmComponent } from './brands/healthfarm/healthfarm.component';
import { Healthinnova8Component } from './brands/healthinnova8/healthinnova8.component';
import { In2Component } from './brands/in2/in2.component';
import { InsanelabzComponent } from './brands/insanelabz/insanelabz.component';
import { IsopureComponent } from './brands/isopure/isopure.component';
import { MbComponent } from './brands/mb/mb.component';
import { MuscletechComponent } from './brands/muscletech/muscletech.component';
import { MyproteinComponent } from './brands/myprotein/myprotein.component';
import { OnComponent } from './brands/on/on.component';
import { RcComponent } from './brands/rc/rc.component';
import { LoginComponent } from './common/login/login.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { BuildsComponent } from './brands/builds/builds.component';
import { CartsComponent } from './pages/carts/carts.component';
import { CartsssComponent } from './common/cartsss/cartsss.component';
import { RegisterComponent } from './common/register/register.component';
import { UserdetailsComponent } from './common/userdetails/userdetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'cart', component: CartsComponent },
  { path: 'Cartts', component: CartsssComponent },

  { path: 'term', component: TermComponent },
  { path: 'refund', component: RefundComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'viewproduct', component: ViewproductComponent },

  { path: 'gooddiet', component: DietComponent },
  { path: 'goodsupplement', component: SupplementComponent },
  { path: 'goodhealth', component: HealthComponent },

  { path: 'brands/build', component: BuildsComponent },
  { path: 'brands/dymatize', component: DymatizeComponent },
  { path: 'brands/insanelaz', component: InsanelabzComponent },
  { path: 'brands/muscletech', component: MuscletechComponent },
  { path: 'brands/muscleblaze', component: MbComponent },
  { path: 'brands/optimumnutrition', component: OnComponent },
  { path: 'brands/myprotein', component: MyproteinComponent },
  { path: 'brands/isopure', component: IsopureComponent },
  { path: 'brands/healthfarm', component: HealthfarmComponent },
  { path: 'brands/rc', component: RcComponent },
  { path: 'brands/bsn', component: BsnComponent },
  { path: 'brands/gat', component: GatComponent },
  { path: 'brands/in2', component: In2Component },

  { path: 'brands/gnc', component: GncComponent },
  { path: 'brands/healthinnova', component: Healthinnova8Component },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
