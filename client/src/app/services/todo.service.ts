// MEAN Portfolio
// File Name: todo.service.ts
// Author: Minseok Choi
// StudentID: 300917184
// Date: 03/29/2019
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private user: User;
  private authToken: any = null;

  private endpoint = 'https://minseokchoi-comp308-assign2.herokuapp.com/api/todo-list/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  // use obserable pattern, subscribe to it and when anything changes we are notified
  public getList(): Observable<any> {
    this.loadToken();                     // checks authorization
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  // get a specific todo data with its id
  public getTodo(todo: Todo): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'edit/' + todo._id, this.httpOptions);
  }

  // add a new todo entity
  public addTodo(todo: Todo): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'add', todo, this.httpOptions);
  }

  // update an existing todo data with its id
  public editTodo(todo: Todo): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + 'edit/' + todo._id, todo, this.httpOptions);
  }

  // delete todo data
  public deleteTodo(todo: Todo): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint + 'delete/' + todo._id, this.httpOptions);
  }

  // load Token from localStorage
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
