import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer";
import {Route, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[]=[];
  createForm: FormGroup
  customerTypes: CustomerType[] = [];
  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
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

    this.customerTypeService.getAll().subscribe(next =>{
      console.log(next);
      this.customerTypes =next
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customers = next;
    });

  }

  detailCustomer(id: number) {
    this.router.navigate(['detail',id]);
  }

  onSubmit() {
    console.log(this.createForm.value);
    this.customerService.save(this.createForm.value).subscribe(next =>{
      alert("them thanh cong");
      this.getAll()
    });
  }

  remove(id: number){
    this.customerService.delete(id).subscribe(next =>{
      alert("da xoa ");
      this.getAll();
    })
  }
}
