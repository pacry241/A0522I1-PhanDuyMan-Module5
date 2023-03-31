import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = []

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers");
  }

  findById(id: number):Observable<Customer> {
      return this.httpClient.get<Customer>("http://localhost:3000/customers/" +id);
  }
  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/customers', event);
  }
  delete(id: number) : Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/customers/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/customers/' +event.id, event);
  }
}
