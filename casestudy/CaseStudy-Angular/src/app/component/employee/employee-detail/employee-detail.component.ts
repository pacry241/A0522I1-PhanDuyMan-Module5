import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  constructor(private employeeService: EmployeeService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(idEmployee =>{
      const id = idEmployee.get('id');
      console.log(id);
      this.employeeService.findById(parseInt(id)).subscribe(data=>{
        console.log(data);
        this.employee= data;
      })
    })
  }

  ngOnInit(): void {
  }

}
