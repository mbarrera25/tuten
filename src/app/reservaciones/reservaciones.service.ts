import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../usuarios/usuario';
import {map} from 'rxjs/operators';
import {Bookings} from './bookings';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  constructor(private http: HttpClient) { }

  buscar(email: string, token: string, adminemail: string): Observable<any>{
    const urlEndPoint: string = 'https://dev.tuten.cl/TutenREST/rest/user/' + email + '/bookings?current=true';
    const httpOptions = {
      headers: new HttpHeaders({
        app: 'APP_BCK',
        Accept: 'application/json',
        token: token,
        adminemail: adminemail
      })
    };
    const params = new URLSearchParams();
    params.set('current', 'true');

    return this.http.get(urlEndPoint, httpOptions ).pipe(
      map(response => response as Bookings[] )
    );
  }



}
