import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-datewise-purchasereturn',
  templateUrl: './datewise-purchasereturn.print.component.html',
  styleUrls: ['./datewise-purchasereturn.print.component.css']
})
export class DatewisePurchaseReturnPrintComponent implements OnInit {
  DatewisePurchaseReturnDetailsList: any = [];

  ngOnInit() {
    this.DatewisePurchaseReturnDetailsList = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private printService: PrintService) {
  }
}
 

