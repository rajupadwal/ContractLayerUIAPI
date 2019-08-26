import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../config';
import { DialogService } from '../dialog/dialog.service';
import { PurchaseBillReturnComponent } from '../purchase-billreturn/purchase-billreturn.component';
import { PurchasebillreturnService } from './purchasebillreturn.service';
import * as moment from 'moment';
import { ProductService } from '../master/product-view/product.service';

@Component({
  selector: 'app-purchasebillreturn-view',
  templateUrl: './purchasebillreturn-view.component.html',
  styleUrls: ['./purchasebillreturn-view.component.css']
})
export class PurchasebillreturnViewComponent implements OnInit {

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
          const ref = this.dialog.open(PurchaseBillReturnComponent, { data: params.data, modalConfig: { title: 'Add/Edit Purchase Bill Return', width: '90%' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            if (result == false) { return; } else this.RefreshGrid();
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
    {
      headerName: 'Location Name', field: 'LocationName', ' width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Supplier Name ', field: 'SupplierName', 'width': 180,
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

  constructor(private router: Router, private http: HttpClient, private Purchasebillreturnservice: PurchasebillreturnService, public dialog: DialogService, public productService: ProductService) { }


  ngOnInit() {

    this.Purchasebillreturnservice.loadPurchaseBillMaster().subscribe(
      (response) => {
        this.rowData = response;
      },

      (error) => {
        console.log(error);

      }
    );
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'PurchaseBillReturn');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(PurchaseBillReturnComponent, { modalConfig: { title: 'Add/Edit Purchase Bill Return', width: '90%' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
    
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PRODUCT_PURCHASE_BILLRETURNS_API.GETALLPURCHASEBILLRETURNMASTERS, httpOptions)
      .subscribe((purchasebill: any) => {
        this.rowData = purchasebill;
      });
  }

  delete(farmerinward) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(APP_CONSTANT.PRODUCT_PURCHASE_BILLRETURNS_API.DELETE, farmerinward, httpOptions)
      .subscribe((farmerinward) => {
        this.RefreshGrid();
      });
  }
}
