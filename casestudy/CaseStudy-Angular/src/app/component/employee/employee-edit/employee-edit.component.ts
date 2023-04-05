import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/employee";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee
  editForm: FormGroup= new FormGroup({
      id: new FormControl(''),
      image: new FormControl(''),
      nameEmployee: new FormControl(''),
      dateOfBirth: new FormControl(''),
      idCard: new FormControl(''),
      salary: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      level: new FormControl(''),
      location: new FormControl(''),
      part: new FormControl(''),
  })
  ;
  constructor(private employeeService: EmployeeService,
              private router:Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }
  onSave() {
    console.log(this.editForm.value);
    this.employeeService.editSave(this.editForm.value).subscribe(next =>{
      alert("Luu lai chinh sua thanh cong");
      this.router.navigateByUrl('/employee-list');
    });
  }
}
