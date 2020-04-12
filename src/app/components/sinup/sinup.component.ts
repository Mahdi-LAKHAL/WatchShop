import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {


  user: User;
  userform: FormGroup;
  id: number;
  constructor(

    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log("user added", this.user);
    this.user = new User(0,'','','','','','','');
      this.userform = this.formBuilder.group({
        fName: [''],
        lName: [''],
        email: [''],
        pwd: [''],
        confirmPwd: [''],
        address: [''],
        tel:['']
      });  
  }
  saveUser(user: any) {
  
  console.log("user added", this.user);
    
   
  }

 

}