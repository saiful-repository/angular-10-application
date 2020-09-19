import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../service/productapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Object;

  constructor(private _productAPI:ProductapiService) { }

  ngOnInit(): void {
    this._productAPI.getProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

}
