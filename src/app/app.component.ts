import { Component } from '@angular/core';

import { HeroListService } from './hero-list.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})

export class AppComponent {
	public list;
	public currentHero;
	constructor(private HeroListService: HeroListService){
		this.list = HeroListService.list;
	}

	setCurentHero(obj) {
		console.log(obj)
		return this.currentHero = obj;
	}
}
