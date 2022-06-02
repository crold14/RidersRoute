import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-detalle-events',
  templateUrl: './detalle-events.component.html',
  styleUrls: ['./detalle-events.component.css']
})
export class DetalleEventsComponent implements OnInit {

  comentarios: any;
  formulario: FormGroup;
  arrAsistentes: any


  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService,
    private router: Router
  ) {
    this.comentarios = null;
    this.arrAsistentes = []
    this.formulario = new FormGroup({

      comentario: new FormControl('', [
        Validators.required
      ])
    })
  }

  async ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {

      const response = await this.eventsService.getAllComents(params['eventId'])
      console.log(response)
      this.comentarios = response.reverse()
      const asistentes = await this.eventsService.getALL()
      this.arrAsistentes = response;
    });
  }

  async onSubmit() {
    this.activatedRoute.params.subscribe(async params => {
      const response = await this.eventsService.newComentario(this.formulario.value, params['eventId'])
      console.log(this.formulario.value);
      this.formulario.reset();
      const responseComments = await this.eventsService.getAllComents(params['eventId'])
      console.log(response)
      this.comentarios = responseComments.reverse()
      // this.router.navigate(['/eventos'])
      alert('Comentario añadido')

    })
  }




}
