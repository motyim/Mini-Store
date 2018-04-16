import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onsearch  = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSearch(event){
    //value wittern in text field    
    this.onsearch.emit(event.target.value);
  }
}
