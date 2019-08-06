import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../config';
import { DialogService } from '../dialog/dialog.service';
import { PurchaseBillComponent } from '../purchase-bill/purchase-bill.component';
import { PurchasebillService } from './purchasebill.service';

@Component({
  selector: 'app-purchasebill-view',
  templateUrl: './purchasebill-view.component.html',
  styleUrls: ['./purchasebill-view.component.css']
})
export class PurchasebillViewComponent implements OnInit {

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
          const ref = this.dialog.open(PurchaseBillComponent, { data: params.data, modalConfig: { title: 'Add/Edit Purchase Bill', width: '90%' } });
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
      headerName: 'GRN No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'BillNo', 'width': 150
    },


    

    { headerName: 'Date ', field: 'BillDate', 'width': 150 },
    {
      headerName: 'Location Name', field: 'LocationName', ' width': 150
    },
    {
      headerName: 'Supplier Name ', field: 'SupplierName', 'width': 100
    },
  ];

  rowData;


  constructor(private router: Router, private http: HttpClient, private Purchasebillservice: PurchasebillService, public dialog: DialogService) { }


  ngOnInit() {

    this.Purchasebillservice.loadPurchaseBillMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }

  redirectToAddNew() {
    const ref = this.dialog.open(PurchaseBillComponent, { modalConfig: { title: 'Add/Edit Purchase Bill', width: '90%' } });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.Purchasebillservice.loadPurchaseBillMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      });
  }

}
