import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productList:Product[] =[{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  constructor() { }

  getProductList(): Product[] {
    return this._productList;
  }

  setProductList(value: Product[]) {
    this._productList = value;
  }

  getFindByIndex(index:number){
    return this._productList[index];
  }

  save(product:Product){
    this._productList.unshift(product);
  }
  delete(product:Product){
    const index = this._productList.indexOf(product);
    this._productList.splice(index,1);
  }
}
