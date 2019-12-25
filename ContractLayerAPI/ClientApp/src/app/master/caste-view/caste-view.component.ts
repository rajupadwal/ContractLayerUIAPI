import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { from } from 'rxjs';
import { ProductService } from '../product-view/product.service';
import { CasteMasterComponent } from '../caste-master/caste-master.component';
import { CasteService } from './caste.service';
//import "ag-grid-enterprise";

@Component({
  selector: 'app-caste-view',
  templateUrl: './caste-view.component.html',
  styleUrls: ['./caste-view.component.css']
})
export class CasteViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  private gridApi;
  private gridColumnApi;
  private excelStyles;

  columnDefs = [
   
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(CasteMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Caste Master', width: '60%'},isEditable: true });
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
      field: 'CasteId', 'width': 150
    },

    {
      headerName: 'Caste Name ', field: 'CasteName', 'width': 580,
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

  constructor(private router: Router, private http: HttpClient, private Casteservice: CasteService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.CASTEMASTER_API.GETALL, httpOptions)
      .subscribe((Castedetails: any) => {
        this.rowData = Castedetails;
      });
  }


  exportAsXLSX(): void {
    //this.productService.exportAsExcelFile(this.rowData, 'StateName');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(CasteMasterComponent, { modalConfig: { title: 'Add/Edit Caste Master', width: '60%' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.CASTEMASTER_API.GETALL, httpOptions)
      .subscribe((Castedetails: any) => {
        this.rowData = Castedetails;
      });
  }

  delete(Castedetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.CASTEMASTER_API.DELETE, Castedetails, httpOptions)
        .subscribe((Castedetails) => {
          this.RefreshGrid();
        });
    }
  }
  
}






