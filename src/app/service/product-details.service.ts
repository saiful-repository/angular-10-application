import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
 
  constructor(private _http: HttpClient) { }   

  getProductDetails(id) {    
    return this._http.get('http://www.productmicservice.com/api/product/' + id);
  }
}
