import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  arrEvents: any
  login: boolean
  asistentes: any

  constructor(
    private eventsService: EventsService
  ) {
    this.arrEvents = [];
    this.login = false;
    this.asistentes = []
    if (localStorage.getItem('token')) {
      this.login = true
    }
  }
  async ngOnInit() {
    const response = await this.eventsService.getALL()
    this.arrEvents = response;
    console.log(response);

  }

  async onInput(event) {
    const response = await this.eventsService.getALL()
    this.arrEvents = response;
    const textoFiltrado = event.target.value.toLowerCase();
    let arrBusqueda = new Array();
    for (let evento of this.arrEvents) {
      if (evento.title.toLowerCase().includes(textoFiltrado)) {
        arrBusqueda.push(evento)
      }
    }
    this.arrEvents = arrBusqueda;

  }

  async onClick(pEventId) {
    this.eventsService.inscribe(pEventId)

  }

}
