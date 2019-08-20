import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { PurchaseBillComponent } from '../purchase-bill/purchase-bill.component';
import { PurchasebillService } from './purchasebill.service';
import * as moment from 'moment';
import { PrintService } from "../printing/print.service";



@Component({
  selector: 'app-purchasebill-view',
  templateUrl: './purchasebill-view.component.html',
  styleUrls: ['./purchasebill-view.component.css']
})
export class PurchasebillViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
    //{
    //  headerName: 'Button Col 1', 'width': 100,
    //  cellRenderer: 'buttonRenderer',
    //},
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(PurchaseBillComponent, { data: params.data, modalConfig: { title: 'Add/Edit Purchase Bill', width: '90%' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            if (result == false) { return; } else this.RefreshGrid();
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
          this.printService.printDocument("PurchaseBill", params.data);

        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = ' <i class="pi pi-trash"></i>';
        newTH.onclick = () => {
         this.delete(params.data);

        };
        return newTH;
      },
    },

    {
      headerName: 'GRN No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'BatchNo', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
     
    {
      headerName: 'Date ', field: 'BillDate', valueFormatter: this.dateFormatter, 'width': 180,
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
    { headerName: 'Date', field: 'BillDate', valueFormatter: this.dateFormatter,'width': 120 ,},
    {
      headerName: 'Location', field: 'LocationName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Supplier Name ', field: 'SupplierName', 'width': 140,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Before Tax Amt', field: 'BeforeTaxAmt', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'TotalTransport Amt', field: 'TotalTransportAmt', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'TotalCGSTAmt', field: 'TotalCGSTAmt', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Total SGS TAmt', field: 'TotalSGSTAmt', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Grand Total', field: 'GrandTotal', 'width': 120,
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

  constructor(private router: Router, private http: HttpClient, private Purchasebillservice: PurchasebillService, public dialog: DialogService,
    private printService: PrintService) { }


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
    const ref = this.dialog.open(PurchaseBillComponent, { modalConfig: { title: 'Add/Edit Purchase Bill', width: '90%' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
    
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.GETALLPURCHASEBILLMASTERS, httpOptions)
      .subscribe((purchasebill: any) => {
        this.rowData = purchasebill;
      });
  }

  delete(farmerinward) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLS_API.DELETE, farmerinward, httpOptions)
        .subscribe((farmerinward) => {
          this.RefreshGrid();
        });
    }
  }
}
