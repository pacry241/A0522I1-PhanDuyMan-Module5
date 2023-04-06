import { Component, OnInit } from '@angular/core';
import {SanPham} from '../../../model/san-pham';
import {LoHang} from '../../../model/lo-hang';
import {FormControl, FormGroup} from '@angular/forms';
import {LoHangService} from '../../../service/lo-hang.service';
import {SanPhamService} from '../../../service/san-pham.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lo-hang-list',
  templateUrl: './lo-hang-list.component.html',
  styleUrls: ['./lo-hang-list.component.css']
})
export class LoHangListComponent implements OnInit {

  sanPhams: SanPham[] = [];
  loHangs: LoHang[] = [];
  loHangDelelte: LoHang = {
    sanPham: {
      name : '' ,
    }
  };
  config: any;
  formSearch: FormGroup;

  constructor(private loHangService: LoHangService, private sanPhamService: SanPhamService,
              private route: Router) {

  }

  ngOnInit(): void {
    this.buildList('');
    this.createFormSearch();
  }



  buildList(name: string) {
    this.sanPhamService.getAll().subscribe(next => {
      console.log(next);
      this.sanPhams = next;
    }, error => {
      console.log('Không tìm thấy danh sách san pham!');
    });

    this.loadPage();
    this.loHangService.findAllByName(name).subscribe(next => {
      console.log(next);
      this.loHangs = next;
      this.loadPage();
    }, error => {
      console.log('Lỗi!');
    });
  }


  // Phân trang
  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  loadPage() {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.loHangs.length
    };
  }

  deleteVeXe(id: string) {
    this.loHangService.deleteById(id).subscribe(next => {
      console.log(id);
      this.loHangDelelte = {
      sanPham: {
        name : '' ,
      }
      };
      document.getElementById('deleteModal').click();
      this.ngOnInit();
    }, error => {
      console.log('Xóa không thành công!');
    });
  }

  deleteInfo(loHang: LoHang) {
    this.loHangDelelte = loHang;
    console.log(loHang);
  }

  createFormSearch() {
    this.formSearch = new FormGroup({
      name: new FormControl(''),
      // nhaXe_id: new FormControl('')
    });
  }

  resetPage() {
    console.log('Reset Page');
    this.formSearch.reset();
    this.ngOnInit();
  }

  findByName() {
    this.buildList(this.formSearch.value.name);
    console.log(this.formSearch.value);
  }
}
