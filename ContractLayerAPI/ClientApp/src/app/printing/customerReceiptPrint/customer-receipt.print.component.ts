import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';
import { ProductService } from "../../master/product-view/product.service";
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-receipt',
  templateUrl: './customer-receipt.print.component.html',
  styleUrls: ['./customer-receipt.print.component.css']
})
export class CustomerReceiptPrintComponent implements OnInit {
  CustomerReceiptMaster: any;

  ngOnInit() {
    this.CustomerReceiptMaster = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private productService: ProductService, private productdescservice: ProductdescService,
    private printService: PrintService) {
  }
}

export class CustomerReceiptMaster {
  PkId: number = 0;
  ReceiptNo: number = 0;
  Date: Date = new Date();
  Location: any;
  Customer: any;
  PaymentType: string = '';
  BillRefNo: string = '';
  PaymentMethod: string = '';
  ChequeNo: string = '';
  OutstandingAmount: number = 0;
  CashAmount: number = 0;
  Narration: string = '';
  LocationId: number = 0;
  CustomerId: number = 0;
}
