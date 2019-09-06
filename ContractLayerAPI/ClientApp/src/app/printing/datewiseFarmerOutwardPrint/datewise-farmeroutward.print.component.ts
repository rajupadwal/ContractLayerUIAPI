import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-datewise-farmeroutward',
  templateUrl: './datewise-farmeroutward.print.component.html',
  styleUrls: ['./datewise-farmeroutward.print.component.css']
})
export class DatewiseFarmerOutwardPrintComponent implements OnInit {
  DatewiseFarmerOutwardDetailsList: any = [];

  ngOnInit() {
    this.DatewiseFarmerOutwardDetailsList = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private printService: PrintService) {
  }
}
export class DatewiseFarmerOutwardDetail {
  CustomerName: string;
  TransactionDate: Date = new Date();
  PlanName: string;
  ProductName: string;
  ProductTypeUnit: string;
  Quantity: number;
}

