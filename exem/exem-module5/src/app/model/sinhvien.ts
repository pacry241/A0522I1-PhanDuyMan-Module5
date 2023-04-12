import {Giaovien} from './giaovien';
import {Nhom} from './nhom';

export interface Sinhvien {
  id?: number;
  tenSV: string;
  tenNhom: Nhom;
  tenDeTai: string;
  GVHD: Giaovien;
  email: string;
  sdt: string;
}
