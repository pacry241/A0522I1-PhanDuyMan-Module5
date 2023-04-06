import { Injectable } from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionarys: Dictionary[] = [
    {id: '1', english: 'hello', viennamese: 'xin chao'},
    {id: '2', english: 'go back', viennamese: 'quay lai'},
    {id: '3', english: 'you', viennamese: 'ban'},
    {id: '4', english: 'what', viennamese: 'cai gi'},
    {id: '5', english: 'mother', viennamese: 'me'},
    {id: '6', english: 'brother', viennamese: 'anh trai'}
  ];
  private str: Dictionary;
  constructor() { }
  findDictionaryby(id: string) {
    return this.dictionarys.find(item => item.id === id);
  }
}
