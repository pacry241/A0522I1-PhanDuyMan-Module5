import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoHang} from '../model/lo-hang';

@Injectable({
  providedIn: 'root'
})
export class LoHangService {
  url = 'http://localhost:3000/lohang';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<LoHang[]> {
    return this.httpClient.get<LoHang[]>(this.url);
  }

  // findAllByNameAndNhaXe(name: string, nhaXe_id: string): Observable<VeXe[]> {
  //   return this.httpClient.get<VeXe[]>(`${this.url}?_sort=id,name &_order=asc,desc&name_like=${name}&nhaXe.id_like=${nhaXe_id}`);
  // }

  addLoHang(event: any): Observable<any> {
    return this.httpClient.post(this.url, event);
  }

  findById(id: string): Observable<LoHang> {
    return this.httpClient.get<LoHang>(`${this.url}/${id}`);
  }

  updateById(value: LoHang) {
    return this.httpClient.put<LoHang>(`${this.url}/${value.id}`, value);
  }

  deleteById(id: string): Observable<LoHang> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  findAllByName(name: string): Observable<LoHang[]> {
    return this.httpClient.get<LoHang[]>(`${this.url}?sanPham.name_like=${name}`);
  }

  // getByDepositAll(x1: number, x2: number): Observable<LoHang[]> {
  //   return this.httpClient.get<LoHang[]>(`${this.url}?deposit_gte=${x1}&views_lte=${x2}`);
  // }

}
