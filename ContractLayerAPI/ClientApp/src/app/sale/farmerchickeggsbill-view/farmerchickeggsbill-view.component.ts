import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FarmerchickeggsbillDetailComponent } from '../farmerchickeggsbill-detail/farmerchickeggsbill-detail.component';
import { FarmerchikeggbillService } from './farmerchickeggsbill.service';
import { DialogService } from '../../dialog/dialog.service';
import * as moment from 'moment';
import { APP_CONSTANT } from '../../../config';
import { PrintService } from '../../printing/print.service';
import { ProductService } from '../../master/product-view/product.service';


@Component({
  selector: 'app-farmerchickeggsbill-view',
  templateUrl: './farmerchickeggsbill-view.component.html',
  styleUrls: ['./farmerchickeggsbill-view.component.css']
})
export class FarmerchickeggsbillViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  columnDefs = [
     
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(FarmerchickeggsbillDetailComponent, { data: params.data, modalConfig: { title: 'Add/Edit Sale ', width: '90%' },isEditable: true });
          ref.afterClosed.subscribe(result => {
            if (result == false) { return; } else this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Print', 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = ' <i class="pi pi-print" style="font-size:large;"></i>';
        newTH.onclick = () => {
          this.printService.printDocument("CreateSale", params.data);

        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = ' <i class="pi pi-trash" style="font-size:initial;"></i>';
        newTH.onclick = () => {
        this.delete(params.data);

        };
        return newTH;
      },
    },

    {
      headerName: 'Bill No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'BillNo', 'width': 120,
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
      headerName: 'Location ', field: 'LocationName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Customer Name ', field: 'CustmerName', 'width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Plan Name ', field: 'PlanName', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Place Name ', field: 'PlaceOfSupply', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Address ', field: 'Address', 'width': 100,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Total Amount ', field: 'TotalAmount', 'width': 120
    },
    //{
    //  headerName: 'TDS Amount ', field: 'TdsAmount', 'width': 100
    //},
    {
      headerName: 'Admin Charges', field: 'AdminChargesAmt', 'width': 130
    },
    {
      headerName: 'Grand Total', field: 'GrandTotal', 'width': 120
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


  constructor(private router: Router, private http: HttpClient, private farmerchikeggbillservice: FarmerchikeggbillService, public dialog: DialogService, private printService: PrintService, public productService: ProductService) { }


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

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'CreateBill');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(FarmerchickeggsbillDetailComponent, { modalConfig: { title: 'Add/Edit sale', width: '90%'},isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.farmerchikeggbillservice.loadFarmerchickeggbillMaster().subscribe(
      (response) => {
        this.rowData = response;
      });
  }

  delete(salebill) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.PRODUCT_FARMER_CHICKEGGBILL_API.DELETE, salebill, httpOptions)
        .subscribe((salebill) => {
          this.RefreshGrid();
        });
    }
  }

}





