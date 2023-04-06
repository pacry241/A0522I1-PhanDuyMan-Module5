import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home/home.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityDetailComponent } from './component/facility/facility-detail/facility-detail.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './component/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './component/employee/employee-edit/employee-edit.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityDetailComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    FacilityCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
