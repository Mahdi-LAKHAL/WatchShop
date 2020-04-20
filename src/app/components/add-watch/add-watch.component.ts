import { Component, OnInit } from '@angular/core';
import { Montre } from 'src/app/models/montre';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MontreService } from 'src/app/services/watch.service';

@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
  styleUrls: ['./add-watch.component.css']
})
export class AddWatchComponent implements OnInit {

  montre: Montre;
  montreForm: FormGroup;
  id: number;
  constructor(

    private router: Router,
    private formBuilder: FormBuilder,
    private montreService: MontreService
  ) { }

  ngOnInit() {
    console.log("montre added", this.montre);
    this.montre = new Montre(0, 0 , '', '', '','');
      this.montreForm = this.formBuilder.group({
        name: [''],
        price: [''],
        description: [''],
        marque: ['']
      });
  }
  saveMontre(montre: any) {
  
  console.log("montre added", this.montre);
  this.montreService.addMontre( this.montre ).subscribe(
  (response)=> {
    console.log("this is the reponse of post montre", response);
    const link = [`/dashboard`];
    this.router.navigate(link);
  }
  )
   
  }

 

}

