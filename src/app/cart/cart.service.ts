import { EventEmitter } from "@angular/core";
import { Cart } from "../shared/cart.mode";

export  class CartService{

    cartSizeChanged = new EventEmitter<number>();

    private cart:Cart[]=[];

    addToCart(cart:Cart){
        this.cart.push(cart);
        this.cartSizeChanged.emit(this.cart.length);
    }

    getCart(){
        return this.cart.slice();
    }

    getCartSize(){
        return this.cart.length;
    }

    clearCart(){
        this.cart = [];
    }

}