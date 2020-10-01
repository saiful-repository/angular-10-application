import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private _http:HttpClient) { }

  getProduct(currentPage, itemsPerPage):Observable<any> {
    // Calling my local IIS Domain URL
    return this._http.get('https://localhost:44343/api/product/?currentPage=' + currentPage + '&itemsPerPage=' + itemsPerPage);
  }

  addProduct(newProduct: Product) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //let options = { headers: headers, responseType:'json'};
    let data = JSON.stringify(newProduct);    
    return this._http.post('https://localhost:44343/api/product', data, { headers, responseType:'json' });

    //return this._http.post("http://www.productmicservice.com/api/product", JSON.stringify(newProduct), {
    //  headers:
    //    { 'Content-Type': 'application/json'}
    //});

  }
}
