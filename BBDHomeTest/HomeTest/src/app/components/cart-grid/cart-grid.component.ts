import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../classes/cart-product';

@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css']
})
export class CartGridComponent implements OnInit {

  cartProducts:CartProduct[] = [];
  total:number = 0;
  showPopup:boolean = false;

  addToTable(product:CartProduct){
    console.log("addToTable in cart page component");
    console.log(product);
    this.cartSrv.addToCart(product);
    this.cartProducts = this.cartSrv.getProducts();
    this.total = this.cartSrv.calculateTotal();
    this.showPopup = false;
  }

  
  constructor( private cartSrv: CartService ) { }

  ngOnInit() {
    let initCartProd1:CartProduct = new CartProduct("Product1", "This is the description of Product1", 150, 1);
    let initCartProd2:CartProduct = new CartProduct("Product2", "This is the description of Product2", 200, 2);

    this.cartSrv.addToCart(initCartProd1);
    this.cartSrv.addToCart(initCartProd2);
    
    this.cartProducts = this.cartSrv.getProducts();

    this.total = this.cartSrv.calculateTotal();

  }

}
