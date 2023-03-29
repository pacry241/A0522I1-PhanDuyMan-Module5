import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentInfoComponent } from './component/student/student-info/student-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StudentCreateComponent } from './component/student/student-create/student-create.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentInfoComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
