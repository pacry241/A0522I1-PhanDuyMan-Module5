import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  hex = '#a1fc03';
  constructor() { }

  ngOnInit(): void {
  }
  colors = ['#a1fc03', '#fcf003', '#fc0703', '#03fcfc', '#e303fc'];
  changeHex(hex) {
    this.hex = hex;
  }

}
