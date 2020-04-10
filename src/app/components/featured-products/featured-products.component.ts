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
      { id: 1, price: 200, name: 'mahdi' , marque: 'swatch', image:'test', description: 'Persistent' },
      { id: 2, price: 200, name: 'mahdi' , marque: 'festina', image:'test', description: 'Persistent'},
      { id: 3, price: 200, name: 'mahdi' , marque: 'fossile', image:'test', description: 'Persistent'},
      { id: 4, price: 200, name: 'mahdi' , marque: 'citizen', image:'test', description: 'Persistent'},

     ]}}