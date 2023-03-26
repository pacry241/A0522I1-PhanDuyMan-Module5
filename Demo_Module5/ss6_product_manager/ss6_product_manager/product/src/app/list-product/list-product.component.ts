import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

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
