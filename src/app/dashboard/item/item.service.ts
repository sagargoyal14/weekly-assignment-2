import { EventEmitter } from "@angular/core";
import { Dish } from "src/app/shared/dish.model";
export  class ItemService{

    // cartSizeChanged = new EventEmitter<number>();

    private dish:Dish;

    addDish(dish:Dish){
        this.dish = dish;
    }

    getDish(){
        return this.dish;
    }

    clearDish(){
        this.dish = null;
    }

}