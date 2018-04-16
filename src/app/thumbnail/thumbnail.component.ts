import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from "../product.service";
import { product } from '../interfaces/product';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  // id of hovered item
  @Input() hoverItemId: number;
  
  showenProduct : product ;
  constructor(private productService:ProductService) { 
    
  }

  ngOnInit() {
    this.showenProduct = this.productService.getProduct(this.hoverItemId);
  }

  /**
   * handel change of hovered item .
   */
  ngOnChanges(){
    this.showenProduct = this.productService.getProduct(this.hoverItemId);
  }

  add() : void{
    this.productService.add(this.showenProduct.id);
  }

  remove() : void{
    this.productService.remove(this.showenProduct.id);
  }

}
