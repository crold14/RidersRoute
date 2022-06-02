import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  formulario: FormGroup;
  userData: any

  constructor(
    private userService: UsersService,
    private router: Router,

  ) {
    this.formulario = new FormGroup({
      password: new FormControl('', [

      ])
    })
  }

  async ngOnInit() {
    const response = await this.userService.getData()
    this.userData = response;

  }
  async onSubmit() {
    const response = await this.userService.changePassword(this.formulario.value)
    console.log(this.formulario.value);


    alert('Contraseña actualizada')

    this.router.navigate(['/perfil'])
  }
}
