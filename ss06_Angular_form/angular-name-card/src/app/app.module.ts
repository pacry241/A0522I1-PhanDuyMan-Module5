import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './exercise/reactive-form/reactive-form.component';
import { SignFormComponent } from './exercise/sign-form/sign-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ReactiveFormComponent,
    SignFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
