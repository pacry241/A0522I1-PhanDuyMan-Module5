import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  rfProduct:FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  productDelete:Product;
  index:number;

  constructor(private _productService:ProductService,
              private _activatedRouter:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this.index=this._activatedRouter.snapshot.params['index'];
    this.productDelete=this._productService.getFindByIndex(this.index);
  }
  clickDelete(){
    if(this.rfProduct.valid){
      this._productService.delete(this.rfProduct.value);
      this._router.navigateByUrl("/list");
    }
  }

}
