import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { UserInfo } from '../models/user.info.model';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  public userName: string="";
  public userPassword: string="";
  public errorMessage: string="";
  userInfo: UserInfo = new UserInfo();
  constructor(private router: Router,private authService: AuthenticationService) { }
  

  public registerUser(): boolean {
    this.router.navigateByUrl('/register');
    return true;
  }

  public login(): boolean {
    this.router.navigateByUrl('/dashboard');
    //this.authService.login(this.userName, this.userPassword).subscribe((user:any) => {
     // if (user && user.UserId > 0) {
     //   this.router.navigateByUrl('/dashboard');
     // } else {
      //  this.errorMessage = "UserName or Password is Incorrect ! Please try again";
      //}
    //},
     // (error) => {
        this.errorMessage = "UserName or Password is Incorrect ! Please try again";
     // }
    //);
    
    return true;
  }
}
