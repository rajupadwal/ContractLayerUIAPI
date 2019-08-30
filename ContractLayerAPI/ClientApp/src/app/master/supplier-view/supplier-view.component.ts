import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { SupplierService } from './supplier.service';
import { DialogService } from '../../dialog/dialog.service';
import { SupplierMasterComponent } from '../supplier-master/supplier-master.component';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogRef } from '../../dialog/dialog-ref';
import { ProductService } from '../product-view/product.service';


@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.css']
})
export class SupplierViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);

  }


  columnDefs = [
     
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 100,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(SupplierMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Supplier' },isEditable: true });
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
      field: 'SupplierId', 'width': 150
    },
         
    { headerName: 'Supplier Name ', field: 'SupplierName', 'width': 150 },
    {
      headerName: 'Supplier Mobile No', field: 'SupplierMobileNo', 'width': 150
    },
    { headerName: 'Address    ', field: 'Address', 'width': 100 },
    {
      headerName: 'State ', field: 'State', 'width': 100
    },
    { headerName: 'Taluka           ', field: 'Taluka', 'width': 100 },
    { headerName: 'District           ', field: 'District', 'width': 100 },

    { headerName: 'City           ', field: 'City', 'width': 100 },
    { headerName: 'Pincode           ', field: 'Pincode', 'width': 100 },
    
    { headerName: 'RegistrationNo           ', field: 'RegistrationNo', 'width': 100 },
    { headerName: 'GstNo           ', field: 'GstNo', 'width': 100 },
    { headerName: 'PanNo           ', field: 'PanNo', 'width': 100 },
    { headerName: 'BankName           ', field: 'BankName', 'width': 100 },
    { headerName: 'AccountNo           ', field: 'AccountNo', 'width': 100 },
    { headerName: 'IfscCode           ', field: 'IfscCode', 'width': 100 },
    { headerName: 'AccountType           ', field: 'AccountType', 'width': 100 }

  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private SupplierService: SupplierService, public dialog: DialogService, private config: DialogConfig, public dialogref: DialogRef, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    //let customer = this.customerForm.value;

    return this.http.get(APP_CONSTANT.SUPPLIER_API.GETALL, httpOptions)
      .subscribe((supplier: any) => {
        this.rowData = supplier;
      });
  }
  delete(supplier) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.SUPPLIER_API.DELETE, supplier, httpOptions)
        .subscribe((supplier) => {
          this.RefreshGrid();
        });
    }
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'SupplieMaster');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(SupplierMasterComponent, { modalConfig: { title: 'Add/Edit Supplier' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.SUPPLIER_API.GETALL, httpOptions)
      .subscribe((supplier: any) => {
        this.rowData = supplier;
      });
  }

  dataSavedInSupplierComponent(event) {
    alert('supplier saved');
  }

}







