import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { SupplierService } from './supplier.service';
import { DialogService } from '../../dialog/dialog.service';
import { SupplierMasterComponent } from '../supplier-master/supplier-master.component';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogRef } from '../../dialog/dialog-ref';


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

      headerName: 'Button Col 1', 'width': 100,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },

    {
      headerName: 'SupplierId', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'SupplierId', 'width': 150
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'EDIT';
        newTH.className = 'pi pi - pencil';
        newTH.onclick = () => {
          const ref = this.dialog.open(SupplierMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Supplier' } });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },

    {
      headerName: 'Delete',  'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'EDIT';
        newTH.className = "pi pi-times";
        newTH.onclick = () => {
          this.delete(params.data);
         
        };
        return newTH;
      },
    },

    { headerName: 'SupplierName ', field: 'SupplierName', 'width': 150 },
    {
      headerName: 'SupplierMobileNo', field: 'SupplierMobileNo', ' width': 150
    },
    {
      headerName: 'State ', field: 'State', 'width': 100
    },
    {
      headerName: 'Address    ', field: 'Address', 'width': 100
    },
    { headerName: 'District           ', field: 'District', 'width': 100 },

    { headerName: 'Taluka           ', field: 'Taluka', 'width': 100 }

  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private SupplierService: SupplierService, public dialog: DialogService, private config: DialogConfig, public dialogref: DialogRef) { }

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
    

    return this.http.post( APP_CONSTANT.SUPPLIER_API.DELETE, supplier, httpOptions)
      .subscribe((supplier) => {
        this.RefreshGrid();
      });
  }


  redirectToAddNew() {
    const ref = this.dialog.open(SupplierMasterComponent, { modalConfig: { title: 'Add/Edit Supplier' } });
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






