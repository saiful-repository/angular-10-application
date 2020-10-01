import { Component, OnInit } from '@angular/core';
import { ProductapiService } from '../service/productapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Array<any>;  
  config: any;

  constructor(private _productAPI: ProductapiService, private route: ActivatedRoute, private router: Router) {
    this.products = new Array<any>();
    this.config = {     
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: 0
    }
  }

  ngOnInit(): void {
    
    this.getProduct(this.config.currentPage, this.config.itemsPerPage);

    this.route.queryParams.subscribe(params => {
      this.config.currentPage = params['page'] ? params['page'] : 1;
      this.getProduct(this.config.currentPage, this.config.itemsPerPage);
    })

  }

  pageChange(newPage: Number) {
    this.router.navigate(['/product'], { queryParams: { page: newPage }})
  }

  getProduct(currentPage, itemsPerPage) {
    this._productAPI.getProduct(currentPage, itemsPerPage).subscribe(data => {
      this.products = data.data;
      console.log(this.products);
      this.config.totalItems = data.totalResult;
    });
  }

}
