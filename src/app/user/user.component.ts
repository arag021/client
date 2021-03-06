import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  checkemailUser:any = {};

  // signUpUser:any = {};

  theActualUser:any = {};

  // loginUser: any = {};

  theError:any;


  constructor(private authService: AuthService) { }

  checkEmail(){
    console.log(this.checkemailUser);    
    this.authService.checkemail(this.checkemailUser)
    .subscribe(
      userObjFromApi =>{ this.theActualUser = userObjFromApi});
      error=>{this.theError = error}

    console.log(this.checkemailUser);
  }

  // tryToSignUp(){
  //   console.log(this.signUpUser);    
  //   this.authService.signup(this.signUpUser)
  //   .subscribe(
  //     userObjFromApi =>{ this.theActualUser = userObjFromApi});
  //     error=>{this.theError = error}
  // }

  // tryToLogIn(){
  //   console.log(this.loginUser);
  //   this.authService.login(this.loginUser)
  //   .subscribe(res=>{this,this.theActualUser = res});
  // }

  // logMeOut(){
  //   this.authService.logout()
  //   .subscribe(res =>{this.theActualUser = {}})
  // }

  ngOnInit() {
  }

}
