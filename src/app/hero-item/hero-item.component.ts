import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.sass']
})
export class HeroItemComponent implements OnInit {

	@Input() searchValue: string;
	@Input() hero: any;
	@Output() currentHeroEvent = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  setCurentHero(obj) {
  	this.currentHeroEvent.emit(obj);
  }

	search(name: string): boolean {
		if (~name.toLowerCase().indexOf(this.searchValue)) {
			return true;
		}
		return false;
	}

}
