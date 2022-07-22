import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  user:User=null

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.authService.currentUserChanged.subscribe((user:User)=>{
      this.user = user;
    })
  }

}
