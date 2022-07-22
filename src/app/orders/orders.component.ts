import { Component, OnInit } from '@angular/core';
import { NavigationToggleService } from '../home/navigation-toggle.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private navigationToggleService: NavigationToggleService) { }

  ngOnInit(): void {
  }

  closeOrders(){
    this.navigationToggleService.orderToggle();
  }

}
