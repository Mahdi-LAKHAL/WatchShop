import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrandsComponent } from './components/brands/brands.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FashionBannerComponent } from './components/fashion-banner/fashion-banner.component';
import { WeeklyDealComponent } from './components/weekly-deal/weekly-deal.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { BrandUnitComponent } from './components/brands/brand-unit/brand-unit.component';
import { ProductUnitComponent } from './components/featured-products/product-unit/product-unit.component';
import { ArticleComponent } from './components/latest-news/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { AddWatchComponent } from './components/add-watch/add-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BrandsComponent,
    OurServicesComponent,
    FeaturedProductsComponent,
    FashionBannerComponent,
    WeeklyDealComponent,
    LatestNewsComponent,
    BrandUnitComponent,
    ProductUnitComponent,
    ArticleComponent,
    HomeComponent,
    SigninComponent,
    SinupComponent,
    AboutusComponent,
    ContactComponent,
    ShopComponent,
    AddWatchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
