import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total : number ; 
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.total = this.productService.total;
  }

  ngOnChange(){
this.total = this.productService.total;
  }
   
}
