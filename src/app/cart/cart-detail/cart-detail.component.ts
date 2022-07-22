import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/cart.model';
import { Dish } from 'src/app/shared/dish.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Input() dish:Cart;
  constructor() { }

  ngOnInit(): void {
  }

}
