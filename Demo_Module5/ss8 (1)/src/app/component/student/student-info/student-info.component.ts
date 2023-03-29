import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "../../../model/student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../../service/student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit, OnChanges {
  student: Student = {id: 1, name: 'haiTT', point: 9}
  color = 'red';

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService) {
    this.activatedRoute.paramMap.subscribe(next => {
      // id là String (dữ liệu trên thanh url)
      const id = next.get('id');
      if (id != null) {
       this.studentService.findById(parseInt(id)).subscribe(next => {
          this.student = next;
        });
      }
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeName(value: string) {
    this.student.name = value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
