import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interface/product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:4000/items';
  constructor(private http: HttpClient) { }
  display(){
    return this.http.get(`${this.uri}`);
  }
}
