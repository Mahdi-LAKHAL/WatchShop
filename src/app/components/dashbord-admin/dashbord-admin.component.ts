import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {
users: User[];

tableHeaders : string[];
  constructor( private userService: UserService ) { }

  ngOnInit(){ 
    this.tableHeaders= ["ID", "First Name" , "Last Name", "Email"];
    
    this.userService.getUsers().subscribe (
    (data)=> { this.users = data;
      console.log('users', this.users);
      
    })
  }

}
