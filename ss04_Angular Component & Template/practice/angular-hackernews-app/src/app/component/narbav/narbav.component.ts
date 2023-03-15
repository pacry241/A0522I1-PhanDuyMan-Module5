import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-narbav',
  templateUrl: './narbav.component.html',
  styleUrls: ['./narbav.component.css']
})
export class NarbavComponent implements OnInit {

  narbav: string="";
  constructor() { }

  ngOnInit(): void {
  }

  changHref(value: string) {
    if (value == 'home'){
      this.narbav='home';
    };
    if (value =='add-article'){
      this.narbav= value;
    }
  }
}
