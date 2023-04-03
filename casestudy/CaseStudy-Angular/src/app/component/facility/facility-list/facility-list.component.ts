import { Component, OnInit } from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];
  constructor(private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(next=>{
      console.log(next);
      this.facilities = next
    });
  }

  removeFacility(id: number){
    this.facilityService.delete(id).subscribe(next=>{
      alert("Đã xóa dịch vụ thành công");
      this.getAll()
    })
  }
}
