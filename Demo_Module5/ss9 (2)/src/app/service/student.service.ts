import {Injectable} from '@angular/core';
import {Student} from "../model/student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];

  constructor(private httpClient: HttpClient) {
    this.students.push({id: 1, name: 'HaiTT', point: 9, dateOfBirth: '1998-01-01'});
    this.students.push({id: 2, name: 'HaiTT1', point: 9, dateOfBirth: '1999-01-01'});
    this.students.push({id: 3, name: 'HaiTT2', point: 6});
  }

  getAll(): Observable<Student[]>{
    return this.httpClient.get<Student[]>('http://localhost:3000/students');
  }

  addStudent(event: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/students', event);
  }

  findById(value: number): Observable<Student> {
    return this.httpClient.get<Student>('http://localhost:3000/students/' + value);
  }
}
