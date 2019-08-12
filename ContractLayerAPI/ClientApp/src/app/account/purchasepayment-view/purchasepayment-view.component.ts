import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { PurchasepaymentDetailsComponent } from '../purchasepayment-details/purchasepayment-details.component';
import { PurchasePayemntService } from './purchasepayment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-purchasepayment-view',
  templateUrl: './purchasepayment-view.component.html',
  styleUrls: ['./purchasepayment-view.component.css']
})
export class PurchasepaymentViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  columnDefs = [
    //{
    //  headerName: 'Button Col 1', 'width': 100,
    //  cellRenderer: 'buttonRenderer',
    //  cellRendererParams: {
    //    onClick: this.onBtnClick1.bind(this),
    //    label: 'Click 1'
    //  }
    //},

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 80,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(PurchasepaymentDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Purchase Payment' }, isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 80,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
       // newTH.innerHTML = 'Delete';
        newTH.innerHTML = ' <i class="pi pi-trash"></i>';
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },

    {
      headerName: 'Record No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 140,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },

    
    { headerName: 'Date ', field: 'Date', valueFormatter: this.dateFormatter, 'width': 100 },
    {
      headerName: 'Location Name', field: 'Location.LocationName', ' width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Supplier Name ', field: 'Supplier.SupplierName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'PaymentType    ', field: 'PaymentType', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    //{ headerName: 'BillRefNo    ', field: 'BillRefNo' },
    { headerName: 'Payment Method    ', field: 'PaymentMethod' },
    { headerName: 'Cheque No    ', field: 'ChequeNo' },
    { headerName: 'Amount Paid    ', field: 'AmountPaid' },
    { headerName: 'Narration    ', field: 'Narration' }
  ];

  rowData = [

  ];

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

  constructor(private router: Router, private http: HttpClient, private purchasepayemntservice: PurchasePayemntService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.PURCHASEPAYMENT_API.GETALL, httpOptions)
      .subscribe((purchasepayment: any) => {
        this.rowData = purchasepayment;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(PurchasepaymentDetailsComponent, { modalConfig: { title: 'Add/Edit Purchase Payment' }, isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.PURCHASEPAYMENT_API.GETALL, httpOptions)
      .subscribe((purchasepayment: any) => {
        this.rowData = purchasepayment;
      });
  }

  delete(purchasepayment) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(APP_CONSTANT.PURCHASEPAYMENT_API.DELETE, purchasepayment, httpOptions)
      .subscribe((purchasepayment) => {
        this.RefreshGrid();
      });
  }
}





















































