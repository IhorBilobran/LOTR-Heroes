import { Component } from '@angular/core';

import { HeroListService } from './hero-list.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

export class AppComponent {
	public list;
	public hero;
	constructor(private HeroListService: HeroListService){
		this.list = HeroListService.list;
	}
	
	l(obj) {
		return this.hero = obj;
	}
}
