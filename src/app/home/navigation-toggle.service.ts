import { EventEmitter } from "@angular/core";

export  class NavigationToggleService{

    cartDisplayChanged = new EventEmitter<boolean>();
    orderDisplayChanged = new EventEmitter<boolean>();
    itemDisplayChanged = new EventEmitter<boolean>();

    cartDisplay:boolean=false;
    orderDisplay:boolean=false;
    itemDisplay:boolean=true;

    cartToggle(){
        this.cartDisplay=!this.cartDisplay;
        this.cartDisplayChanged.emit(this.cartDisplay);
    }

    orderToggle(){
        this.orderDisplay=!this.orderDisplay;
        this.orderDisplayChanged.emit(this.orderDisplay);
    }

    itemToggle(){
        this.itemDisplay=!this.itemDisplay;
        console.log(this.itemDisplay);
        this.itemDisplayChanged.emit(this.itemDisplay);
    }

}