 
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('Token');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return (token && token == undefined) || token == null;
  }
  public getUserRoles():string {
    return localStorage.getItem('UsereRoles');
    //return "invoice,PurchaseBill";
  }
}


