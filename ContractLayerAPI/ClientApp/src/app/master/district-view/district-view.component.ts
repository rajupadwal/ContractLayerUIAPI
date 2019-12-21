import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { from } from 'rxjs';
import { DistrictMasterComponent } from '../district-master/district-master.component';
import { DistrictService } from './district.service';
//import "ag-grid-enterprise";

@Component({
  selector: 'app-district-view',
  templateUrl: './district-view.component.html',
  styleUrls: ['./district-view.component.css']
})
export class DistrictViewComponent implements OnInit {

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
          const ref = this.dialog.open(DistrictMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit District Master', width: '50%' }, isEditable: true });
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
      field: 'DistrictId', 'width': 150
    },
    {
      headerName: 'State Name ', field: 'State.StateName', 'width': 280,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },

    {
      headerName: 'District Name ', field: 'DistrictName', 'width': 280,
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

  constructor(private router: Router, private http: HttpClient, private districtservice: DistrictService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.DISTRICTMASTER_API.GETALL, httpOptions)
      .subscribe((districtdetails: any) => {
        this.rowData = districtdetails;
      });
  }


  exportAsXLSX(): void {
    //this.productService.exportAsExcelFile(this.rowData, 'BankName');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(DistrictMasterComponent, { modalConfig: { title: 'Add/Edit District Master', width: '50%' }, isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.DISTRICTMASTER_API.GETALL, httpOptions)
      .subscribe((districtdetails: any) => {
        this.rowData = districtdetails;
      });
  }

  delete(districtdetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.DISTRICTMASTER_API.DELETE, districtdetails, httpOptions)
        .subscribe((districtdetails) => {
          this.RefreshGrid();
        });
    }
  }
}






































