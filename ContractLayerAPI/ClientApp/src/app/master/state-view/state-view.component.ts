import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { from } from 'rxjs';
import { ProductService } from '../product-view/product.service';
import { StateMasterComponent } from '../state-master/state-master.component';
import { StateService } from './state.service';
//import "ag-grid-enterprise";

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

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
          const ref = this.dialog.open(StateMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit State Master', width: '60%'},isEditable: true });
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
      field: 'StateId', 'width': 150
    },

    {
      headerName: 'State Name ', field: 'StateName', 'width': 580,
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

  constructor(private router: Router, private http: HttpClient, private Stateservice: StateService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.STATEMASTER_API.GETALL, httpOptions)
      .subscribe((Statedetails: any) => {
        this.rowData = Statedetails;
      });
  }


  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'StateName');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(StateMasterComponent, { modalConfig: { title: 'Add/Edit State Master', width: '60%' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.STATEMASTER_API.GETALL, httpOptions)
      .subscribe((Statedetails: any) => {
        this.rowData = Statedetails;
      });
  }

  delete(Statedetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;

    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.STATEMASTER_API.DELETE, Statedetails, httpOptions)
        .subscribe((Statedetails) => {
          this.RefreshGrid();
        });
    }
  }
  
}






