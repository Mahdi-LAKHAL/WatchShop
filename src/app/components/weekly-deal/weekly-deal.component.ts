import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/watch.service';

@Component({
  selector: 'app-weekly-deal',
  templateUrl: './weekly-deal.component.html',
  styleUrls: ['./weekly-deal.component.css']
})
export class WeeklyDealComponent implements OnInit {
data:any;
  montres: any;
  constructor(private montreService: MontreService) { }

  ngOnInit() {

    this.montreService.getMontres().subscribe(
      (data) => {
        this.data = data;
      }
    );
  }

}
