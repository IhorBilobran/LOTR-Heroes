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
	public check: boolean = true;	
	public searchValue: string = '';
	public sideNavDis: boolean = false;

	constructor(private HeroListService: HeroListService){
		this.list = HeroListService.list;
	}

	toggle($event) {
		this.sideNavDis = $event;
	}

	setCurentHero(hero): any {
		this.currentHero = hero;
		this.check = false;
	}

	setValue($event) {
		this.searchValue = $event;
	}


}
