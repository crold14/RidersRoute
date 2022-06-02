import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_motos';

  login: boolean

  constructor(
    private usersService: UsersService,
    private router: Router,

  ) {
    this.login = false;
    if (localStorage.getItem('token')) {
      this.login = true
    }
  }

  ngOnInit(): void {
    this.usersService.getUsers$().subscribe(islogged => {
      this.login = islogged;

    })

  }

  onClick() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
    this.usersService.logOut()
  }
}

