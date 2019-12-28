import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { from } from 'rxjs';
import { BeneficieryDetailsComponent } from '../beneficiery-details/beneficiery-details.component';
//import "ag-grid-enterprise";

@Component({
  selector: 'app-beneficiery-view',
  templateUrl: './beneficiery-view.component.html',
  styleUrls: ['./beneficiery-view.component.css']
})
export class BeneficieryViewComponent implements OnInit {

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
          const ref = this.dialog.open(BeneficieryDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Beneficiery Master' }, isEditable: true });
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
      field: 'BeneficiaryId', 'width': 150
    },
    {
      headerName: 'Name ', field: 'Name', 'width': 280,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Address ', field: 'Address', 'width': 160,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'State Name ', field: 'State.StateName', 'width': 160,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'District Name ', field: 'District.DistrictName', 'width': 160,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Taluka Name ', field: 'Taluka.TalukaName', 'width':160,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Caste ', field: 'Caste.CasteName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'SubCasteName ', field: 'Subcaste.SubCasteName', 'width': 120,
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

  constructor(private router: Router, private http: HttpClient, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.BENEFICIERYMASTER_API.GETALL, httpOptions)
      .subscribe((beneficierydetails: any) => {
        this.rowData = beneficierydetails;
      });
  }

  exportAsXLSX(): void {
    //this.productService.exportAsExcelFile(this.rowData, 'BankName');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(BeneficieryDetailsComponent, { modalConfig: { title: 'Add/Edit Beneficiery Master'}, isEditable: false });
    ref.afterClosed.subscribe(result => {
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.BENEFICIERYMASTER_API.GETALL, httpOptions)
      .subscribe((beneficierydetails: any) => {
        this.rowData = beneficierydetails;
      });
  }

  delete(beneficierydetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.BENEFICIERYMASTER_API.DELETE, beneficierydetails, httpOptions)
        .subscribe((beneficierydetails) => {
          this.RefreshGrid();
        });
    }
  }
}






































