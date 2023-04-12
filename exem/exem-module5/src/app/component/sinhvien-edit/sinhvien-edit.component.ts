import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sinhvien} from '../../model/sinhvien';
import {Giaovien} from '../../model/giaovien';
import {SinhvienService} from '../../service/sinhvien.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GiaovienService} from '../../service/giaovien.service';

@Component({
  selector: 'app-sinhvien-edit',
  templateUrl: './sinhvien-edit.component.html',
  styleUrls: ['./sinhvien-edit.component.css']
})
export class SinhvienEditComponent implements OnInit {
  editForm: FormGroup;
  sinhVien: Sinhvien;
  giaoVien: Giaovien[] = [];
  regex = '^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7,9}$';

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  constructor(private sinhvienService: SinhvienService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private giaovienService: GiaovienService) {
    this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get('id');
        console.log(id);
        this.giaovienService.getAll().subscribe(data => {
          this.giaoVien = data;
          this.sinhvienService.findById(parseInt(id)).subscribe(dataSV => {
            this.sinhVien = dataSV;
            console.log(dataSV);
            this.editForm.patchValue(this.sinhVien);
          });
        });
      }, error => {
      }
      , () => {
      });
    this.editForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      tenSV: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      tenDeTai: new FormControl('', [Validators.required]),
      GVHD: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      sdt: new FormControl('', [Validators.required, Validators.pattern(this.regex)])
    });
  }

  ngOnInit(): void {
    console.log(this.editForm.controls.id);
  }

  onSave() {
    console.log(this.editForm.value);
    this.sinhvienService.editSave(this.editForm.value).subscribe(next => {
      alert('Luu lai chinh sua thanh cong');
      this.router.navigateByUrl('/list');
    });
  }
}
