import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hoverItemId : number ;
  constructor(){}

   /**
   * set hover item from event  
   * @param id of hoverd item 
   */
  setHover(id: number) {
    this.hoverItemId = id;
  }
}
