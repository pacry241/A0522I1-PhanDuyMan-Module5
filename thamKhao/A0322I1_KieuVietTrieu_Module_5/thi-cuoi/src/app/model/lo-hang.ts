import {SanPham} from './san-pham';

export interface LoHang {
  id?: string;
  sanPham?: SanPham;
  soLuong?: number;
  ngayNhapHang?: Date;
  ngaySanXuat?: Date;
  ngayHetHan?: Date;
}
