import { Component, OnInit } from '@angular/core';
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../../service/rent-type.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {


  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  createFacility: FormGroup = new FormGroup({
    id: new FormControl(''),
    nameFacility: new FormControl(''),
    acreage: new FormControl(''),
    floor: new FormControl(''),
    renter: new FormControl(''),
    status: new FormControl(''),
    expense: new FormControl(''),
    rentType: new FormControl('')
  })
  rentTypes: RentType[] = [];
  constructor(private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private router: Router) {
    this.rentTypeService.getAll().subscribe(next=>{
      console.log(next);
      this.rentTypes = next;

    })
  }

  ngOnInit(): void {
  }

  saveFacility() {
    this.facilityService.save(this.createFacility.value).subscribe(data=>{
      console.log(data);
      alert("Them dich vu thanh cong")
      this.router.navigateByUrl('/facilities')
    })

  }
}
