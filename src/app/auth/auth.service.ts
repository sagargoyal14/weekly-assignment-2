import { EventEmitter } from "@angular/core";
import { User } from "../shared/user.model";

export  class AuthService{

    currentUserChanged = new EventEmitter<User>();

    private users:User[]=[];
    private currentUser:User = null;

    userLogin(){

    }

    userSignUp(user:User){
        this.users.push(user);
        this.currentUser = user;
        console.log(this.currentUser);
        this.currentUserChanged.emit(user);
    }

    getUser(){
        return this.currentUser;
    }

    userLogOut(){
        this.currentUser =null;
        this.currentUserChanged.emit(null);
    }

}