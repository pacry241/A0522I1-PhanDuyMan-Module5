import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerDetailComponent} from "./component/customer/customer-detail/customer-detail.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {NarbavComponent} from "./component/narbav/narbav.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";
import {EmployeeDetailComponent} from "./component/employee/employee-detail/employee-detail.component";
import {EmployeeEditComponent} from "./component/employee/employee-edit/employee-edit.component";


const routes: Routes = [
  {path:'customer-list', component: CustomerListComponent},
  {path:'detail/:id', component: CustomerDetailComponent},
  {path:'customer/create', component:CustomerCreateComponent},
  {path: 'edit/:id', component: CustomerEditComponent},
  {path: 'facilities', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit/:id', component: FacilityEditComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee/detail/:id', component: EmployeeDetailComponent},
  {path:'employee/edit/:id', component:EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
