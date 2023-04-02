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

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    NarbavComponent,
    CustomerEditComponent,
    FacilityListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
