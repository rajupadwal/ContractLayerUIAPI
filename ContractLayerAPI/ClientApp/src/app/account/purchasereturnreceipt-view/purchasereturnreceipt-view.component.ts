import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { PurchasereturnreceiptDetailsComponent } from '../purchasereturnreceipt-details/purchasereturnreceipt-details.component';
import { PurchasereturnReceiptService } from './purchasereturnreceipt.service';
import * as moment from 'moment';
import { ProductService } from '../../master/product-view/product.service';

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

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
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
      headerName: 'Delete', 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
       // newTH.innerHTML = 'Delete';
        newTH.innerHTML = ' <i class="pi pi-trash"  style="font-size: initial;"></i>';
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
      field: 'RecordNo', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },

    
    {
      headerName: 'Date ', field: 'Date', valueFormatter: this.dateFormatter, 'width': 180,
      filter: "agDateColumnFilter",
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = moment(cellValue).format('DD/MM/YYYY');
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split("/");
          var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true
      }
    },
    {
      headerName: 'Location', field: 'Location.LocationName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Supplier Name ', field: 'Supplier.SupplierName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    //{
    //  headerName: 'PaymentType    ', field: 'PaymentType', 'width': 100
    //},
    { headerName: 'Bill Ref No    ', field: 'BillRefNo', 'width': 120 },
    { headerName: 'Payment Method    ', field: 'PaymentMethod', 'width': 140 },
    { headerName: 'Cheque No    ', field: 'ChequeNo', 'width': 120 },
    { headerName: 'Amount Received    ', field: 'AmountReceived', 'width': 140 },
    { headerName: 'Narration    ', field: 'Narration', 'width': 120 }
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

  constructor(private router: Router, private http: HttpClient, private purchasereturnreceiptService: PurchasereturnReceiptService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.PURCHASERETURNRECEIPT_API.GETALL, httpOptions)
      .subscribe((purchasereturnreceipt: any) => {
        this.rowData = purchasereturnreceipt;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'PurchaseReturnPayment');
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





















































