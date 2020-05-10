import { Component, OnInit } from '@angular/core';
import { MontreService } from 'src/app/services/watch.service';
import { Montre } from 'src/app/models/montre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-dashboard',
  templateUrl: './watch-dashboard.component.html',
  styleUrls: ['./watch-dashboard.component.css']
})
export class WatchDashboardComponent implements OnInit  {
montres: Montre[];
montre: Montre;

tableHeadersMontre: string[];
id:number;
  constructor( private montreService: MontreService,  private router: Router ) { }

  ngOnInit(){ 

    this.tableHeadersMontre= ["ID", "Price" , "Marque", "Name", "Description"];
    this.getWathTable();
  }

displayWatch(id:number) {
this.router.navigate([`watch/${id}`]);

}
deleteWatch(x:Montre) {
this.montreService.deleteMontre(x).subscribe(
response=> {

this.getWathTable();
}
)

}
getWathTable(){
  this.montreService.getMontres().subscribe (
    (data)=> { this.montres = data;
 
    }
    )

}

updateWatch(w:Montre){
this.router.navigate([`updating/${w.id}`]);

}






}

