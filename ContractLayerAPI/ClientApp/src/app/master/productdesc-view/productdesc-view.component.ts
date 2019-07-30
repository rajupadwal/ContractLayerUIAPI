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
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(ProductdescMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Product Description Master' } });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    {
      headerName: 'Delete', 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'Delete';
        newTH.className = "pi pi-times";
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
      field: 'ProductId', 'width': 100
    },

    
    { headerName: 'Product Name ', field: 'ProductName', 'width': 100 }
     
  ];

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
    const ref = this.dialog.open(ProductdescMasterComponent, { modalConfig: { title: 'Add/Edit Product Description Master' } });
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
    
    return this.http.post(APP_CONSTANT.PRODUCTDESC_API.DELETE, productdesc, httpOptions)
      .subscribe((productdesc) => {
        this.RefreshGrid();
      });
  }
}


  


