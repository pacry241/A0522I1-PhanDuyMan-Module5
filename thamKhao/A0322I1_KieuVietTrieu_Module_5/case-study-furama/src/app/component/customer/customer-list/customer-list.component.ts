import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {Customer} from "../../../model/customer/customer";
// import {CustomerDeleteComponent} from "../customer-delete/customer-delete.component";
// import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[]= [];

  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customers = next;
    }, error => {
      console.log("Lỗi!")
    })
  }

  ngOnInit(): void {
  }

  // deteleCustomer(id:number,name:string){
  //   const modalRef = this.modal.open(CustomerDeleteComponent);
  //   modalRef.componentInstance.idDelete = id;
  //   modalRef.componentInstance.nameDelete = name;
  // }
}
