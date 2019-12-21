import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { BranchMasterComponent } from '../branch-master/branch-master.component';


@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.css']
})
export class BranchViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);

  }
  private gridApi;
  private gridColumnApi;

  columnDefs = [

       
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(BranchMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Branch Master' },isEditable: true });
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
      headerName: 'Sr No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'BranchId', 'width': 110
    },

    {
      headerName: 'Bank Name ', field: 'Bank.BankName', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Branch Name', field: 'BranchName', 'width': 180,

      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'IFSC Code ', field: 'IfscCode', 'width': 130,

      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }},
    
  ];
  defaultColDef = {
    sortable: true,
    filter: true
  };

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.BRANCH_API.GETALL,  httpOptions)
      .subscribe((branch:any) => {
        this.rowData = branch;
      });
  }

  exportAsXLSX(): void {
    //this.productService.exportAsExcelFile(this.rowData, 'BranchDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(BranchMasterComponent, { modalConfig: { title: 'Add/Edit Branch Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.BRANCH_API.GETALL, httpOptions)
      .subscribe((branch : any) => {
        this.rowData = branch ;
      });
  }

  delete(branch) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.BRANCH_API.DELETE, branch, httpOptions)
        .subscribe((branch) => {
          this.RefreshGrid();
        });
    }
  }
}

  


