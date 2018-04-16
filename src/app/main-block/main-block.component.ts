import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent implements OnInit {

  enterSearchKey : string =''; 

  // output the id of hoverd item 
  @Output() onHover = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  changeSearch(event){
    // change value of search taken from event 
    this.enterSearchKey = event;
  }

   /**
   * set hover item id for hover or -1 for exist 
   * @param id of hoverd item 
   */
  setHover(id: number) {
    this.onHover.emit(id);
  }

}
