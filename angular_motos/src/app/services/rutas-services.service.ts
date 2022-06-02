import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Ruta } from '../interfaces/rutas.interfaces';



@Injectable({
  providedIn: 'root'
})
export class RutasService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    // this.baseUrl = 'https://ridersroutes.herokuapp.com/api'
    this.baseUrl = 'http://localhost:3000/api'
  }

  getALL(pPage: number = 1) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/rutas'))
  }


  getById(pRutasId: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + `/rutas/${pRutasId}`))
  }

  //para meter la cabecera de authentication en la peticion
  newRuta(pNewRuta: Ruta) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/rutas/new', pNewRuta, httpOptions))
  }




}
