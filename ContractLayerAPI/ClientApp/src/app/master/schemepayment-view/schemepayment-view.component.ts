import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { from } from 'rxjs';
import { SchemepaymentDetailsComponent } from '../schemepayment-details/schemepayment-details.component';
import { SchemePaymentService } from './schemepayment.service';
//import "ag-grid-enterprise";

@Component({
  selector: 'app-schemepayment-view',
  templateUrl: './schemepayment-view.component.html',
  styleUrls: ['./schemepayment-view.component.css']
})
export class SchemepaymentViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  private gridApi;
  private gridColumnApi;
  private excelStyles;

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
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(SchemepaymentDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Scheme Payment', width: '60%' }, isEditable: true });
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
        newTH.innerHTML = ' <i class="pi pi-trash" style="font-size: initial;"></i>';
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },
    {
      headerName: 'Sr.No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'SrNo', 'width': 150
    },

    {
      headerName: 'Amount ', field: 'Amount', 'width': 280,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    }

  ];

  defaultColDef = {
    sortable: true,
    filter: true
  };

  rowData = [

  ];

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.expandAll();

    this.ngOnInit();
  }

  onBtExport() {
    var params = {
      fileName: ' ',
      sheetName: ' '
    };
    this.gridApi.exportDataAsExcel(params);
  }

  constructor(private router: Router, private http: HttpClient, private schemepaymentservice: SchemePaymentService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.SCHEMEPAYMENTDETAILS_API.GETALL, httpOptions)
      .subscribe((schemepaymentdetails: any) => {
        this.rowData = schemepaymentdetails;
      });
  }


  exportAsXLSX(): void {
    //this.productService.exportAsExcelFile(this.rowData, 'BankName');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(SchemepaymentDetailsComponent, { modalConfig: { title: 'Add/Edit Scheme Payment', width: '60%' }, isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.SCHEMEPAYMENTDETAILS_API.GETALL, httpOptions)
      .subscribe((schemepaymentdetails: any) => {
        this.rowData = schemepaymentdetails;
      });
  }

  delete(schemepaymentdetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;

    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.SCHEMEPAYMENTDETAILS_API.DELETE, schemepaymentdetails, httpOptions)
        .subscribe((schemepaymentdetails) => {
          this.RefreshGrid();
        });
    }
  }

}




























































 
