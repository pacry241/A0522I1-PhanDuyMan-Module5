import {RentType} from "./rent-type";

export interface Facility {
  id?: number;
  nameFacility: string;
  acreage: number;
  floor: number;
  renter: number;
  status: string;
  expense: number;
  rentType: RentType
  }
