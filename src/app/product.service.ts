import { Injectable } from '@angular/core';
import { product } from './interfaces/product';
import {TotalService} from "./total.service";

@Injectable()
export class ProductService {

  // TODO: read this value from webservice
  // table data
  private products: product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 700,
      status: false,
      imageUrl: 'http://via.placeholder.com/150x150',
      descrption: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
    },
    {
      id: 2,
      name: 'product 2',
      price: 99.35,
      status: false,
      imageUrl: 'http://via.placeholder.com/150x150',
      descrption: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
    },
    {
      id: 3,
      name: 'product 3',
      price: 62.3594,
      status: false,
      imageUrl: 'http://via.placeholder.com/150x150',
      descrption: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
    },
    {
      id: 4,
      name: 'product 4',
      price: 30.15,
      status: false,
      imageUrl: 'http://via.placeholder.com/150x150',
      descrption: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
    },
    {
      id: 5,
      name: 'product 5',
      price: 12.367,
      status: false,
      imageUrl: 'http://via.placeholder.com/150x150',
      descrption: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."
    },
    {
      id: 6,
      name: 'my awesome product',
      price: 12.367,
      status: false,
      imageUrl: 'http://via.placeholder.com/150x150',
      descrption: "My Awesome product. Nullam id dolor id nibh ultricies vehicula ut id elit."
    }
  ];



  constructor(private totalService:TotalService){
  }
  // return array of products
  getProducts(): product[] {
    return this.products;
  }

  /**
   * return product by id
   * @param id of product to get
   */
  getProduct(id: number): product {
    return this.products.find(p => p.id == id);
  }

  /**
   * calculate total price of added items
   */
  calculateTotal(){
    let total : number = 0 ;

    this.products
        .filter(p => p.status == true )   //find all add item
        .forEach(p=> total += p.price);   //loop on them to cal total
    this.totalService.changeTotal(total);
  }

  /**
   * add product to cart
   * @param id of product
   */
  add(id: number): void {
    this.getProduct(id).status = true ;
    this.calculateTotal();
  }

  /**
   * remove product from cart
   * @param id
   */
  remove(id:number) : void {
    this.getProduct(id).status = false ;
    this.calculateTotal();
  }

}
