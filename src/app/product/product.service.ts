import { Injectable } from '@angular/core';
import {Item} from './Item';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable()
export class ProductService {
  akkaBaseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  postItemInformation(productInformation: Item): Observable<Item> {
    let postUrl = `${this.akkaBaseUrl}item/addItem`;
    return this.http.post<Item>(postUrl, productInformation, httpOptions);
  }

  updateItemInformation(productInformation: Item): Observable<Item> {
    let postUrl = `${this.akkaBaseUrl}item/addItem`;
    return this.http.put<Item>(postUrl, productInformation, httpOptions);
  }

  deleteProductRecord(productId: number ): Observable <any> {
    let deleteUrl = `${this.akkaBaseUrl}item/deleteItem/` + productId;
    return this.http.delete(deleteUrl, httpOptions);
  }
}
