import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import * as moment from 'moment';
import { CustomerledgerService } from './customerledger.service';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { PrintService } from '../../printing/print.service';
import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';
import { ProductService } from '../../master/product-view/product.service';

@Component({
  selector: 'app-customerledger-view',
  templateUrl: './customerledger-view.component.html',
  styleUrls: ['./customerledger-view.component.css']
})
export class CustomerledgerViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public customerList = [];

  columnDefs = [
    {
      headerName: 'Customer Name ', field: 'CustomerName', 'width': 150,
    },
    {
      headerName: 'TransactionDate', field: 'TransactionDate', valueFormatter: this.dateFormatter,'width': 150,
    },
    {
      headerName: 'TransactionType', field: 'TransactionType', 'width': 150,
    },
    {
      headerName: 'Booking No', field: 'BookingId', 'width': 150,
    },
    {
      headerName: 'BookingAmount', field: 'BookingAmount', 'width': 120,
    },
    {
      headerName: 'ReceiptNo', field: 'ReceiptNo', 'width': 120,
    },
    {
      headerName: 'BookingReceivedAmt', field: 'BookingReceivedAmt', 'width': 150,
    },
    {
      headerName: 'CancelBookingAmt', field: 'CancelBookingAmt', 'width': 150,
    },
    {
      headerName: 'Bill No', field: 'BillId', 'width': 150,
    },
    {
      headerName: 'BillAmount', field: 'BillAmount', 'width': 150,
    },
    {
      headerName: 'BillPaidAmt', field: 'BillPaidAmt', 'width': 150,
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

  constructor(private router: Router, private http: HttpClient, public productService: ProductService,private customerledgerService: CustomerledgerService, private cusotmerService: CusotmerService, private printService: PrintService, public dialog: DialogService) { }


  ngOnInit() {
    this.searchCustomer("");
  }

  searchCustomer(event) {
    this.cusotmerService.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }

  viewCustomerLedgerDetails(event) {
    let customerledgerdetails = event;
    this.customerledgerService.getCustomerLedgerDetails(customerledgerdetails)
      .subscribe((response: any) => {
        this.rowData = response;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'PurchaseBillReturn');
  }

  printLedger() {
    this.printService.printDocument("CustomerLedger", this.rowData);
  }
}
