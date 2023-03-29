import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from './component/student/student-list/student-list.component';
import {StudentCreateComponent} from './component/student/student-create/student-create.component';
import {StudentInfoComponent} from './component/student/student-info/student-info.component';

const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: StudentCreateComponent},
  {path: 'detail/:id', component: StudentInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
