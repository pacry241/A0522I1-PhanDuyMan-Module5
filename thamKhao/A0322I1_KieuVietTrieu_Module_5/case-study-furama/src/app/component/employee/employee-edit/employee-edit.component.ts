import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../service/employee/employee.service";
import {Employee} from "../../../model/employee/employee";
import {Division} from "../../../model/employee/division";
import {Education} from "../../../model/employee/education";
import {PositionEmployee} from "../../../model/employee/position-employee";
import {DivisionService} from "../../../service/employee/division.service";
import {EducationService} from "../../../service/employee/education.service";
import {PositionEmployeeService} from "../../../service/employee/position-employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  formGroup: FormGroup;
  employeeSelect: Employee = {};
  divisions: Division[] = [];
  educations: Education[] = [];
  positions: PositionEmployee[] = [];




  constructor(private employeeService: EmployeeService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private positionEmployeeService: PositionEmployeeService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.createForm();
    this.divisions = this.divisionService.findAll()
    this.educations = this.educationService.findAll()
    this.positions = this.positionEmployeeService.findAll()
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      console.log(id)
      this.employeeService.findById(id).subscribe(data => {
        this.employeeSelect = data;
        this.createForm();
        console.log(id);
      })
    })
  }



  save() {
    this.employeeService.updateById(this.formGroup.value).subscribe(data => {
      this.route.navigateByUrl('employee/list').then(result => {
        this.formGroup.reset();
        this.employeeSelect = {};
      })
    })
  }


  private createForm() {
    this.formGroup = new FormGroup(
      {
        id: new FormControl(this.employeeSelect.id),
        name: new FormControl(this.employeeSelect.name,[Validators.required,Validators.minLength(3)]),
        birthday: new FormControl(this.employeeSelect.birthday,[Validators.required]),
        idCard: new FormControl(this.employeeSelect.idCard,[Validators.required]),
        salary: new FormControl(this.employeeSelect.salary,[Validators.required]),
        phone: new FormControl(this.employeeSelect.phone,[Validators.required]),
        email: new FormControl(this.employeeSelect.email,[Validators.required, Validators.email]),
        address: new FormControl(this.employeeSelect.address, [Validators.required]),
        position: new FormControl(this.employeeSelect.position, [Validators.required]),
        education: new FormControl(this.employeeSelect.education, [Validators.required]),
        division: new FormControl(this.employeeSelect.division, [Validators.required]),

      }
    );
  }
}
