import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    // this.baseUrl = 'https://ridersroutes.herokuapp.com/api'
    this.baseUrl = 'http://localhost:3000/api'
  }
  newReview(idRoute: number, newData: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/reviews/' + idRoute + '/new', newData, httpOptions))
  }
  getById(idRoute: number) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/reviews/' + idRoute))
  }
}
