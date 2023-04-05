import {Level} from "./level";
import {LocationEmployee} from "./locationEmployee";
import {Part} from "./part";

export interface Employee {
  id?: number,
  image: string,
  nameEmployee: string,
  dateOfBirth: string,
  idCard: string,
  salary: number,
  phone: string,
  email: string,
  address: string,
  level: Level;
  location: LocationEmployee,
  part: Part
}
