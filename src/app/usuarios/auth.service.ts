import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usuario} from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(user: Usuario): Observable<any> {
    const  urlEndPoint: string = 'https://dev.tuten.cl/TutenREST/rest/user/' + user.email;
    const httpOptions = {
      headers: new HttpHeaders({
        'app': 'APP_BCK',
        'Accept': 'application/json',
        'password': user.passwordHash
      })
    };

    return this.http.put<any>(urlEndPoint, null, httpOptions);
  }
}
