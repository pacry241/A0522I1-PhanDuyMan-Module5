import {Component, OnInit} from '@angular/core';
import {Sinhvien} from '../model/sinhvien';
import {SinhvienService} from '../service/sinhvien.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  danhSachSinhVien: Sinhvien[] = [];
  p: number;
  sinhVien: Sinhvien;

  constructor(private sinhvienService: SinhvienService,
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

  deleteInfo(sinhVien: Sinhvien) {
    this.sinhVien = sinhVien;
    console.log(this.sinhVien);
  }
}
