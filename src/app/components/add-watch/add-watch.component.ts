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
  price: number;
  imagePreview: string;
  constructor(

    private router: Router,
    private formBuilder: FormBuilder,
    private montreService: MontreService
  ) { }

  ngOnInit() {
    console.log("montre added", this.montre);
    this.montre = new Montre('', this.price , '', '', '','');
      this.montreForm = this.formBuilder.group({
        name: [''],
        price: [''],
        description: [''],
        marque: [''],
        image: ['']
      });
  }
  saveMontre(montre: any) {
  console.log('image', this.montreForm.value.image);
  
  console.log("montre added", this.montre);
  this.montreService.addMontre( this.montre, this.montreForm.value.image ).subscribe(
  (response)=> {
    console.log("this is the reponse of post montre", response);
    const link = [`/watshDashboard`];
    this.router.navigate(link);
  }
  )
   
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.montreForm.patchValue({image: file});
    this.montreForm.updateValueAndValidity();
    console.log("This is my file", file);
    console.log("This is my form", this.montreForm);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview =  reader.result as string
    };
    reader.readAsDataURL(file);
    
  }


}

