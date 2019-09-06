import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-datewise-farmerinward',
  templateUrl: './datewise-farmerinward.print.component.html',
  styleUrls: ['./datewise-farmerinward.print.component.css']
})
export class DatewiseFarmerInwardPrintComponent implements OnInit {
  DatewiseFarmerInwardDetailsList: any = [];

  ngOnInit() {
    this.DatewiseFarmerInwardDetailsList = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private printService: PrintService) {
  }
}
export class DatewiseFarmerInwardDetail {
  CustomerName: string;
  TransactionDate: Date = new Date();
  PlanName: string;
  ProductName: string;
  ProductTypeUnit: string;
  Quantity: number;
}

