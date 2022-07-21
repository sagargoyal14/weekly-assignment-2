import { Cart } from "../shared/cart.mode";

export  class CartService{

    private cart:Cart[];

    addToCart(cart:Cart){
        this.cart.push(cart);
    }

    getCart(){
        return this.cart.slice();
    }

    getCartSize(){
        return this.cart.length;
    }

}