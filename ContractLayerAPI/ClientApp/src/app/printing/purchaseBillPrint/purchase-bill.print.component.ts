import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-purchase-bill',
  templateUrl: './purchase-bill.print.component.html',
  styleUrls: ['./purchase-bill.print.component.css']
})
export class PurchaseBillPrintComponent implements OnInit {
  PurchaseBillMaster
  ngOnInit() {

  }
  constructor(route: ActivatedRoute,
    private printService: PrintService) {
    this.PurchaseBillMaster = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 1000);
   
  }
}

export class PurchaseBillDetail {
  BillId: number = 0;
  BatchNo: string = '';
  BillNo: string = '';
  BillDate: Date = new Date();
  ProductId: number = 0;
  ProductType: string = '';
  Unit: string;
  HsnCode: string = '';
  Quantity: number=0;
  Rate: number = 0;
  Mrp: number = 0;
  Discount: number = 0;
  TaxableAmt: number = 0;
  CgstPercentage: number = 0;
  SgstPercentage: number = 0;
  IgstPercentage: number = 0;
  TotalAmount: number = 0;
  PkId: number = 0;
  Producttypeun: any;
  Product: any;
  productTypeList = [];
 
}

export class PurchaseBillMaster {
  BillId: number = 0;
  BatchNo: string = '';
  BillNo: string = '';
  BillDate: Date = new Date();
  GRNDate: Date = new Date();
  LocationId: number = 0;
  SupplierId: number = 0;
  BeforeTaxAmt: number = 0;
  TransportationCost: number = 0;
  TransportationGSTPer: number = 0;
  TransportationGSTAmt: number = 0;
  TotalTransportAmt: number = 0;
  TotalCGSTAmt: number = 0;
  TotalSGSTAmt: number = 0;
  TotalIGSTAmt: number = 0;
  OtherCharges: number = 0;
  Roundoff: number = 0;
  GrandTotal: number = 0;
  Narration: string = '';
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Supplier: any;
  TblPurchaseBillDt: PurchaseBillDetail[];
  deletedDetailsList: any[] = [];
}
