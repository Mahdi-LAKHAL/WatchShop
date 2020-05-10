import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MontreService } from 'src/app/services/watch.service';
import { User } from 'src/app/models/User';
import { Montre } from 'src/app/models/montre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {
users: User[];
montres: Montre[];
montre: Montre;
user: User;
tableHeaders : string[];
tableHeadersMontre: string[];
id:number;
  constructor( private userService: UserService, private montreService: MontreService,  private router: Router ) { }

  ngOnInit(){ 
    this.tableHeaders= ["ID", "First Name" , "Last Name", "Email"];
    this.tableHeadersMontre= ["ID", "Price" , "Marque", "Name", "Description"];
    
    this.userService.getUsers().subscribe (
    (data)=> { this.users = data;
      console.log('users', this.users);
    })


    this.getWathTable();
    this.getUserTable();
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











displayUser(id:number) {
  this.router.navigate([`user/${id}`]);
  
  }
  deleteUser(x:User) {
  this.userService.deleteUser(x).subscribe(
  response=> {
  
  this.getUserTable();
  }
  )
  
  }
  getUserTable(){
    this.userService.getUsers().subscribe (
      (res)=> { this.users = res;
   
      }
      )
  
  }
  
  updateUser(u:User){
  this.router.navigate([`updatinguser/${u.id}`]);
  
  }




}

