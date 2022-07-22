import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {

  cartSize:number=0;

  constructor(private cartService: CartService, private authService: AuthService) { 
    this.cartSize = cartService.getCartSize();
    this.cartService.cartSizeChanged.subscribe((cartSize:number)=>{
      this.cartSize = cartSize;
    })
  }

  logout(){
    
    if(window.confirm("Are you sure you want to logout?")){
      this.authService.userLogOut();
    }

  }

  ngOnInit(): void {
  }

}
