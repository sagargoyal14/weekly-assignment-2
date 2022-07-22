import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string="";
  email:string="";
  password:string="";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.userSignUp(new User(this.name, this.email, this.password));
  }

}
