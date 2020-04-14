import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent {

  userForm: FormGroup;
  user: User;
  constructor(
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
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


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