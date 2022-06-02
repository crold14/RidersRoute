import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userData: any

  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  async ngOnInit() {
    const response = await this.userService.getData()
    this.userData = response;
    console.log(response);

  }

}
