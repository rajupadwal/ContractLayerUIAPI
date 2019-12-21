import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { from } from 'rxjs';
import { ProductService } from '../product-view/product.service';
import { BankMasterComponent } from '../bank-master/bank-master.component';
import { BankService } from './bank.service';
//import "ag-grid-enterprise";

@Component({
  selector: 'app-bank-view',
  templateUrl: './bank-view.component.html',
  styleUrls: ['./bank-view.component.css']
})
export class BankViewComponent implements OnInit {

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
          const ref = this.dialog.open(BankMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Bank Master', width: '60%'},isEditable: true });
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
      field: 'BankId', 'width': 150
    },

    {
      headerName: 'Bank Name ', field: 'BankName', 'width': 580,
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

  constructor(private router: Router, private http: HttpClient, private bankservice: BankService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.BANKMASTER_API.GETALL, httpOptions)
      .subscribe((bankdetails: any) => {
        this.rowData = bankdetails;
      });
  }


  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'BankName');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(BankMasterComponent, { modalConfig: { title: 'Add/Edit Bank Master', width: '60%' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.BANKMASTER_API.GETALL, httpOptions)
      .subscribe((bankdetails: any) => {
        this.rowData = bankdetails;
      });
  }

  delete(bankdetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;

    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.BANKMASTER_API.DELETE, bankdetails, httpOptions)
        .subscribe((bankdetails) => {
          this.RefreshGrid();
        });
    }
  }
  
}






