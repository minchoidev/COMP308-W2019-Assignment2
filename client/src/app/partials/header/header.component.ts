// MEAN Portfolio
// File Name: header.component.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
    // pull the user info from the localStorage
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onLogoutClick(): void {
    // try logging out
    this.authService.logout().subscribe(data => {
      this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 5000 });
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    const result = this.authService.loggedIn();
    if (result) {
      // shows logged in user's name after login
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return result;
  }

}
