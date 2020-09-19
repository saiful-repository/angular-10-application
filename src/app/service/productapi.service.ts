import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private _http:HttpClient) { }

  getProduct() {
    // Calling my local IIS Domain URL
    return this._http.get('http://www.productmicservice.com/api/product');
  }

  addProduct(newProduct: Product) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //let options = { headers: headers, responseType:'json'};
    let data = JSON.stringify(newProduct);    
    return this._http.post('http://www.productmicservice.com/api/product', data, { headers, responseType:'json' });

    //return this._http.post("http://www.productmicservice.com/api/product", JSON.stringify(newProduct), {
    //  headers:
    //    { 'Content-Type': 'application/json'}
    //});

  }
}
