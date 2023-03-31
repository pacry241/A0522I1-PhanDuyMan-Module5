import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerDetailComponent} from "./component/customer/customer-detail/customer-detail.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {NarbavComponent} from "./component/narbav/narbav.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";


const routes: Routes = [
  {path:'customer-list', component: CustomerListComponent},
  {path:'detail/:id', component: CustomerDetailComponent},
  {path:'customer/create', component:CustomerCreateComponent},
  {path: 'edit/:id', component: CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
