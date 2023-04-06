import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {EmployeeService} from "../../../service/employee/employee.service";
import {Education} from "../../../model/employee/education";
import {Division} from "../../../model/employee/division";
import {PositionEmployee} from "../../../model/employee/position-employee";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DivisionService} from "../../../service/employee/division.service";
import {EducationService} from "../../../service/employee/education.service";
import {PositionEmployeeService} from "../../../service/employee/position-employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  divisions : Division[]= [];
  educations : Education[]= [];
  positions: PositionEmployee[]= [];
  formGroup = new FormGroup(
    {
      id : new FormControl(),
      name : new FormControl('',[Validators.required,Validators.minLength(3)]),
      birthday : new FormControl('',[Validators.required]),
      idCard : new FormControl('',[Validators.required]),
      salary : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required,Validators.pattern("^(\\+84|0)\\d{9}$")]),
      email : new FormControl('',[Validators.required,Validators.email]),
      address : new FormControl('',[Validators.required]),
      position : new FormControl('',[Validators.required]),
      education : new FormControl('',[Validators.required]),
      division : new FormControl('',[Validators.required]),
    }
  )
  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private positionEmployeeService: PositionEmployeeService,
              private route: Router) {
    this.divisions = this.divisionService.findAll();
    this.educations = this.educationService.findAll();
    this.positions = this.positionEmployeeService.findAll();
  }

  ngOnInit(): void {
  }

  save(){
    this.employeeService.addEmployee(this.formGroup.value).subscribe(data =>{
      this.route.navigateByUrl('/employee/list').then(result =>{
        this.formGroup.reset();
      })
    })
  }
}
