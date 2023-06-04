import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SinhvienComponent} from './sinhvien/sinhvien.component';
import {SinhvienEditComponent} from './component/sinhvien-edit/sinhvien-edit.component';
import {CreateStudentComponent} from './component/create-student/create-student.component';


const routes: Routes = [
  {path: 'list', component: SinhvienComponent},
  {path: 'edit/:id', component: SinhvienEditComponent},
  {path: 'create', component: CreateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
