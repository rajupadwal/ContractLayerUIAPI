import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoaderService } from "src/app/app.loading.service";
import { map } from "rxjs/internal/operators/map";
import { finalize } from "rxjs/internal/operators/finalize";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, private loaderService: LoaderService, private router:Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`,
        'Content-Type': 'application/json' 
      }
    });

    this.loaderService.show();
    return next.handle(request).pipe(
      map(event => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.router.navigateByUrl('/', { replaceUrl: true });
          return;
        }

        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }),


      finalize(() => {
         this.loaderService.hide();
      })
    )
    
  }
   
  
}
