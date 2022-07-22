import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { NavigationToggleService } from 'src/app/home/navigation-toggle.service';
import { Cart } from 'src/app/shared/cart.model';
import { Dish } from 'src/app/shared/dish.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  quantity:number=0;

  dish:Dish = new Dish(
    "Burger",
    "../../assets/images/dish-2.svg",
    "Burger is very tasty i have tried here and you can order this online offline",
    1000
  )

  constructor(private cartService : CartService, private navigationToggleService: NavigationToggleService) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.quantity++;
  }

  onDecrement(){
    if(this.quantity >0)this.quantity--;
  }

  addToCart(){
    this.cartService.addToCart(new Cart(this.dish, this.quantity))
  }

  closeItem(){
    this.navigationToggleService.itemToggle()
  }

}
