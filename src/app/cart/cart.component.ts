import { Component, OnInit } from '@angular/core';
import { NavigationToggleService } from '../home/navigation-toggle.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private navigationToggleService: NavigationToggleService) { }

  ngOnInit(): void {
  }

  closeCart(){
    this.navigationToggleService.cartToggle()
  }

}
