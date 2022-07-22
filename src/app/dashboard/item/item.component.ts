import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { NavigationToggleService } from 'src/app/home/navigation-toggle.service';
import { Cart } from 'src/app/shared/cart.model';
import { Dish } from 'src/app/shared/dish.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() dish:Dish;

  constructor(private cartService:CartService, private itemService: ItemService, private navigationToggleService: NavigationToggleService) { }

  ngOnInit(): void {
  }

  showItem(){
    this.navigationToggleService.itemToggle()
    this.itemService.addDish(this.dish);
  }

}
