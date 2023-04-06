import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,,Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
    country: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required,Validators.min(18)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required])
  })
  countryList: country[] = [
    new country('1','Ha Noi'),
    new country('2','Quang Nam'),
    new country('3','Da Nang')
  ];

  constructor() { }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }




  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }
}

export class register {
  email:string;
  password:string;
  confirmPassword:string;
  country:string;
  age:number;
  gender:string;
  phone:string;


  constructor(email: string, password: string, confirmPassword: string, country: string, age: number, gender: string,
              phone: string) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.country = country;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
  }


}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

