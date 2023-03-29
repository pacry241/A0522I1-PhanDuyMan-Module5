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
    return this.httpClient.get("http://localhost:3000/customers").subscribe(next =>{
      this.customers = next;
    },error => {});
  }

  // findById(id: number):  {
  //   return this.customers.filter(customer => customer.id === id)[0];
  // }
  save(customer: Customer){
    this.customers.push(customer);
  }
}
