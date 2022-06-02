import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  formulario: FormGroup;
  userData: any;
  files: any[]

  constructor(
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }


  async ngOnInit() {
    const response = await this.userService.getData()
    this.userData = response;
    this.formulario = new FormGroup({
      name: new FormControl(this.userData.name, [

      ]),
      nickname: new FormControl(this.userData.nickname, [

      ]),
      city: new FormControl(this.userData.city, [

      ]),
      description: new FormControl(this.userData.description, [

      ]),
      age: new FormControl(this.userData.age, [

      ]),
      email: new FormControl(this.userData.email, [

        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/),
      ]),
      img: new FormControl(this.userData.img, [

      ]),
      // password: new FormControl(this.userData.password, [

      // ]),


    })


  }

  onChange($event) {
    this.files = $event.target.files;
  }

  async onSubmit() {
    // const response = await this.userService.editProfile(this.formulario.value)
    // console.log(this.formulario.value);

    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('name', this.formulario.value.name);
    fd.append('nickname', this.formulario.value.nickname);
    fd.append('city', this.formulario.value.city);
    fd.append('description', this.formulario.value.description);
    fd.append('age', this.formulario.value.age);
    fd.append('email', this.formulario.value.email);
    fd.append('password', this.formulario.value.password);

    const response = await this.userService.editProfile(fd);

    alert('Perfil actualizado')

    this.router.navigate(['/perfil'])
  }





  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }

}
