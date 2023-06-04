import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Teacher} from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>('http://localhost:8080/api/teacher');
  }

  findById(id: number): Observable<Teacher> {
    return this.httpClient.get<Teacher>('http://localhost:8080/api/teacher/' + id);
  }

  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/teacher', event);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/api/teacher/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:8080/api/teacher/' + event.id, event);
  }
}
