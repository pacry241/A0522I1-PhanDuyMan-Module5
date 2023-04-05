import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>("http://localhost:3000/employees");
  }

  findById(id: number):Observable<Employee> {
    return this.httpClient.get<Employee>("http://localhost:3000/employees/" +id);
  }
  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/employees', event);
  }
  delete(id: number) : Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/employees' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/employees' +event.id, event);
  }
}
