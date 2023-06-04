import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:8080/api/student');
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>('http://localhost:8080/api/student/' + id);
  }

  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/student', event);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/api/student/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/api/student/' + event.id, event);
  }
}
