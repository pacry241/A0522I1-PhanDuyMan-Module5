import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Giaovien} from '../model/giaovien';

@Injectable({
  providedIn: 'root'
})
export class GiaovienService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Giaovien[]> {
    return this.httpClient.get<Giaovien[]>('http://localhost:3000/giaovien');
  }

  findById(id: number): Observable<Giaovien> {
    return this.httpClient.get<Giaovien>('http://localhost:3000/giaovien/' + id);
  }

  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/giaovien', event);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/giaovien/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:3000/giaovien/' + event.id, event);
  }
}
