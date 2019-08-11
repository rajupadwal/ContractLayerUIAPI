import { Component } from '@angular/core';
import { LoaderService } from './app.loading.service';
import { Subject } from "rxjs";
import { OnInit } from "@angular/core";
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<div *ngIf="isLoading"  class="loading">{{loaderService.isLoading}}</div> <router-outlet></router-outlet>'
})
export class AppComponent implements OnInit  {
  isLoading: boolean=false;
  constructor(private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderService.isLoading.subscribe((response) => {
      setTimeout(() => { this.isLoading = response; },500)
    });
  }

  
}
