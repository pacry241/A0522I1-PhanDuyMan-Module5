import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/customer";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[]=[];
  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customers = this.customerService.getAll();
    console.log(this.customers)
  }

  detailCustomer(id: number) {
    this.router.navigate(['detail',id]);
  }
}
