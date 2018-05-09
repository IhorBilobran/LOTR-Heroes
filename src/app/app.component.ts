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
	public volume: number = 1.0;
	public searchValue: string = '';

	constructor(private HeroListService: HeroListService){
		this.list = HeroListService.list;
	}

	setCurentHero(obj: object): any {
		this.currentHero = obj;
		this.check = false;
	}

	toggleVolume(icon: any, audio: any) {
		switch(icon._elementRef.nativeElement.innerText) {
			case 'volume_up': this.volume = 0.0; break;
			case 'volume_off': this.volume = 1.0; break;
		}
		return audio.volume = this.volume;
	}

	get volumeCheck() {
		if (this.volume < 1) {
			return 'volume_off';
		}
		return 'volume_up';
	}

	// fix here
	search(name: string): boolean {
		if (~name.toLowerCase().indexOf(this.searchValue)) {
			return true;
		}
		return false;
	}
}
