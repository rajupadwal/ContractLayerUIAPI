import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { ExpencetypeMasterComponent } from '../expencetype-master/expencetype-master.component';
import { from } from 'rxjs';
import { ExpencetypeService } from './expencetype.service';
@Component({
  selector: 'app-expencetype-view',
  templateUrl: './expencetype-view.component.html',
  styleUrls: ['./expencetype-view.component.css']
})
export class ExpencetypeViewComponent implements OnInit {

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
          const ref = this.dialog.open(ExpencetypeMasterComponent, { data: params.data, modalConfig: { title: 'Add/Edit Expence TYpe Master' },isEditable: true });
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
      field: 'ExpenceId', 'width': 150
    },

    

    { headerName: 'Expence Type ', field: 'ExpenceType', 'width': 400 }
    
  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private expencetypeservice: ExpencetypeService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.EXPENCETYPE_API.GETALL, httpOptions)
      .subscribe((expencetype: any) => {
        this.rowData = expencetype;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(ExpencetypeMasterComponent, { modalConfig: { title: 'Add/Edit Expence TYpe Master' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.EXPENCETYPE_API.GETALL, httpOptions)
      .subscribe((expencetype: any) => {
        this.rowData = expencetype;
      });
  }

  delete(expencetype) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;


    return this.http.post(APP_CONSTANT.EXPENCETYPE_API.DELETE, expencetype, httpOptions)
      .subscribe((expencetype) => {
        this.RefreshGrid();
      });
  }
}






