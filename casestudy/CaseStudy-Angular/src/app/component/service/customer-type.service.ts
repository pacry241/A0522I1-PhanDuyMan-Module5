import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customers: CustomerType[] = []

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>("http://localhost:3000/customer-type");
  }

  findById(id: number):Observable<CustomerType> {
    return this.httpClient.get<CustomerType>("http://localhost:3000/customer-type/" +id);
  }
  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/customer-type', event);
  }
  delete(id: number) : Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/customer-type/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/customer-type/' +event.id, event);
  }
}
