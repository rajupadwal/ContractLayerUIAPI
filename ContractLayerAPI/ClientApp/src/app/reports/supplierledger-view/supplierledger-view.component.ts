import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { SupplierledgerService } from './supplierledger.service';
import { SupplierService } from '../../master/supplier-view/supplier.service';
import * as moment from 'moment';
import { PrintService } from '../../printing/print.service';
import { ProductService } from '../../master/product-view/product.service';

@Component({
  selector: 'app-supplierledger-view',
  templateUrl: './supplierledger-view.component.html',
  styleUrls: ['./supplierledger-view.component.css']
})
export class SupplierledgerViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public supplierList = [];

  columnDefs = [
    {
      headerName: 'SupplierName ', field: 'SupplierName', 'width': 150,
    },
    {
      headerName: 'TransactionDate', field: 'TransactionDate', valueFormatter: this.dateFormatter,'width': 150,
      
    },
    {
      headerName: 'TransactionType', field: 'TransactionType', 'width': 150,
    },
    {
      headerName: 'Bill No', field: 'BillId', 'width': 150,
    },
    {
      headerName: 'PurchaseAmount', field: 'PurchaseAmount', 'width': 120,
    },
    {
      headerName: 'PaymentVocherNo', field: 'PaymentVocherNo', 'width': 120,
    },
    {
      headerName: 'PurchasePaidAmt', field: 'PurchasePaidAmt', 'width': 150,
    },
    {
      headerName: 'PaymentType', field: 'PaymentType', 'width': 120,
    },
    {
      headerName: 'Narration', field: 'Narration', 'width': 120,
    },
  ];

  rowData;

  defaultColDef = {
    sortable: true,
    filter: true
  };

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.ngOnInit();
  }

  dateFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY');
  }

  constructor(private router: Router, private http: HttpClient, private productService: ProductService, private supplierledgerService: SupplierledgerService, private supplierService: SupplierService, private printService: PrintService, public dialog: DialogService) { }


  ngOnInit() {

    this.searchSupplier("");
  }

  searchSupplier(event) {
    this.supplierService.searchSupplier(event.query).subscribe((data: any) => {
      this.supplierList = data;
    });
  }

  viewSupplierLedgerDetails(event) {
    let supplierledgerdetails = event;
    this.supplierledgerService.getSupplierLedgerDetails(supplierledgerdetails)
      .subscribe((response: any) => {
        this.rowData = response;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'SupplierLedger');
  }

  printLedger()
  {
    this.printService.printDocument("SupplierLedger",this.rowData);
  }
}
