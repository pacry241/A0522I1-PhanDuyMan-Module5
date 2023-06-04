import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  danhSachSinhVien: Student[] = [];
  p: number;
  sinhVien: Student;

  constructor(private sinhvienService: StudentService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sinhvienService.getAll().subscribe(data => {
      console.log(data);
      this.danhSachSinhVien = data;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.sinhvienService.getAll().subscribe(next => {
      console.log(next);
      this.danhSachSinhVien = next;
    });
  }

  remove(id: number) {
    if (confirm('Ban có muốn xóa không ?').valueOf()) {
      this.sinhvienService.delete(id).subscribe(next => {
        alert('Đã xóa thành công');
        this.getAll();
      });
    } else {
      this.getAll();

    }
    // this.sinhvienService.delete(id).subscribe(next => {
    //   alert('Đã xóa thành công');
    //   this.getAll();
    // });
  }

  deleteInfo(sinhVien: Student) {
    this.sinhVien = sinhVien;
    console.log(this.sinhVien);
  }
}
