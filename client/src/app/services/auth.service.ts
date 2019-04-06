// MEAN Portfolio
// File Name: auth.service.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  private authToken: any;

  private endpoint = 'https://minseokchoi-comp308-assign2.herokuapp.com/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) {
    this.user = new User();
  }
  
  // send user json data to the endpoint/register
  public registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.endpoint + 'register', user, this.httpOptions);
  }

  // send user json data to the endpoint/login
  public authenticateUser(user: User): Observable<any> {
    return this.http.post<any>(this.endpoint + 'login', user, this.httpOptions);
  }

  // store token, and user data, and set the fields values
  public storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // reset the token, the user data, and the localStorage.
  public logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.endpoint + 'logout', this.httpOptions);
  }

  // returns true if token is not expired yet
  public loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }
}
