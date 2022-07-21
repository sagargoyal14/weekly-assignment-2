import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Cart } from 'src/app/shared/cart.mode';
import { Dish } from 'src/app/shared/dish.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() dish:Dish;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addDish(){
    this.cartService.addToCart(new Cart(this.dish, 1));
  }

}
