import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { MontreService } from 'src/app/services/watch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-watch',
  templateUrl: './update-watch.component.html',
  styleUrls: ['./update-watch.component.css']
})
export class UpdateWatchComponent implements OnInit {
montre:Montre;
id: number;
  constructor(
  private montreService:MontreService,
  private activateRoute: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit(): void {
this.id = +this.activateRoute.snapshot.paramMap.get('id');
this.montreService.displayMontre(this.id).subscribe (
response=> {
this.montre= response;
}
)
  }


updateWatch(m:any){
this.montreService.updateMontre(this.montre).subscribe (
response=> {
this.router.navigate(["/dashboard"]);
}
)

  }
}
