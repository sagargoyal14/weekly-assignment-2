import { Cart } from "./cart.model";


export class Order{
    constructor(public orders:Cart[], public quantity:number){}
}