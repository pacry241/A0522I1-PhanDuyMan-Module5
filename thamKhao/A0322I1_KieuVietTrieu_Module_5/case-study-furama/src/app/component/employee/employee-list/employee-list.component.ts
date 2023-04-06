import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../service/employee/employee.service";
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer/customer.service";
import {Employee} from "../../../model/employee/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]= [];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getAll().subscribe(next => {
      console.log(next);
      this.employees = next;
    }, error => {
      console.log("Lỗi!")
    })
  }

  ngOnInit(): void {
  }

  checkDelete(id: number) {

  }
}
