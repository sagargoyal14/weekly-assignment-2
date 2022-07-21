import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  items:{name:string, imagePath:string, description:string, price:number}[] = [
    {
      name:"Burger",
      description:"Burger is very tasty",
      imagePath:"../../assets/images/bon-vivant-qom5MPOER-I-unsplash 10.svg",
      price:1000
    },
    {
      name:"Burger",
      description:"Burger is very tasty i have tried here and you can order this online offline",
      imagePath:"../../assets/images/bon-vivant-qom5MPOER-I-unsplash 10.svg",
      price:1000
    },
    {
      name:"Burger",
      description:"Burger is very tasty",
      imagePath:"../../assets/images/bon-vivant-qom5MPOER-I-unsplash 10.svg",
      price:1000
    }
  ]

  ngOnInit(): void {
  }

}
