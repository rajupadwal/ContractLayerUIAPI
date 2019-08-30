import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-customer-ledger',
  templateUrl: './customer-ledger.print.component.html',
  styleUrls: ['./customer-ledger.print.component.css']
})
export class CustomerLedgerPrintComponent implements OnInit {
  CustomerLedgerDetailsList: any = [];

  ngOnInit() {
    this.CustomerLedgerDetailsList = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private printService: PrintService) {
  }
}
export class CustomerLedgerDetail {
  CustomerName: string;
  TransactionDate: Date = new Date();
  TransactionType: string;
  BookingAmount: number;
  BookingReceivedAmt: number;
  CancelBookingAmt: number;
  BillAmount: number;
  BillPaidAmt: number;
}

