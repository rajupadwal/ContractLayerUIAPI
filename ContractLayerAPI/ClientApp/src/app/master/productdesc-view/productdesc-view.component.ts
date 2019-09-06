import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { ProductdescService } from './productdesc.service';
import { DialogService } from '../../dialog/dialog.service';
import { ProductdescMasterComponent } from '../productdesc-master/productdesc-master.component';

@Component({
  selector: 'app-productdesc-view',
  templateUrl: './productdesc-view.component.html',
  styleUrls: ['./productdesc-view.component.css']
})
export class ProductdescViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
  
}
  private gridApi;
  private gridColumnApi;

  columnDefs = [
    //{
    //  headerName: 'Button Col 1', 'width':100,
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
          const ref = this.dialog.open(ProductdescMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Product Description Master' },isEditable: true });
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
      field: 'ProductId', 'width': 130
    },

    
    {
      headerName: 'Product Name ', field: 'ProductName', 'width': 650,

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
    
  constructor(private router: Router, private http: HttpClient, private productdescService: ProductdescService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PRODUCTDESC_API.GETALL,  httpOptions)
      .subscribe((productdesc:any) => {
        this.rowData = productdesc;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(ProductdescMasterComponent, { modalConfig: { title: 'Add/Edit Product Description Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.PRODUCTDESC_API.GETALL, httpOptions)
      .subscribe((productdesc: any) => {
        this.rowData = productdesc;
      });
  }
  delete(productdesc) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.PRODUCTDESC_API.DELETE, productdesc, httpOptions)
        .subscribe((productdesc) => {
          this.RefreshGrid();
        });
    }
  }
}


  


