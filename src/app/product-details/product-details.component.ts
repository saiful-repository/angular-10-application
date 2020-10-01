import { Component, OnInit, } from '@angular/core';
import { ProductDetailsService } from '../service/product-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  sub: any;
  product: Object;
  constructor(private pservice: ProductDetailsService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id')
    });

    this.pservice.getProductDetails(this.id).subscribe(data => {
      this.product = data;
      console.log(data);
    })
  }
}
