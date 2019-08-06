import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../config';
import { DialogService } from '../dialog/dialog.service';
import { FarmerInwardComponent } from '../farmer-inward/farmer-inward.component';
import { FarmerinwardService } from './farmerinward.service';

@Component({
  selector: 'app-farmerinward-view',
  templateUrl: './farmerinward-view.component.html',
  styleUrls: ['./farmerinward-view.component.css']
})
export class FarmerinwardViewComponent implements OnInit {

  columnDefs = [
    {
      headerName: 'Button Col 1', 'width': 100,
      cellRenderer: 'buttonRenderer',
    },

    {
      headerName: 'RecordNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 150
    },


    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

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
    { headerName: 'Date ', field: 'Date', 'width': 150 },
    {
      headerName: 'Location Name', field: 'LocationName', ' width': 150
    },
    {
      headerName: 'Customer Name ', field: 'CustmerName', 'width': 100
    },
    {
      headerName: 'Plan Name ', field: 'PlanName', 'width': 100
    },
  ];

  rowData;


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
    this.farmerinwardService.loadFarmerInwardMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      });
  }

}
