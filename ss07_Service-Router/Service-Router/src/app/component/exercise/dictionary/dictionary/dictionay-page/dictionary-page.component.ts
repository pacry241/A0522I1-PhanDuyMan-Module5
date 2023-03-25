import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Dictionary} from "../../model/dictionary";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dictionarys: Dictionary[]=[];
  constructor(private dictionaryService: DictionaryService) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  getAll(){
this.dictionarys = this.dictionaryService.getAll()  }
}
