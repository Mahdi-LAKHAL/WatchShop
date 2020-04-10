import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SinupComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "contact", component: ContactComponent},
  {path: "shop", component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
