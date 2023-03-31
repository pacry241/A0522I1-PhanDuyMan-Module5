import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number,
  nameCustomer: string,
  dateOfBirth: string,
  gender: string,
  cmnd: string,
  phoneNumber: string,
  email: string,
  customerType: CustomerType,
  address: string
}
