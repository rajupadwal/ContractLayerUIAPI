import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { SalesReceiptService } from './salesreceipt.service';
import { SalesReceiptDetailsComponent } from '../salesreceipt-details/salesreceipt-details.component';

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

  columnDefs = [
    {
      headerName: 'Button Col 1', 'width': 100,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },

    {
      headerName: 'ReceiptNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'ReceiptNo', 'width': 150
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
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
      headerName: 'Delete', 'width': 150,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'Delete';
        newTH.className = "pi pi-times";
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },
    { headerName: 'Date ', field: 'Date', 'width': 150 },
    {
      headerName: 'Location Name', field: 'Location.LocationName', ' width': 150
    },
    {
      headerName: 'Customer Name ', field: 'Customer.CustmerName', 'width': 100
    },
    {
      headerName: 'PaymentType    ', field: 'PaymentType', 'width': 100
    },
    { headerName: 'BillRefNo    ', field: 'BillRefNo' },
    { headerName: 'PaymentMethod    ', field: 'PaymentMethod' },
    { headerName: 'ChequeNo    ', field: 'ChequeNo' },
    { headerName: 'Amount    ', field: 'CashAmount' },
    { headerName: 'Narration    ', field: 'Narration' }
  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private salesreceiptservice: SalesReceiptService, public dialog: DialogService) { }

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

    return this.http.post(APP_CONSTANT.SALERECEIPT_API.DELETE, salereceipt, httpOptions)
      .subscribe((salereceipt) => {
        this.RefreshGrid();
      });
  }
}















