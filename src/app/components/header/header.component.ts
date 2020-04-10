import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

lName:string="lakhal";
fName: string="mahdi";
fullName: string;
lenghtFullName: number;
res:string;
  constructor(private router: Router) { }

ngOnInit() {
this.fullName= this.concater(this.fName, this.lName);
this.lenghtFullName= this.fullName.length;
}

concater(a:string, b:string) {
console.log("a+b", a+b);
return a+" "+b;
}

lengtFullName(a:string) {
this.res=(a.length>20) ? "red" : "blue";
return this.res;
}

}
