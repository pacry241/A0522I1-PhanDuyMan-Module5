import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  productDetail:Product;
  index:number;

  constructor(private _productService:ProductService,
              private _activatedRouter:ActivatedRoute) {}

  ngOnInit(): void {
    this.index=this._activatedRouter.snapshot.params['index'];
    this.productDetail=this._productService.getFindByIndex(this.index);
  }

}
