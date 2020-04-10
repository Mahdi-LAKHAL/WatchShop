import { Component, OnInit } from '@angular/core';
import { Montre } from '../../Models/Montre';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  montres: Montre[];

  constructor() { }

  ngOnInit(): void {
    this.montres = [
      { id: 1, price: 200, marque: 'swatch', image:'test', discription: 'Persistent', disponibility:true },
      { id: 2, price: 200, marque: 'festina', image:'test', discription: 'Persistent', disponibility:true},
      { id: 3, price: 200, marque: 'fossile', image:'test', discription: 'Persistent', disponibility:true},
      { id: 4, price: 200, marque: 'citizen', image:'test', discription: 'Persistent', disponibility:true}
    ]
  }

}
