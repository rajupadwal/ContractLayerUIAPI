import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { EmployeeService } from './employee.service';
import { DialogService } from '../../dialog/dialog.service';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';
import { ProductService } from '../product-view/product.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
}
 
  columnDefs = [
     
    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(EmployeeInfoComponent, { data: params.data, modalConfig: { title: 'Add/Edit Employee' },isEditable: true });
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
      headerName: 'Sr.No', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'EmployeeId', 'width': 100
    },

    
    { headerName: 'Employee Name ', field: 'EmployeeName', 'width': 150 },
    {
      headerName: 'Mobile No', field: 'PersonalContactNo','width': 150 },
    {
      headerName: 'Address ', field: 'Address' ,'width': 100},
    {
      headerName: 'Education Details    ', field: 'EducationDetails','width': 100 },
    { headerName: 'Past Work Exp           ', field: 'PastWorkExp' },
    { headerName: 'Location           ', field: 'Location.LocationName' }
    
  ];

  rowData = [
   
  ];
    
  constructor(private router: Router, private http: HttpClient, private employeeService: EmployeeService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    return this.http.get(APP_CONSTANT.EMPLOYEE_API.GETALL, httpOptions)
      .subscribe((employee: any) => {
        this.rowData = employee;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'EmployeeDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(EmployeeInfoComponent, { modalConfig: { title: 'Add/Edit Employee' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.EMPLOYEE_API.GETALL, httpOptions)
      .subscribe((employee: any) => {
        this.rowData = employee;
      });
  }

  delete(employee) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.EMPLOYEE_API.DELETE, employee, httpOptions)
        .subscribe((employee) => {
          this.RefreshGrid();
        });
    }
  }
}


  


