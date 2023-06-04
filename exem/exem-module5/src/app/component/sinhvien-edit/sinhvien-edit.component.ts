import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../model/student';
import {Teacher} from '../../model/teacher';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherService} from '../../service/teacher.service';
import {GroupStudentService} from "../../service/group-student.service";
import {GroupStudent} from "../../model/groupStudent";

@Component({
  selector: 'app-sinhvien-edit',
  templateUrl: './sinhvien-edit.component.html',
  styleUrls: ['./sinhvien-edit.component.css']
})
export class SinhvienEditComponent implements OnInit {
  editForm: FormGroup;
  sinhVien: Student;
  giaoVien: Teacher[] = [];
  regex = '^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7,9}$';
  groups: GroupStudent[] = [];

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  constructor(private studentService: StudentService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private teacherService: TeacherService,
              private groupStudent: GroupStudentService) {
    this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get('id');
        console.log(id);
        this.teacherService.getAll().subscribe(data => {
          this.giaoVien = data;
          this.groupStudent.getAll().subscribe(group => {
            this.groups = group;
            this.studentService.findById(parseInt(id)).subscribe(dataSV => {
              this.sinhVien = dataSV;
              console.log(dataSV);
              this.editForm.patchValue(this.sinhVien);
            });
          });
        });
      }, error => {
      }
      , () => {
      });
    this.editForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nameStudent: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      nameTopic: new FormControl('', [Validators.required]),
      teacher: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.regex)]),
      group: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    console.log(this.editForm.controls.id);
  }

  onSave() {
    console.log(this.editForm.value);
    this.studentService.editSave(this.editForm.value).subscribe(next => {
      alert('Luu lai chinh sua thanh cong');
      this.router.navigateByUrl('/list');
    });
  }
}
