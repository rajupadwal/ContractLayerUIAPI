import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-supplier-ledger',
  templateUrl: './supplier-ledger.print.component.html',
  styleUrls: ['./supplier-ledger.print.component.css']
})
export class SupplierLedgerPrintComponent implements OnInit {
  SupplierLedgerDetailsList: any = [];

  ngOnInit() {
    this.SupplierLedgerDetailsList = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private printService: PrintService) {
  }
}
export class SupplierLedgerDetail {
  SupplierName: string;
  TransactionDate: Date = new Date();
  TransactionType: string;
  BillNo: string;
  PurchaseAmount: number;
  PaymentVocherNo:string;
  PurchasePaidAmt: number;
  PaymentType:string;
  Narration:string;
}

