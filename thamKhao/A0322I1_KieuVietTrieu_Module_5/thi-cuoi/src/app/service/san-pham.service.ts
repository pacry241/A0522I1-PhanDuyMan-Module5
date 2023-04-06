import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoHang} from '../model/lo-hang';
import {SanPham} from '../model/san-pham';

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {
  url = 'http://localhost:3000/sanpham';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<SanPham[]> {
    return this.httpClient.get<SanPham[]>(this.url);
  }
}
