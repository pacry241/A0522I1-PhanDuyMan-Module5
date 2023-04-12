import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nhom} from '../model/nhom';

@Injectable({
  providedIn: 'root'
})
export class NhomService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Nhom[]> {
    return this.httpClient.get<Nhom[]>('http://localhost:3000/nhom');
  }

  findById(id: number): Observable<Nhom> {
    return this.httpClient.get<Nhom>('http://localhost:3000/nhom/' + id);
  }

  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/nhom', event);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/nhom/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/nhom/' + event.id, event);
  }
}
