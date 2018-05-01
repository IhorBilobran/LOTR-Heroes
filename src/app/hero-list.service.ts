import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero'

@Injectable()
export class HeroListService {

  constructor(private http: HttpClient ) { }

  get carList() {
    return this.http.get<Hero[]>('assets/hero-list.json');
  }
}
