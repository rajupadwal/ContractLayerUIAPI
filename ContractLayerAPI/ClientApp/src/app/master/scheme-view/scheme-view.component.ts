import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { ProductService } from '../product-view/product.service';
import { SchemeInfoComponent } from '../scheme-info/scheme-info.component';
import { SchemeService } from './scheme.service';

@Component({
  selector: 'app-scheme-view',
  templateUrl: './scheme-view.component.html',
  styleUrls: ['./scheme-view.component.css']
})
export class SchemeViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  columnDefs = [
    
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(SchemeInfoComponent, { data: params.data, modalConfig: { title: 'Add/Edit Scheme Information Master' },isEditable: true });
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
      field: 'SchemeId', 'width': 100
    },
    { headerName: 'Scheme Name', field: 'SchemeName', 'width': 240 },
    {
      headerName: 'Sanction Order No', field: 'SanctionOrderNo', 'width': 160
    },
    {
      headerName: 'Sanction Date ', field: 'SanctionDate', 'width': 120
    },
    {
      headerName: 'DueDate    ', field: 'DueDate', 'width': 120
    },
     
  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private schemeService: SchemeService, public dialog: DialogService, private config: DialogConfig, public dialogref: DialogRef, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.SCHEME_API.GETALL, httpOptions)
      .subscribe((scheme: any) => {
        this.rowData = scheme;
      });
  }
  delete(scheme) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.SCHEME_API.DELETE, scheme, httpOptions)
        .subscribe((scheme) => {
          this.RefreshGrid();
        });
    }
  }

  exportAsXLSX(): void {
    //this.productService.exportAsExcelFile(this.rowData, 'EmployeeDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(SchemeInfoComponent, { modalConfig: { title: 'Add/Edit Scheme Informaton Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }
 

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.SCHEME_API.GETALL, httpOptions)
      .subscribe((scheme: any) => {
        this.rowData = scheme;
      });
  }
}





