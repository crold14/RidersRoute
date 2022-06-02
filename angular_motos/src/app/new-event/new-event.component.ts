import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      title: new FormControl('', [
      ]),

      description: new FormControl('', [
      ]),


    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.eventsService.newEvent(this.formulario.value)
    console.log(this.formulario.value);



    alert('Evento registrado')

    this.router.navigate(['/eventos'])

  }



  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }

}
