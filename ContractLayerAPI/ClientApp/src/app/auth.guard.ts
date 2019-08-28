import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private auth: AuthService,
    private myRoute: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let currentRoute = next.url[0].path;
    let viewPermission:string = this.auth.getUserRoles();

    if (viewPermission.indexOf(currentRoute )> 0) {
      return true;
    }
    else {
      window.alert('You do not have permission to view this page!');
      return false;
    }
  }
}
