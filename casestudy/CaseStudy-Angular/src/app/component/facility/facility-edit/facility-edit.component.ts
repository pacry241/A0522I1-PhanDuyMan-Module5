import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RentType} from "../../model/rent-type";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facility: Facility;
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  editFacility: FormGroup = new FormGroup({
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
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next=>{
      const id = next.get('id');
      console.log(id);
      this.rentTypeService.getAll().subscribe(next=>{
        console.log(next);
        this.rentTypes = next;
        this.facilityService.findById(parseInt(id)).subscribe(next=>{
          console.log(next);
          this.facility = next;
          this.editFacility.patchValue(this.facility);
        })
      })
    })

  }

  ngOnInit(): void {
  }

  saveFacility() {
    this.facilityService.editSave(this.editFacility.value).subscribe(data=>{
      console.log(data);
      alert("Chinh sua dich vu thanh cong")
      this.router.navigateByUrl('/facilities')
    })
  }
}
