import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {StudentComponent} from "./student.component";

const routes: Routes = [
  {
    path: '', component: StudentComponent, children: [
      {path: '', component: StudentListComponent},
      {path: 'create', component: StudentCreateComponent},
      {path: 'detail/:id', component: StudentInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
