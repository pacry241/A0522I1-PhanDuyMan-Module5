import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Register} from "./register";
import {invalid} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  user: Register[]=[];
  reactiveForm : FormGroup
  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)],[]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6),this.testPassword],[]),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required,Validators.min(18),this.age],),
      gender: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required, Validators.pattern("^\\+84\\d{9,10}$")],[])
    }, this.testPassword)
  }
  regex: string = "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$"
  ngOnInit(): void {
  }
   age(control: AbstractControl): any{
     console.log(control.value)
     if (control.value === 20){
       return{notage: true}
     }
   }
  testPassword(control: AbstractControl): any {
    if (!control.value.confirmPassword === control.value.password){
      return {confirmpassword: true}
    }
    return false;

  }
  addNew(): void {
    console.log(this.reactiveForm);
    if (this.reactiveForm.valid){
           this.user.push(this.reactiveForm.value);
    }
    console.log(this.user);
  }
}
