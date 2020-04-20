import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { AddWatchComponent } from './components/add-watch/add-watch.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SinupComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "contact", component: ContactComponent},
  {path: "shop", component: ShopComponent},
  {path: "addwatch", component: AddWatchComponent},
  {path: "watch", component: FeaturedProductsComponent},
  {path: "dashboard", component: DashbordAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
