import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product'
import { ProductapiService } from '../service/productapi.service';
import { DisplayMessageService } from '../service/display-message.service';

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

  constructor(private _productAPI: ProductapiService, private msgDisplay: DisplayMessageService) {

  }

  ngOnInit(): void {
  }

  addProduct(newProduct:Product) {
    //console.log(JSON.stringify(newProduct));
    this._productAPI.addProduct(newProduct).subscribe(
      res => {
        console.log(JSON.stringify(res));
        this.msgDisplay.showSucessMessage("Product has been added successfully", "Success");
      },
      err => {
        this.msgDisplay.showErrorMessage("Product adding failed", "Error");
        console.log(err.message);
      }
    )

  }

}
