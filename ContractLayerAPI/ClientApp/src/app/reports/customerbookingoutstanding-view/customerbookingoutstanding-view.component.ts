import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { CustomerbookingoutstandingService } from './customerbookingoutstanding.service';

@Component({
  selector: 'app-customerbookingoutstanding-view',
  templateUrl: './customerbookingoutstanding-view.component.html',
  styleUrls: ['./customerbookingoutstanding-view.component.css']
})
export class CustomerbookingoutstandingViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {
      headerName: 'CustomerName ', field: 'CustomerName', 'width': 150,
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
      headerName: 'Booking Amount', field: 'BookingAmount', 'width': 150,
    },
    {
      headerName: 'Received Amount', field: 'BookingReceivedAmt', 'width': 120,
    },
    {
    headerName: 'CancelBookingAmt', field: 'CancelBookingAmt', 'width': 120,
    },
    {
      headerName: 'Outstanding', field: 'BookingOutstanding', 'width': 120,
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

  constructor(private router: Router, private http: HttpClient, private customerbookingoutstandingService: CustomerbookingoutstandingService, public dialog: DialogService) { }


  ngOnInit() {

    this.customerbookingoutstandingService.loadBookingOutstanding().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }
}
