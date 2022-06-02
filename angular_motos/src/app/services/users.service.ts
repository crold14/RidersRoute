import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  private users$: Subject<boolean>;

  constructor(
    private httpClient: HttpClient
  ) {
    // this.baseUrl = 'https://ridersroutes.herokuapp.com/api';

    this.baseUrl = 'http://localhost:3000/api'

    this.users$ = new Subject();
  }



  registerUser(pNewUser: FormData) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/usuarios/registro', pNewUser))
  }

  loginUser(pUser: Usuario) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + '/usuarios/login', pUser))
  }

  login() {
    this.users$.next(true);
  }
  logOut() {
    this.users$.next(false)
  }

  getUsers$(): Observable<boolean> {
    return this.users$.asObservable();
  }
  modifyUser(pIdUser: any, pNewData: any) {
    return firstValueFrom(this.httpClient.put<any>(this.baseUrl + '/usuarios/' + pIdUser, pNewData))
  }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/usuarios/perfil', httpOptions))
  }

  getComunidad() {

    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + '/usuarios'))
  }

  editProfile(pEditPerfil: FormData) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.put<any>(this.baseUrl + '/usuarios/editarPerfil', pEditPerfil, httpOptions))
      ;
  }

  changePassword(pNewPassword: Usuario) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token') }
      )
    }
    return firstValueFrom(this.httpClient.put<any>(this.baseUrl + '/usuarios/changePassword', pNewPassword, httpOptions))


  }


}

