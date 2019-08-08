import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FarmerchickeggsbillDetailComponent } from '../farmerchickeggsbill-detail/farmerchickeggsbill-detail.component';
import { FarmerchikeggbillService } from './farmerchickeggsbill.service';
import { DialogService } from '../../dialog/dialog.service';

@Component({
  selector: 'app-farmerchickeggsbill-view',
  templateUrl: './farmerchickeggsbill-view.component.html',
  styleUrls: ['./farmerchickeggsbill-view.component.css']
})
export class FarmerchickeggsbillViewComponent implements OnInit {

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
          const ref = this.dialog.open(FarmerchickeggsbillDetailComponent, { data: params.data, modalConfig: { title: 'Add/Edit Sale ' },isEditable: true });
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
        newTH.onclick = () => {
          // this.delete(params.data);

        };
        return newTH;
      },
    },

    {
      headerName: 'Bill No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'BillNo', 'width': 150
    },


    
    { headerName: 'Date ', field: 'BillDate', 'width': 150 },
    {
      headerName: 'Location Name', field: 'LocationName', ' width': 150
    },
    {
      headerName: 'Customer Name ', field: 'CustmerName', 'width': 100
    },
    {
      headerName: 'Plan Name ', field: 'PlanName', 'width': 100
    },
    {
      headerName: 'Place Name ', field: 'PlaceOfSupply', 'width': 100
    },
    {
      headerName: 'Address ', field: 'Address', 'width': 100
    },
    {
      headerName: 'Total Amount ', field: 'TotalAmount', 'width': 100
    },
    {
      headerName: 'TDS Amount ', field: 'TdsAmount', 'width': 100
    },
    {
      headerName: 'Admin Charges Amount ', field: 'AdminChargesAmt', 'width': 100
    },
    {
      headerName: 'Grand Total Amount ', field: 'GrandTotal', 'width': 100
    },
  ];

  rowData;


  constructor(private router: Router, private http: HttpClient, private farmerchikeggbillservice: FarmerchikeggbillService, public dialog: DialogService) { }


  ngOnInit() {

    this.farmerchikeggbillservice.loadFarmerchickeggbillMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }

  redirectToAddNew() {
    const ref = this.dialog.open(FarmerchickeggsbillDetailComponent, { modalConfig: { title: 'Add/Edit sale' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.farmerchikeggbillservice.loadFarmerchickeggbillMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      });
  }

}





