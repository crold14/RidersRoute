import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutasService } from '../services/rutas-services.service';

@Component({
  selector: 'app-new-route-formulario',
  templateUrl: './new-route-formulario.component.html',
  styleUrls: ['./new-route-formulario.component.css']
})
export class NewRouteFormularioComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private rutasService: RutasService,
    private router: Router
  ) {
    this.formulario = new FormGroup({

      name: new FormControl('', [
        Validators.required
      ]),
      descr: new FormControl('', [
        Validators.required,
      ]),
      dist: new FormControl('', [
        Validators.required,
      ]),
      img: new FormControl('', [

      ]),
      dif: new FormControl('', [
        Validators.required,
      ]),
      latini: new FormControl('', [
        Validators.required,
      ]),
      longini: new FormControl('', [
        Validators.required,
      ]),
      latfin: new FormControl('', [
        Validators.required,
      ]),
      longfin: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.rutasService.newRuta(this.formulario.value)
    console.log(this.formulario.value);
    console.log(response);


    alert('Ruta registrada')

    this.router.navigate(['/rutas'])

  }

  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }
}
