import { EventEmitter } from "@angular/core";
import { User } from "../shared/user.model";

export  class AuthService{

    currentUserChanged = new EventEmitter<User>();

    private users:User[]=[];
    private currentUser:User = null;

    userLogin(email:string, password:string){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].email === email && this.users[i].password === password){
                this.currentUser = this.users[i];
                this.currentUserChanged.emit(this.users[i]);
                break;
            }
        }
    }

    userSignUp(user:User){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i].email === user.email){
                return;
            }
        }
        this.users.push(user);
        this.currentUser = user;
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