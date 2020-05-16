import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/watch.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-info',
  templateUrl: './watch-info.component.html',
  styleUrls: ['./watch-info.component.css']
})
export class WatchInfoComponent implements OnInit {

montre : Montre;
id: string;

constructor(
private montreService: MontreService,
private activateRoute: ActivatedRoute
) { }

  ngOnInit() {

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log("ID from ActivatedRoute", this.id);
    this.montreService.displayMontre(this.id).subscribe(
      res => {
        console.log("This is my Watch", res);
        this.montre = res[0];
        
      }
    )
  }

  }