import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {	

	@Output() searchEvent = new EventEmitter<string>();

	public value: string = '';

  constructor() { }

  ngOnInit() {
  }

  searchValue() {
  	this.searchEvent.emit(this.value);
  }

}
