import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";
  import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Dictionary[] = [{
    word: 'Hi',
    mean: 'Xin chao',
  },
    {
      word: 'Goodbye',
      mean: 'Tam biet',
    },
    {
      word: 'Dictionary',
      mean: 'tu dien',
    }
  ];

  constructor() {
  }

  getAll(): Dictionary[] {
    return this.dictionaryList;
  }

  translate(name: string): Dictionary {
    return this.dictionaryList.filter(dictionary => dictionary.word === name)[0];
  }
}
