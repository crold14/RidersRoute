import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(

    private usersService: UsersService,
    private router: Router,


  ) {

    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {



  }

  async onSubmit() {
    console.log('hola');

    const response = await this.usersService.loginUser(this.formulario.value)

    console.log(response);

    if (response.error) {
      alert('Login incorrecto')
      this.router.navigate(['/login'])
    } else {
      alert('Login correcto')

      //llamar metodo servicio
      this.usersService.login()

      localStorage.setItem('token', response.token)
      this.router.navigate(['/rutas'])


    }




  }

}
