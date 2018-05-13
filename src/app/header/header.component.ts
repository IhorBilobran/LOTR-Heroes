import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	
	@Input() sideNavDis: boolean;
	@Output() toggleEvent = new EventEmitter();

	public volume: number = 1.0;

  constructor() { }

  ngOnInit() {
  }

  toggleNav(){
  	this.toggleEvent.emit(this.sideNavDis = !this.sideNavDis);
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

}
