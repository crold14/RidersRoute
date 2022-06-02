import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

  comunidad: any;
  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  async ngOnInit() {
    const response = await this.userService.getComunidad()
    this.comunidad = response;


  }

}
