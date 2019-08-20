import { Component } from '@angular/core';
import { LoaderService } from './app.loading.service';
import { Subject } from "rxjs";
import { OnInit } from "@angular/core";
import { PrintService } from './printing/print.service';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit  {
  isLoading: boolean=false;
  constructor(private loaderService: LoaderService, public printService: PrintService) {

  }
  title = 'angular-print-service';

  ngOnInit() {
    this.loaderService.isLoading.subscribe((response) => {
      setTimeout(() => { this.isLoading = response; },500)
    });
  }


  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }
}
