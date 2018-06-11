import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from './User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable()
export class UserHomeService {

  constructor( private http: HttpClient) { }
  akkaBaseUrl = 'http://localhost:8080/';
  postUserInformation(userInformation: User ): Observable<User> {
    let postUrl = `${this.akkaBaseUrl}item/addItem`;

    return this.http.post<User>(postUrl, userInformation, httpOptions);
  }
}
