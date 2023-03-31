import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;
import {CustomerService} from "../../service/customer.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer;
  createForm: FormGroup

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.createForm= new FormGroup({
      id: new FormControl('',[Validators.required]),
      nameCustomer: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      dateOfBirth: new FormControl('',[Validators.required,]),
      gender: new FormControl(''),
      cmnd: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      customerType: new FormControl(''),
      address: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createForm.value);
    this.customerService.save(this.createForm.value).subscribe(next =>{
      alert("them thanh cong");
      this.router.navigateByUrl('/customer-list');
    });
  }
}
