import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { EmployeeadvanceDetailsComponent } from '../employeeadvance-details/employeeadvance-details.component';
import { EmployeeadvanceService } from './employeeadvance.service';

@Component({
  selector: 'app-employeeadvance-view',
  templateUrl: './employeeadvance-view.component.html',
  styleUrls: ['./employeeadvance-view.component.css']
})
export class EmployeeadvanceViewComponent implements OnInit {

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
          const ref = this.dialog.open(EmployeeadvanceDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Employee Advance' } });
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
      headerName: 'Record No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 150
    },

    
    { headerName: 'Record Date ', field: 'RecordDate', 'width': 150 },
    { headerName: 'LocationName ', field: 'Location.LocationName', 'width': 150 },
    { headerName: 'Advance ', field: 'Advance', 'width': 150 },
    { headerName: 'Narration ', field: 'Narration', 'width': 150 },
    { headerName: 'EmployeeName ', field: 'Employee.EmployeeName', 'width': 150 },
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private employeeadvanceService: EmployeeadvanceService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(APP_CONSTANT.EMPLOYEEADVANCE_API.GETALL,  httpOptions)
      .subscribe((employeeadvance:any) => {
        this.rowData = employeeadvance;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(EmployeeadvanceDetailsComponent, { modalConfig: { title: 'Add/Edit Employee Advance' } });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.EMPLOYEEADVANCE_API.GETALL, httpOptions)
      .subscribe((employeeadvance: any) => {
        this.rowData = employeeadvance;
      });
  }
  delete(employeeadvance) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.post(APP_CONSTANT.EMPLOYEEADVANCE_API.DELETE, employeeadvance, httpOptions)
      .subscribe((employeeadvance) => {
        this.RefreshGrid();
      });
  }
}


  


