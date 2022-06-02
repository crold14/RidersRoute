import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseUrl: string;
  private users$: Subject<boolean>;

  constructor(
    private httpClient: HttpClient
  ) {
    // this.baseUrl = 'https://ridersroutes.herokuapp.com/api'
    this.baseUrl = 'http://localhost:3000/api'
    this.users$ = new Subject();
  }

  login() {
    this.users$.next(true);
  }

  getALL() {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/events'))
  }

  newEvent(newData: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/events/new', newData, httpOptions))
  }

  inscribe(pEventId) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/events/asist', { idEvent: pEventId }, httpOptions))
  }

  getById(eventId: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + `/events/${eventId}`))
  }
  getAllComents(idEvent: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/events/' + idEvent + '/coments'))
  }

  newComentario(pData: any, eventId: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/events/' + eventId, pData, httpOptions))
  }

}
