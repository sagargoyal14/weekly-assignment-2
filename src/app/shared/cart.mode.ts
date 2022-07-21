import { Dish } from "./dish.model";

export class Cart{
    constructor(public dish:Dish, public quantity:number){}
}