import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {Employee} from "../../../model/employee/employee";
import {EmployeeService} from "../../../service/employee/employee.service";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilitys: Facility[]= [];

  constructor(private facilityService: FacilityService) {
    this.facilityService.getAll().subscribe(next => {
      console.log(next);
      this.facilitys = next;
    }, error => {
      console.log("Lỗi!")
    })
  }

  ngOnInit(): void {
  }

  checkDelete(id: number) {

  }
}
