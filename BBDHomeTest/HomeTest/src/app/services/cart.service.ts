import { Injectable } from '@angular/core';
import { CartProduct } from '../classes/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts = [];

  addToCart(product:CartProduct){

    console.log("in service");
    console.log(product);
    let obj = {
      "name": product.name,
      "description": product.description,
      "unitPrice": product.unitPrice,
      "quantity": product.quantity }
    this.cartProducts.push(obj);
    console.log(this.cartProducts);
  }

  getProducts():CartProduct[]{
    let prodsArr:CartProduct[] = [];
    this.cartProducts.forEach(element => {
      prodsArr.push(new CartProduct(element.name, element.description, element.unitPrice, element.quantity));
    });
    return prodsArr;
  }

  calculateTotal():number{
    let total:number = 0;
    this.cartProducts.forEach(element => {
      total += element.unitPrice * element.quantity;
    });
    console.log(total);
    return total;
  }

  

  constructor() { }
}
