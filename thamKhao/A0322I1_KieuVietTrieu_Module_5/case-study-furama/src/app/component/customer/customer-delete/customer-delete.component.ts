// import {Component, Input, OnInit} from '@angular/core';
// import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
// import {CustomerService} from "../../../service/customer/customer.service";
//
// @Component({
//   selector: 'app-customer-delete',
//   templateUrl: './customer-delete.component.html',
//   styleUrls: ['./customer-delete.component.css']
// })
// export class CustomerDeleteComponent implements OnInit {
//
//   @Input() idDelete: number;
//   @Input() nameDelete: string;
//
//   constructor(private activeModal: NgbModal,
//               private customerService: CustomerService) {
//   }
//
//   ngOnInit(): void {
//   }
//
//   close() {
//     this.activeModal.dismissAll();
//   }
//
//   deleteCustomer() {
//     this.customerService.deleteById(this.idDelete).subscribe(next => {
//         alert("Xóa thàng công");
//         this.activeModal.dismissAll();
//
//       }, error => {
//         console.log("Xóa không thành công")
//       },
//       () => {
//       })
//   }
// }
