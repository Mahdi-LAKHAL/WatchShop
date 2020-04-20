import { Component, OnInit, Input } from '@angular/core';
import { Montre } from 'src/app/models/montre';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css']
})
export class ProductUnitComponent implements OnInit {


  // @Input() description: string;
  // @Input() price: string;
  @Input() montre: Montre;
  
  constructor() { }

  ngOnInit() {   
  }

}
