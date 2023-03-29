import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {HttpClient} from "@angular/common/http";
import {Classroom} from "../model/classroom";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Classroom[]> {
    return this.httpClient.get<Classroom[]>('http://localhost:3000/classrooms');
  }
}
