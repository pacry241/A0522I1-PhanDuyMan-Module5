import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>("http://localhost:3000/rentType");
  }

  findById(id: number):Observable<RentType> {
    return this.httpClient.get<RentType>("http://localhost:3000/rentType/" +id);
  }
  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/rentType', event);
  }
  delete(id: number) : Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/rentType/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/rentType/' +event.id, event);
  }}
