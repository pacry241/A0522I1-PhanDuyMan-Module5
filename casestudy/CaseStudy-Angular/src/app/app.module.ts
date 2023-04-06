import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './component/customer/customer-detail/customer-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { NarbavComponent } from './component/narbav/narbav.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { FooterComponent } from './component/footer/footer.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './component/employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './component/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './component/employee/employee-edit/employee-edit.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    NarbavComponent,
    CustomerEditComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    FooterComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    ContractListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
      NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
