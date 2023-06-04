import {Teacher} from './teacher';
import {GroupStudent} from './groupStudent';

export interface Student {
  id?: number;
  nameStudent: string;
  group: GroupStudent;
  nameTopic: string;
  teacher: Teacher;
  email: string;
  phoneNumber: string;
}
