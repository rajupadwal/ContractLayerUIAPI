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
  private gridApi;
  private gridColumnApi;

  columnDefs = [

       
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
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
      headerName: 'Delete', 'width': 50,

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
      field: 'PkId', 'width': 110
    },

    {
      headerName: 'Product Name ', field: 'Product.ProductName', 'width': 130,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Product Type', field: 'ProductType', 'width': 180,

      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'HSN/SAC Code ', field: 'Hsnsac', 'width': 130,

      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }},
    {
      headerName: 'Unit ', field: 'Unit.UnitDescription', 'width': 100},

    {
      headerName: 'Purchase Price', field: 'PurchasePrice', 'width': 130,

      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" } },
    {
      headerName: 'Selling Price ', field: 'SellingPrice', 'width': 130,

      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'CGST % ', field: 'Cgst', 'width': 90
    },

    { headerName: 'SGST %', field: 'Sgst', 'width': 90 },
    {
      headerName: 'IGST % ', field: 'Igst', 'width': 90
    },
    {
      headerName: 'Minimum Qty ', field: 'MinimumQty', 'width': 120
    },

    { headerName: 'Opening Stock', field: 'OpeningStock', 'width': 130 },
    
  ];
  defaultColDef = {
    sortable: true,
    filter: true
  };

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

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'ProductDetails');
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
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.PRODUCT_API.DELETE, product, httpOptions)
        .subscribe((product) => {
          this.RefreshGrid();
        });
    }
  }
}

  


