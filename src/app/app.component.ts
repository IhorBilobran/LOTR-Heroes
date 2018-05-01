import { Component } from '@angular/core';

import { HeroListService } from './hero-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private HeroListService: HeroListService){
  }
  show(){
    console.log(JSON.stringify(this.HeroListService.carList, null, 2))
  }
}
