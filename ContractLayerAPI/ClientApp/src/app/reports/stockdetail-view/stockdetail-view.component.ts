import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { StockdetailService } from './stockdetail.service';

@Component({
  selector: 'app-stockdetail-view',
  templateUrl: './stockdetail-view.component.html',
  styleUrls: ['./stockdetail-view.component.css']
})
export class StockdetailViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {
      headerName: 'Product Name ', field: 'ProductName', ' width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Product Type', field: 'ProductType', 'width': 180,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Unit', field: 'UnitDescription', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Opening Stock', field: 'OpeningStock', 'width': 150,
    },
    {
      headerName: 'Inward Qty', field: 'InwardQty', 'width': 120,
    },
    {
      headerName: 'Outward Qty', field: 'OutwardQty', 'width': 120,
    },
    {
      headerName: 'Rejected Qty', field: 'RejectedQty', 'width': 120,
    },
    {
      headerName: 'Available Stock', field: 'AvailableStock', 'width': 150,
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

  constructor(private router: Router, private http: HttpClient, private stockdetailService: StockdetailService, public dialog: DialogService) { }


  ngOnInit() {

    this.stockdetailService.loadPurchaseBillMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }
}
