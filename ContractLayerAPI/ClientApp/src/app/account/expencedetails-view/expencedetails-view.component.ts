import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogRef } from '../../dialog/dialog-ref';
import { ExpencedetailsMasterComponent } from '../expencedetails-master/expencedetails-master.component';
import { ExpencedetailsService } from './expencedetails.service';
import { ProductService } from '../../master/product-view/product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-expencedetails-view',
  templateUrl: './expencedetails-view.component.html',
  styleUrls: ['./expencedetails-view.component.css']
})
export class ExpencedetailsViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);

  }


  columnDefs = [

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(ExpencedetailsMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Expence Details' },isEditable: true });
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
      headerName: 'Expence No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'ExpencesNo', 'width': 140
    },
    { headerName: 'Date ', field: 'Date', valueFormatter: this.dateFormatter,'width': 120 },
    {
      headerName: 'Expence Type', field: 'Expence.ExpenceType', 'width': 120
    },
    {
      headerName: 'Location', field: 'Location.LocationName', 'width': 120
    },
    {
      headerName: 'Employee Name', field: 'Employee.EmployeeName', 'width': 140
    },
    { headerName: 'Payment Method', field: 'PaymentMethod', 'width': 160 },

    { headerName: 'Cheque No           ', field: 'ChequeNo', 'width': 120 },
    { headerName: 'Amount           ', field: 'Amount', 'width': 120 },
    { headerName: 'Narration           ', field: 'Narration', 'width': 160 }


  ];

  rowData = [

  ];

  dateFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY');
  }

  constructor(private router: Router, private http: HttpClient, private ExpencedetailsService: ExpencedetailsService, public dialog: DialogService, private config: DialogConfig, public dialogref: DialogRef, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    //let customer = this.customerForm.value;

    return this.http.get(APP_CONSTANT.EXPENCEDETAILS_API.GETALL, httpOptions)
      .subscribe((expencedetails: any) => {
        this.rowData = expencedetails;
      });
  }
  delete(expencedetails) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.EXPENCEDETAILS_API.DELETE, expencedetails, httpOptions)
        .subscribe((expencedetails) => {
          this.RefreshGrid();
        });
    }
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'ExpenceDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(ExpencedetailsMasterComponent, { modalConfig: { title: 'Add/Edit Expence Details' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.EXPENCEDETAILS_API.GETALL, httpOptions)
      .subscribe((expencedetails: any) => {
        this.rowData = expencedetails;
      });
  }

  dataSavedInSupplierComponent(event) {
    alert('supplier saved');
  }

}








