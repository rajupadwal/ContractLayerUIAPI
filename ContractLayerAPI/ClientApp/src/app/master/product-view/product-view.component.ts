import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { ProductService } from './product.service';
import { DialogService } from '../../dialog/dialog.service';
import { ProductMasterComponent } from '../product-master/product-master.component';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);

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
          const ref = this.dialog.open(ProductMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Product Details Master' },isEditable: true });
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
        newTH.innerHTML = ' <i class="pi pi-trash"></i>';
        newTH.onclick = () => {
          this.delete(params.data);

        };
        return newTH;
      },
    },
    {
      headerName: 'SrNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'PkId', 'width': 50
    },

    { headerName: 'Product Name ', field: 'Product.ProductName', 'width': 100 },
    {
      headerName: 'ProductType', field: 'ProductType',' width': 100 },
    {
      headerName: 'HSNSAC ', field: 'Hsnsac' ,'width': 100},
    {
      headerName: 'Unit ', field: 'Unit.UnitDescription', 'width': 100},

    { headerName: 'PurchasePrice', field: 'PurchasePrice', 'width': 100 },
    {
      headerName: 'SellingPrice ', field: 'SellingPrice', 'width': 100
    },
    {
      headerName: 'CGST ', field: 'Cgst', 'width': 100
    },

    { headerName: 'SGST', field: 'Sgst', 'width': 100 },
    {
      headerName: 'IGST ', field: 'Igst', 'width': 100
    },
    {
      headerName: 'MinimumQty ', field: 'MinimumQty', 'width': 100
    },

    { headerName: 'OpeningStock', field: 'OpeningStock', 'width': 100 },
    
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private productService: ProductService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.PRODUCT_API.GETALL,  httpOptions)
      .subscribe((product:any) => {
        this.rowData = product;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(ProductMasterComponent, { modalConfig: { title: 'Add/Edit Product Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.PRODUCT_API.GETALL, httpOptions)
      .subscribe((product : any) => {
        this.rowData = product ;
      });
  }

  delete(product) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(APP_CONSTANT.PRODUCT_API.DELETE, product, httpOptions)
      .subscribe((product) => {
        this.RefreshGrid();
      });
  }
}

  


