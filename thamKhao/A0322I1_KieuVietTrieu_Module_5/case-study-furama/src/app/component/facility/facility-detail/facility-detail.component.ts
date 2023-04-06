import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../../service/employee/employee.service";
import {FacilityService} from "../../../service/facility/facility.service";

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
  }

}
