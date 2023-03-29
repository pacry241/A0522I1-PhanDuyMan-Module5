import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../model/customer";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  detailForm: FormGroup = new FormGroup({
    id: new FormControl('this.customer.id'),
    nameCustomer: new FormControl('this.customer.nameCustomer'),
    dateOfBirth: new FormControl('this.customer.dateOfBirth'),
    gender: new FormControl('this.customer.gender'),
    cmnd: new FormControl('this.customer.cmnd'),
    phoneNumber: new FormControl('this.customer.phoneNumber'),
    email: new FormControl('this.customer.email'),
    customerType: new FormControl('this.customer.customerType'),
    address: new FormControl('this.customer.address'),
  });

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              ) {
    this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get('id')
        console.log(id)
        this.customer = this.customerService.findById(parseInt(id))
        this.detailForm.patchValue(this.customer)

      }, error => {
      }
      , () => {
      })
  }

  ngOnInit(): void {

  }
}
