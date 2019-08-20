import { Component } from '@angular/core';
import { LoaderService } from './app.loading.service';
import { Subject } from "rxjs";
import { OnInit } from "@angular/core";
import { PrintService } from './printing/print.service';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template:'<div style="height:200px;width:900px;"></div>'
})
export class AppMainComponent implements OnInit  {
 
  constructor(private loaderService: LoaderService, public printService: PrintService) {

  }
  title = 'angular-print-service';

  ngOnInit() {
    
  }

  
}
