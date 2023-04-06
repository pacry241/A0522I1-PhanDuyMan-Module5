import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from '../../service/dictionaryService.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Dictionary} from '../../model/dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Dictionary;
  constructor(
    private dictionaryService: DictionaryServiceService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.dictionary = this.dictionaryService.findDictionaryby(id);
    });
  }

}
