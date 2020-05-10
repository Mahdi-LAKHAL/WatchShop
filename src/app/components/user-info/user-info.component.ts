import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  users: User[];
  user: User;


  tableHeaders: string[];
  id:number;
    constructor( 
      private userService: UserService,  
     private activateRoute: ActivatedRoute 
      ) { }
  
    ngOnInit() {
      this.id = +this.activateRoute.snapshot.paramMap.get('id');
      this.userService.displayUser(this.id).subscribe(
        res => {
          console.log("This is my User", res);
          this.user = res;
          
        }
      )
    }
  
  
  
  
  
  }
  
  