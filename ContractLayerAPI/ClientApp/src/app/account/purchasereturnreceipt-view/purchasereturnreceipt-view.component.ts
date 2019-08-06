import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { PurchasereturnreceiptDetailsComponent } from '../purchasereturnreceipt-details/purchasereturnreceipt-details.component';
import { PurchasereturnReceiptService } from './purchasereturnreceipt.service';

@Component({
  selector: 'app-purchasereturnreceipt-view',
  templateUrl: './purchasereturnreceipt-view.component.html',
  styleUrls: ['./purchasereturnreceipt-view.component.css']
})
export class PurchasereturnReceiptViewComponent implements OnInit {

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
          const ref = this.dialog.open(PurchasereturnreceiptDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Purchase Return Receipt' }, isEditable: true });
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
      headerName: 'Supplier Name ', field: 'Supplier.SupplierName', 'width': 100
    },
    //{
    //  headerName: 'PaymentType    ', field: 'PaymentType', 'width': 100
    //},
    { headerName: 'BillRefNo    ', field: 'BillRefNo' },
    { headerName: 'PaymentMethod    ', field: 'PaymentMethod' },
    { headerName: 'ChequeNo    ', field: 'ChequeNo' },
    { headerName: 'AmountReceived    ', field: 'AmountReceived' },
    { headerName: 'Narration    ', field: 'Narration' }
  ];

  rowData;

  constructor(private router: Router, private http: HttpClient, private purchasereturnreceiptService: PurchasereturnReceiptService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.PURCHASERETURNRECEIPT_API.GETALL, httpOptions)
      .subscribe((purchasereturnreceipt: any) => {
        this.rowData = purchasereturnreceipt;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(PurchasereturnreceiptDetailsComponent, { modalConfig: { title: 'Add/Edit Purchase Return Receipt' }, isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.PURCHASERETURNRECEIPT_API.GETALL, httpOptions)
      .subscribe((purchasereturnreceipt: any) => {
        this.rowData = purchasereturnreceipt;
      });
  }

  delete(purchasereturnreceipt) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.PURCHASERETURNRECEIPT_API.DELETE, purchasereturnreceipt, httpOptions)
        .subscribe((purchasereturnreceipt) => {
          this.RefreshGrid();
        });
    }
  }
}





















































