import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../../model/student';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {StudentService} from "../../../service/student.service";
import {Router} from "@angular/router";
import {Classroom} from "../../../model/classroom";
import {ClassroomService} from "../../../service/classroom.service";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: Student = {id: 0, point: 0};
  classrooms: Classroom[] = [];
  @Output()
  eventEmmit = new EventEmitter();

  reactiveForm: FormGroup;

  constructor(private studentService: StudentService,
              private classroomService: ClassroomService,
              private router: Router) {
    this.classroomService.getAll().subscribe(next => {
      this.classrooms = next;
    })
    this.reactiveForm = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      dateOfBirth: new FormControl(),
      point: new FormControl('', [this.validatePoint0]),
      classroom: new FormControl()
    }, []);
  }

  addStudentReactive(): void {
    console.log(this.reactiveForm);
    if (this.reactiveForm.valid) {
      this.studentService.addStudent(this.reactiveForm.value).subscribe(next => {
        this.router.navigateByUrl('');
      });
    }
  }

  validatePoint0(control: AbstractControl): any {
    console.log(control.value < 0);
    if (control.value < 0) {
      return {invalid0: true};
    }
    return null;
  }

  ngOnInit(): void {
  }

  addStudent(): void {
    this.eventEmmit.emit(this.student);
    this.student = {id: 0, point: 0};
  }

  addStudentTemplate(templateForm: NgForm): void {
    console.log(templateForm);
    this.eventEmmit.emit(templateForm.value);
  }


}
