import { EventEmitter } from "@angular/core";
import { Cart } from "../shared/cart.model";

export  class CartService{

    cartSizeChanged = new EventEmitter<number>();
    cartChanged = new EventEmitter<Cart[]>();

    private cart:Cart[]=[];

    addToCart(cart:Cart){
        this.cart.push(cart);
        this.cartSizeChanged.emit(this.cart.length);
        this.cartChanged.emit(this.cart);
        console.log(this.cart);
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