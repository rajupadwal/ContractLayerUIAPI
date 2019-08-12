import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../config';
import { DialogService } from '../dialog/dialog.service';
import { FarmerInwardComponent } from '../farmer-inward/farmer-inward.component';
import { FarmerinwardService } from './farmerinward.service';
import * as moment from 'moment';

@Component({
  selector: 'app-farmerinward-view',
  templateUrl: './farmerinward-view.component.html',
  styleUrls: ['./farmerinward-view.component.css']
})
export class FarmerinwardViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    //{
    //  headerName: 'Button Col 1', 'width': 100,
    //  cellRenderer: 'buttonRenderer',
    //},

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(FarmerInwardComponent, { data: params.data, modalConfig: { title: 'Add/Edit Farmer Inward' },isEditable: true });
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
        newTH.innerHTML = ' <i class="pi pi-trash"></i>';
        //newTH.className = "pi pi-times";
        newTH.onclick = () => {
          //this.delete(params.data);

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
    {
      headerName: 'Collection Agent Name ', field: 'CollectionAgentName', 'width': 140,
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


  constructor(private router: Router, private http: HttpClient, private farmerinwardService: FarmerinwardService, public dialog: DialogService) { }


  ngOnInit() {

    this.farmerinwardService.loadFarmerInwardMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }

  redirectToAddNew() {
    const ref = this.dialog.open(FarmerInwardComponent, { modalConfig: { title: 'Add/Edit Farmer Inward Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  
  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.farmerinwardService.loadFarmerInwardMaster().subscribe(
      (response) => {
        this.rowData = response;
      });

    //delete (bookingcancel) {
    //  let httpOptions = {
    //    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //  };
  }

}
