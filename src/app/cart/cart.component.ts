import { Component, OnInit } from '@angular/core';
import { NavigationToggleService } from '../home/navigation-toggle.service';
import { Cart } from '../shared/cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private navigationToggleService: NavigationToggleService, private cartService: CartService) { }

  cart:Cart[]

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.cartChanged.subscribe((cart:Cart[]) => {
      this.cart=cart;
    })
  }

  closeCart(){
    this.navigationToggleService.cartToggle()
  }

}
