import { Component, OnInit } from '@angular/core';
import { Montre } from '../../Models/Montre';
import { MontreService } from 'src/app/services/watch.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  montres: Montre[];
  data:any;
  constructor(private montreService: MontreService) { }

  ngOnInit() {

    this.montreService.getMontres().subscribe(
      (data) => { console.log(data);
      
        this.data = data;
      }
    );
  }

}
