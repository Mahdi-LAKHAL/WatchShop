import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MustMatch} from 'src/app/validators/mustMuch';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent {

  userForm: FormGroup;
  user: User;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router) {
    this.user = new User(1, '', '', '', '', '', '', '');
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(2)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     
      password: ['',[Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]
    ],
      confirmPassword: ['', Validators.required] }
      , 
      {
        validator: MustMatch('password', 'confirmPassword')
      }
      );
    };
  


  submitForm(test: any) {
    console.log("Object : ", this.userForm.value);
    //  this.userService.addUser(this.userForm.value).subscribe(
    //    result => {
    //     console.log("Added");
    //     this.router.navigate(['/']);
    //    }
    //  )   
  }
}         