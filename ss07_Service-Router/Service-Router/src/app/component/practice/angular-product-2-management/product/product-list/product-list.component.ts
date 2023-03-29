import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[];

  constructor(private _productService:ProductService,
              private _router:Router) { }

  ngOnInit(): void {
    this.productList=this._productService.getProductList();
  }

  detailProduct(i:number){
    this._router.navigate(['detail',i]);
  }


}
