import { EventEmitter } from "@angular/core";

export  class NavigationToggleService{

    cartDisplayChanged = new EventEmitter<boolean>();

    cartDisplay:boolean=false;

    cartToggle(){
        this.cartDisplay=!this.cartDisplay;
        this.cartDisplayChanged.emit(this.cartDisplay);
    }

}