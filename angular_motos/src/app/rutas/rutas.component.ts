import { Component, OnInit } from '@angular/core';
import { Ruta } from '../interfaces/rutas.interfaces';
import { RutasService } from '../services/rutas-services.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  arrRutas: Ruta[]
  constructor(
    private rutasService: RutasService
  ) {
    this.arrRutas = []
  }

  async ngOnInit() {
    const response = await this.rutasService.getALL()
    this.arrRutas = response;


  }

  async onInput(event) {
    const response = await this.rutasService.getALL()
    this.arrRutas = response;
    const textoFiltrado = event.target.value.toLowerCase();
    let arrBusqueda = new Array();
    for (let ruta of this.arrRutas) {
      if (ruta.name.toLowerCase().includes(textoFiltrado)) {
        arrBusqueda.push(ruta)
      }
    }
    this.arrRutas = arrBusqueda;

  }


}
