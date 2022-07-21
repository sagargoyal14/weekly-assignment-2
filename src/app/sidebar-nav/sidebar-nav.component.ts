import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {

  cartSize:number=0;

  constructor(private cartService: CartService) { 
    this.cartSize = cartService.getCartSize();
    this.cartService.cartSizeChanged.subscribe((cartSize:number)=>{
      this.cartSize = cartSize;
    })
  }

  ngOnInit(): void {
  }

}
