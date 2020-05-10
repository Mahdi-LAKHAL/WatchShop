import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MustMatch} from 'src/app/validators/mustMuch';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  id: number;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
 
    ) {
 
    this.createForm();
  }

  ngOnInit(): void {
    
this.id = +this.activateRoute.snapshot.paramMap.get('id');
this.userService.displayUser(this.id).subscribe (
response=> {
this.user= response;
}
)
  }

  




  createForm() {
    this.userForm = this.fb.group({
      fName: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(2)]],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
      }
      );
    };

    updateUser(u:any){
      this.userService.updateUser(this.user).subscribe (
      response=> {
      this.router.navigate(["/dashboard"]);
      }
      )
      
        };
}
