import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./component/employee/employee-create/employee-create.component";
import {EmployeeEditComponent} from "./component/employee/employee-edit/employee-edit.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityDetailComponent} from "./component/facility/facility-detail/facility-detail.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {HomeComponent} from "./component/home/home/home.component";
import {ContractCreateComponent} from "./component/contract/contract-create/contract-create.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path: "customer/list", component: CustomerListComponent
  },
  {
    path: "customer/create", component: CustomerCreateComponent
  } ,
  {
    path: "customer/edit/:id",component: CustomerEditComponent
  },
  //Employee
  {
    path: "employee/list",component: EmployeeListComponent

  },
  {
    path: "employee/create", component: EmployeeCreateComponent
  },
  {
    path: "employee/edit/:id",component: EmployeeEditComponent
  },
  //facility
  {
    path: "facility/list",component: FacilityListComponent
  },
  {
    path: "facility/create",component: FacilityCreateComponent
  },{
    path: "facility/detail/:id",component: FacilityDetailComponent
  },
  {
    path: "facility/edit/:id",component: FacilityEditComponent
  },
  // contract
  {
    path:"contract/list",component: ContractListComponent
  },
  {
    path: "contract/create",component: ContractCreateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
