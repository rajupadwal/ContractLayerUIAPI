import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { SupplierService } from './supplier.service';



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
      field: 'supplierId', 'width': 150


    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'widht': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'EDIT';
        newTH.className = "glyphicon glyphicon-pencil";
        newTH.onclick = function () {
          alert('Win' + params.data.supplierId);
        };
        return newTH;
      },
    },
    //{ headerName: 'CustomerId', field: 'CustomerId' },
    { headerName: 'SupplierName ', field: 'supplierName', 'width': 150 },
    {
      headerName: 'SupplierMobileNo', field: 'supplierMobileNo', ' width': 150
    },
    {
      headerName: 'State ', field: 'state', 'width': 100
    },
    {
      headerName: 'Address    ', field: 'address', 'width': 100
    },
    { headerName: 'District           ', field: 'district', 'width': 100 },

    { headerName: 'Taluka           ', field: 'taluka', 'width': 100 }

  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private SupplierService: SupplierService) { }

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
  redirectToAddNew() {
    this.router.navigateByUrl('/master/Supplierview/suppliermaster');
  }
}





