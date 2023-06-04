import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupStudent} from '../model/groupStudent';

@Injectable({
  providedIn: 'root'
})
export class GroupStudentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<GroupStudent[]> {
    return this.httpClient.get<GroupStudent[]>('http://localhost:8080/api/group_student');
  }

  findById(id: number): Observable<GroupStudent> {
    return this.httpClient.get<GroupStudent>('http://localhost:8080/api/group_student/' + id);
  }

  save(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/group_student', event);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/api/group_student/' + id);
  }

  editSave(event: any): Observable<any> {
    return this.httpClient.patch<any>('http://localhost:8080/api/group_student/' + event.id, event);
  }
}
