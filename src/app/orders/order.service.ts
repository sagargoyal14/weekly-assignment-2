import { EventEmitter } from "@angular/core";
import { Order } from "../shared/order.model";

export  class OrderService{

    ordersSizeChanged = new EventEmitter<number>();

    private orders:Order[]=[];

    addToOrders(order:Order){
        this.orders.push(order);
        this.ordersSizeChanged.emit(this.orders.length);
    }

    getOrders(){
        return this.orders.slice();
    }

    getOrdersSize(){
        return this.orders.length;
    }

    clearOrders(){
        this.orders = [];
    }

}