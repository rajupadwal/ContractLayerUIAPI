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
      headerName: 'Button Col 1', 'width': 100,
      cellRenderer: 'buttonRenderer',
    },

    {
      headerName: 'RecordNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },


    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(FarmerOutwardComponent, { data: params.data, modalConfig: { title: 'Add/Edit Farmer Outward' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            if (result == false) { return; } else this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    { headerName: 'Date ', field: 'Date', valueFormatter: this.dateFormatter, 'width': 120 },
    {
      headerName: 'Location Name', field: 'LocationName', ' width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Customer Name ', field: 'CustmerName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Plan Name ', field: 'PlanName', 'width': 120,
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

}
