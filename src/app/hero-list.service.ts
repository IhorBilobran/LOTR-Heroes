import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero'

import 'rxjs/add/operator/map'

@Injectable()
export class HeroListService {

  constructor(private http: HttpClient ) { }

  get list() {
    return this.http.get<Hero[]>('assets/hero-list.json')
    	.map((element) => element
    		 .sort( (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) )
					);
  }
}
