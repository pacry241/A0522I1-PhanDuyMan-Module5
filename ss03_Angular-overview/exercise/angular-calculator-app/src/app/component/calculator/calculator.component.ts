import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  clearScreen() {
    this.result="";
  }

  display(value: string) {
    if (value == "="){
      this.result= eval(this.result);
    }else {
      this.result+=value;
    }
  }
}
