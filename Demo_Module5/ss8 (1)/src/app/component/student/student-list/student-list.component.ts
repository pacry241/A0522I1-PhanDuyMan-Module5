import {Component, OnInit} from '@angular/core';
import {Student} from '../../../model/student';
import {StudentService} from "../../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  studentInfo: Student = {id: 5, point: 7};

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.getAll().subscribe(next => {
      console.log(next);
      this.students = next;
    });
  }

  ngOnInit(): void {
  }

  getInfo(temp: Student): void {
    this.studentInfo = temp;
  }

  // addStudent(event: any): void {
  //   this.studentService.addStudent(event);
  // }

  changeCreate(): void {
    this.router.navigateByUrl('/create');
  }
}
