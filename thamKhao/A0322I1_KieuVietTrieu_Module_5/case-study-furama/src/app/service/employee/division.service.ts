import { Injectable } from '@angular/core';
import {Division} from "../../model/employee/division";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  divisions : Division[] = [];
  constructor() {
    this.divisions.push({id: 1,name: 'Sale-Marketing'})
    this.divisions.push({id: 2,name: 'Hanh chinh'})
    this.divisions.push({id: 3,name: 'Phuc vu'})
    this.divisions.push({id: 4,name: 'Quan ly'})
  }
  findAll(): Division[]{
    return this.divisions;
  }
}
