import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

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
