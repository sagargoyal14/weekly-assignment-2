import { Component, OnInit } from '@angular/core';
import { NavigationToggleService } from './navigation-toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navigationToggleService: NavigationToggleService) { }

  cartDisplay:boolean = false;
  orderDisplay:boolean = false;


  ngOnInit(): void {
    this.navigationToggleService.cartDisplayChanged.subscribe((cartDisplay:boolean)=>{
      this.cartDisplay = cartDisplay;
    })
    this.navigationToggleService.orderDisplayChanged.subscribe((orderDisplay:boolean)=>{
      this.orderDisplay = orderDisplay;
    })
  }



}
