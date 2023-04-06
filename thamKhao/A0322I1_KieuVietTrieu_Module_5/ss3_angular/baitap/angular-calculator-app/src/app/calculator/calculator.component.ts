import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  strInput : string='';

  input(value: string)
  {
    this.strInput = this.strInput + value;
  }

  cal()
  {
    this.strInput = eval(this.strInput);
  }
  ngOnInit(): void {
  }

}
