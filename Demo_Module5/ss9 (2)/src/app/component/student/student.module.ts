import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StudentComponent } from './student.component';
import {StudentService} from "../../service/student.service";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    StudentListComponent,
    StudentInfoComponent,
    StudentCreateComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
