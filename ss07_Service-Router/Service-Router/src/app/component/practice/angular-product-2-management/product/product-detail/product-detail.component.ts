import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail:Product;
  index:number;

  constructor(private _productService:ProductService,
              private _activatedRouter:ActivatedRoute) {}

  ngOnInit(): void {
    this.index=this._activatedRouter.snapshot.params['index'];
    this.productDetail=this._productService.getFindByIndex(this.index);
  }
}
