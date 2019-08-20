import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';
import { ProductService } from "../../master/product-view/product.service";
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-supplier-receipt',
  templateUrl: './supplier-receipt.print.component.html',
  styleUrls: ['./supplier-receipt.print.component.css']
})
export class SupplierReceiptPrintComponent implements OnInit {
  SupplierReceiptMaster: any;

  ngOnInit() {
    this.SupplierReceiptMaster = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private productService: ProductService, private productdescservice: ProductdescService,
    private printService: PrintService) {
  }
}

export class SupplierReceiptMaster {
  PkId: number = 0;
  ReceiptNo: number = 0;
  Date: Date = new Date();
  Location: any;
  Supplier: any;
  PaymentType: string = '';
  BillRefNo: string = '';
  PaymentMethod: string = '';
  ChequeNo: string = '';
  OutstandingAmount: number = 0;
  AmountPaid: number = 0;
  Narration: string = '';
  LocationId: number = 0;
  SupplierId: number = 0;
}
