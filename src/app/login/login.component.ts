import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';

import { from } from 'rxjs';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};
  private loggedIn:boolean;
  constructor(private userService: UserserviceService,private authService:AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.loggedIn=(user!=null);
    })
  }
  saveUser(user:any,userForm: any){
    this.userService.saveUser(user).subscribe((response) => {
        if(response){
          console.log(response);
          // userForm.reset();
        }
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
