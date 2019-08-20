import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../config';
import { DialogService } from '../dialog/dialog.service';
import { FarmeroutwardService } from './farmeroutward.service';
import { FarmerOutwardComponent } from '../farmer-outward/farmer-outward.component';
import * as moment from 'moment';

@Component({
  selector: 'app-farmeroutward-view',
  templateUrl: './farmeroutward-view.component.html',
  styleUrls: ['./farmeroutward-view.component.css']
})
export class FarmeroutwardViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(FarmerOutwardComponent, { data: params.data, modalConfig: { title: 'Add/Edit Farmer Outward' }, isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    {
      headerName: 'Delete', 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = ' <i class="pi pi-trash" style="font-size: initial;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(FarmerOutwardComponent, { data: params.data, modalConfig: { title: 'Add/Edit Farmer Outward' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            if (result == false) { return; } else this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    {
      headerName: 'Record No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },

    { headerName: 'Date ', field: 'Date', valueFormatter: this.dateFormatter, 'width': 130 },
    {
      headerName: 'Location Name', field: 'LocationName', 'width': 140,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Customer Name ', field: 'CustmerName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Plan Name ', field: 'PlanName', 'width': 340,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
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

  constructor(private router: Router, private http: HttpClient, private farmeroutwardService: FarmeroutwardService, public dialog: DialogService) { }


  ngOnInit() {

    this.farmeroutwardService.loadFarmerOutwardMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }

  redirectToAddNew() {
    const ref = this.dialog.open(FarmerOutwardComponent, { modalConfig: { title: 'Add/Edit Farmer Outward Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.farmeroutwardService.loadFarmerOutwardMaster().subscribe(
      (response) => {
        this.rowData = response;
      });
  }

  delete(farmeroutward) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.PRODUCT_FARMER_OUTWARDS_API.DELETE, farmeroutward, httpOptions)
        .subscribe((farmeroutward) => {
          this.RefreshGrid();
        });
    }
  }
}
