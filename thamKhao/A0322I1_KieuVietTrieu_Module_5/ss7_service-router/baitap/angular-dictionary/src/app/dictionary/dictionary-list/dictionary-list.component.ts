import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../../model/dictionary';
import {DictionaryServiceService} from '../../service/dictionaryService.service';

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {
  dictionarys: Dictionary[] = [];

  constructor(private dictionaryService: DictionaryServiceService) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.dictionarys = this.dictionaryService.dictionarys;
  }
}
