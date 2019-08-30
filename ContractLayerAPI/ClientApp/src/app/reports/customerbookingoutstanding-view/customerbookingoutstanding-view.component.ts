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
      headerName: 'Mobile No', field: 'MobileNo', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Booking Amount', field: 'BookingAmount', 'width': 150,
    },
    {
      headerName: 'Received Amount', field: 'BookingReceivedAmt', 'width': 150,
    },
    {
    headerName: 'Cancel Booking Amt', field: 'CancelBookingAmt', 'width': 170,
    },
    {
      headerName: 'Outstanding Amount', field: 'BookingOutstanding', 'width': 170,
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
