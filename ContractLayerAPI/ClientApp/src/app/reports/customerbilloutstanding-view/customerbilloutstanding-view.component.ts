import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { CustomerbilloutstandingService } from './customerbilloutstanding.service';

@Component({
  selector: 'app-customerbilloutstanding-view',
  templateUrl: './customerbilloutstanding-view.component.html',
  styleUrls: ['./customerbilloutstanding-view.component.css']
})
export class CustomerbilloutstandingViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {
      headerName: 'CustomerName ', field: 'CustomerName', ' width': 150,
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
      headerName: 'Bill Amount', field: 'BillAmount', 'width': 150,
    },
    {
      headerName: 'Paid Amount', field: 'BillPaidAmt', 'width': 120,
    },
    {
      headerName: 'Outstanding', field: 'BillOutstanding', 'width': 120,
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

  constructor(private router: Router, private http: HttpClient, private customerbilloutstandingService: CustomerbilloutstandingService, public dialog: DialogService) { }


  ngOnInit() {

    this.customerbilloutstandingService.loadBillOutstanding().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }
}
