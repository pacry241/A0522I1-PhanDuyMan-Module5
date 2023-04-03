import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facility: Facility[] = []
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>("http://localhost:3000/facilities");
  }

  findById(id: number):Observable<Facility> {
    return this.httpClient.get<Facility>("http://localhost:3000/facilities/" +id);
  }
  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/facilities', event);
  }
  delete(id: number) : Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/facilities/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/facilities/' +event.id, event);
  }
}
