import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from "../product.service";
import { product } from '../interfaces/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  products: product[];

  //default value to search
  //input to take from container component  
  @Input() searchedKey: string;

  // output the id of hoverd item 
  @Output() onHover = new EventEmitter<number>();

  // inject product service on this component 
  constructor(private productService: ProductService) { }


  ngOnInit() {
    //get all products 
    this.products = this.productService.getProducts();
  }

  /**
   * set hover item id for hover or 0 for exist 
   * @param id of hoverd item 
   */
  setHover(id: number) {
    this.onHover.emit(id);
  }


}
