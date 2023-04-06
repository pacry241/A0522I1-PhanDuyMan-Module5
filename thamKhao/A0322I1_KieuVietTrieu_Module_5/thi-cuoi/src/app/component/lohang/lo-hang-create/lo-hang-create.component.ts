import { Component, OnInit } from '@angular/core';
import {SanPham} from '../../../model/san-pham';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoHangService} from '../../../service/lo-hang.service';
import {SanPhamService} from '../../../service/san-pham.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lo-hang-create',
  templateUrl: './lo-hang-create.component.html',
  styleUrls: ['./lo-hang-create.component.css']
})
export class LoHangCreateComponent implements OnInit {

  regexID = /^LH-\d{4}$/;
  sanPhams: SanPham[] = [];
  formGroup = new FormGroup(
    {
      id : new FormControl('', [Validators.required, Validators.pattern(this.regexID)]),
      sanPham : new FormControl('', [Validators.required]),
      soLuong : new FormControl('', [Validators.required, Validators.min(1)]),
      ngayNhapHang : new FormControl('', [Validators.required]),
      ngaySanXuat : new FormControl('', [Validators.required]),
      ngayHetHan : new FormControl('', [Validators.required]),
    }
  );

  constructor(private loHangService: LoHangService, private sanPhamService: SanPhamService, private route: Router) {
    this.sanPhamService.getAll().subscribe(next => {
      console.log(next);
      this.sanPhams = next;
    }, error => {
      console.log('Không tìm thấy danh sách san pham!');
    });
  }

  ngOnInit(): void {
  }

  saveCreate() {
    this.loHangService.addLoHang(this.formGroup.value).subscribe(value => {
      this.route.navigateByUrl('/list').then(result => {
        this.formGroup.reset();
      });
    });
  }

}

