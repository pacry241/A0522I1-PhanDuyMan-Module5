import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Sinhvien} from '../model/sinhvien';

@Injectable({
  providedIn: 'root'
})
export class SinhvienService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Sinhvien[]> {
    return this.httpClient.get<Sinhvien[]>('http://localhost:3000/sinhvien');
  }

  findById(id: number): Observable<Sinhvien> {
    return this.httpClient.get<Sinhvien>('http://localhost:3000/sinhvien/' + id);
  }

  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/sinhvien', event);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/sinhvien/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/sinhvien/' + event.id, event);
  }
}
