import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product'
import { ProductapiService } from '../service/productapi.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
     name: null,
    price: null,
    description: null
  };

  constructor(private _productAPI: ProductapiService) {

  }

  ngOnInit(): void {
  }

  addProduct(newProduct:Product) {
    //console.log(JSON.stringify(newProduct));
    this._productAPI.addProduct(newProduct).subscribe(
      res => {
        console.log(JSON.stringify(res));
        alert(JSON.stringify(res));
      },
      err => {
        alert(err);
        console.log(err.message);
      }
    )

  }

}
