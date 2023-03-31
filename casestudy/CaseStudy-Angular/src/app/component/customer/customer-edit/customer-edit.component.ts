import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editForm: FormGroup;
  customer: Customer;
  customerTypes: CustomerType[]=[]
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get('id')
        console.log(id)
        this.customerTypeService.getAll().subscribe(next =>{
          this.customerTypes =next;
          this.customerService.findById(parseInt(id)).subscribe(next =>{
            this.customer =next;
            console.log(next)
            this.editForm.patchValue(this.customer);
          })
        })
      }, error => {
      }
      , () => {
      })
    this.editForm= new FormGroup({
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
    console.log(this.editForm.controls.id);
  }

  onSave() {
    console.log(this.editForm.value);
    this.customerService.editSave(this.editForm.value).subscribe(next =>{
      alert("Luu lai chinh sua thanh cong");
      this.router.navigateByUrl('/customer-list');
    });
  }
}
