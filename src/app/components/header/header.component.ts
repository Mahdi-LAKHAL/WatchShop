import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserAuthenticated = false;
  authListenerSubscribtion: Subscription;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isUserAuthenticated = this.userService.isUserAuth();
    this.authListenerSubscribtion = this.userService.getAuthStatusListener().subscribe(
      isAuthentificated => {
        this.isUserAuthenticated = isAuthentificated;
      }
    )
  }

  logoutFromComponent() {
    console.log('logout from component');
    this.userService.logout()
  }
}
