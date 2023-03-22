import { Component, OnInit } from '@angular/core';
import {UserSign} from "./user-sign";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  user: UserSign[]=[];
  signForm: FormGroup;
  constructor() {
    this.signForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }

  addNew() {
    console.log(this.signForm.valid)
    if (this.signForm.valid){
      this.user.push(this.signForm.value)
      console.log(this.user);
    };
  }
}
