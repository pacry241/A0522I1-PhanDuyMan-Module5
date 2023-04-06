import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update-component',
  templateUrl: './product-update-component.component.html',
  styleUrls: ['./product-update-component.component.css']
})
export class ProductUpdateComponentComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(paramMap.get('id'));
      this.product = this.productService.findDictionaryby(id);
    });
  }

  submit() {
    this.productService.updateById(this.product.id, this.product);
  }
}
