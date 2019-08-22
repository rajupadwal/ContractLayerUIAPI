import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { SalesReceiptService } from './salesreceipt.service';
import { SalesReceiptDetailsComponent } from '../salesreceipt-details/salesreceipt-details.component';
import * as moment from 'moment';
import { PrintService } from '../../printing/print.service';

@Component({
  selector: 'app-salesreceipt-view',
  templateUrl: './salesreceipt-view.component.html',
  styleUrls: ['./salesreceipt-view.component.css']
})
export class SalesreceiptViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  private gridApi;
  private gridColumnApi;

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
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(SalesReceiptDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Sales Receipt' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Print', 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = ' <i class="pi pi-print"></i>';
        newTH.onclick = () => {
          this.printService.printDocument("CustomerReceipt", params.data);

        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        //newTH.innerHTML = 'Delete';
        newTH.innerHTML = ' <i class="pi pi-trash" style="font-size: initial;"></i>';
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },

    {
      headerName: 'Receipt No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'ReceiptNo', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    
    { headerName: 'Date', field: 'Date', 'width': 120 },
    {
      headerName: 'Location', field: 'Location.LocationName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Customer Name', field: 'Customer.CustmerName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Payment Type    ', field: 'PaymentType', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    { headerName: 'Bill Ref No', field: 'BillRefNo', 'width': 120 },
    { headerName: 'Payment Method', field: 'PaymentMethod', 'width': 140 },
    { headerName: 'Cheque No', field: 'ChequeNo', 'width': 120 },
    { headerName: 'Amount', field: 'CashAmount', 'width': 120 },
    { headerName: 'Narration', field: 'Narration', 'width': 120 }
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

  constructor(private router: Router, private http: HttpClient, private salesreceiptservice: SalesReceiptService, public dialog: DialogService, public printService:PrintService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.SALERECEIPT_API.GETALL, httpOptions)
      .subscribe((salereceipt: any) => {
        this.rowData = salereceipt;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(SalesReceiptDetailsComponent, { modalConfig: { title: 'Add/Edit Sale Receipt' } ,isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.SALERECEIPT_API.GETALL, httpOptions)
      .subscribe((salereceipt: any) => {
        this.rowData = salereceipt;
      });
  }

  delete(salereceipt) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.SALERECEIPT_API.DELETE, salereceipt, httpOptions)
        .subscribe((salereceipt) => {
          this.RefreshGrid();
        });
    }
  }
}















