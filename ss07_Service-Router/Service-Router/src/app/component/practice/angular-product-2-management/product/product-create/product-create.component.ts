import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  rfProduct:FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  constructor(private _formBuilder:FormBuilder,
              private _productService:ProductService,
              private _router:Router) { }

  ngOnInit(): void {
    this.rfProduct=this._formBuilder.group({
      id:[,[
        Validators.required
      ]
      ],
      name:[,[
        Validators.required,
        Validators.minLength(5)
      ]
      ],
      price:[,[
        Validators.required,
        Validators.min(1)
      ]
      ],
      description:[,[
        Validators.required
      ]]
    })
  }

  onSubmit() {
    if(this.rfProduct.valid){
      this._productService.save(this.rfProduct.value);
      this._router.navigateByUrl("/list");
    }
  }
}
