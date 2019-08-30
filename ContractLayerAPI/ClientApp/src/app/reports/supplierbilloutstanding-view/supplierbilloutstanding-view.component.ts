import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { SupplierbilloutstandingService } from './supplierbilloutstanding.service';

@Component({
  selector: 'app-supplierbilloutstanding-view',
  templateUrl: './supplierbilloutstanding-view.component.html',
  styleUrls: ['./supplierbilloutstanding-view.component.css']
})
export class SupplierbilloutstandingViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {
      headerName: 'SupplierName ', field: 'SupplierName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Address', field: 'Address', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'MobileNo', field: 'MobileNo', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Purchase Amount', field: 'PurchaseAmount', 'width': 150,
    },
    {
      headerName: 'Paid Amount', field: 'PurchasePaidAmt', 'width': 120,
    },
    {
      headerName: 'Outstanding', field: 'PurchaseOutstanding', 'width': 120,
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

  constructor(private router: Router, private http: HttpClient, private supplierbilloutstandingService: SupplierbilloutstandingService, public dialog: DialogService) { }


  ngOnInit() {

    this.supplierbilloutstandingService.loadBillOutstanding().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }
}
