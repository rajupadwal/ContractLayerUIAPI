import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { DialogConfig } from '../../dialog/dialog-config';
import { DialogRef } from '../../dialog/dialog-ref';
import { ExpencedetailsMasterComponent } from '../expencedetails-master/expencedetails-master.component';
import { ExpencedetailsService } from './expencedetails.service';


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
    //{

    //  headerName: 'Button Col 1', 'width': 100,
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
          const ref = this.dialog.open(ExpencedetailsMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Expence Details' } });
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
        newTH.innerHTML = 'DELETE';
        newTH.className = "pi pi-times";
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
      field: 'ExpencesNo', 'width': 150
    },

    
    { headerName: 'Date ', field: 'Date', 'width': 130 },
    {
      headerName: 'Expence Type', field: 'Expence.ExpenceType', ' width': 80
    },
    {
      headerName: 'Location Name ', field: 'Location.LocationName', 'width': 100
    },
    {
      headerName: 'Employee Name    ', field: 'Employee.EmployeeName', 'width': 100
    },
    { headerName: 'PaymentMethod           ', field: 'PaymentMethod', 'width': 100 },

    { headerName: 'ChequeNo           ', field: 'ChequeNo', 'width': 100 },
    { headerName: 'Amount           ', field: 'Amount', 'width': 100 },
    { headerName: 'Narration           ', field: 'Narration', 'width': 100 }


  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private ExpencedetailsService: ExpencedetailsService, public dialog: DialogService, private config: DialogConfig, public dialogref: DialogRef) { }

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


    return this.http.post(APP_CONSTANT.EXPENCEDETAILS_API.DELETE, expencedetails, httpOptions)
      .subscribe((expencedetails) => {
        this.RefreshGrid();
      });
  }


  redirectToAddNew() {
    const ref = this.dialog.open(ExpencedetailsMasterComponent, { modalConfig: { title: 'Add/Edit Expence Details' } });
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








