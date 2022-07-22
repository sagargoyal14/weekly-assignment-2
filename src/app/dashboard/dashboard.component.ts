import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Dish } from '../shared/dish.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  dishes:Dish[] = [
    new Dish(
      "Burger",
      "../../assets/images/dish-1.svg",
      "Burger is very tasty",
      1000
    ),
    new Dish(
      "Burger",
      "../../assets/images/dish-2.svg",
      "Burger is very tasty i have tried here and you can order this online offline",
      1000
    ),
    new Dish(
      "Burger",
      "../../assets/images/dish-3.svg",
      "Burger is very tasty",
      1000
    )
  ]

  userName:string=""

  ngOnInit(): void {
    this.userName=this.authService.getUser().name;
  }

}
