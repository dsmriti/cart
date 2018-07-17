import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interface/product';
import { PRODUCTS } from '../data/mock-product';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor() { }
 // configUrl = '/assets/product_data.json';

getData(): Observable<Product[]> {
    return of (PRODUCTS);
  //return this.http.get(this.configUrl);
  //console.log(this.configUrl);
}
}
