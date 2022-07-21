import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/shared/dish.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() dish:Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
