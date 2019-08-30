import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { LocationService } from './location.service';
import { DialogService } from '../../dialog/dialog.service';
import { DialogConfig } from "src/app/dialog/dialog-config";
import { LocationInfoComponent } from '../location-info/location-info.component';
import { DialogRef } from '../../dialog/dialog-ref';
import { ProductService } from '../product-view/product.service';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {

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
          const ref = this.dialog.open(LocationInfoComponent, { data: params.data, modalConfig: { title: 'Add/Edit Location' },isEditable: true });
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
      field: 'LocationId', 'width': 100
    },

    
    { headerName: 'Location Name', field: 'LocationName', 'width': 100 },
    {
      headerName: 'Location Code', field: 'LocationCode', 'width': 100
    },
    {
      headerName: 'Pin Code ', field: 'PinCode', 'width': 100
    },
    {
      headerName: 'Address    ', field: 'Address', 'width': 100
    },
    { headerName: 'Remarks           ', field: 'Remarks', 'width': 100},
    
    { headerName: 'ContactNo           ', field: 'ContactNo', 'width': 100 }

  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private LocationService: LocationService, public dialog: DialogService, private config: DialogConfig, public dialogref: DialogRef, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.LOCATION_API.GETALL, httpOptions)
      .subscribe((location: any) => {
        this.rowData = location;
      });
  }
  delete(location) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.LOCATION_API.DELETE, location, httpOptions)
        .subscribe((location) => {
          this.RefreshGrid();
        });
    }
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'EmployeeDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(LocationInfoComponent, { modalConfig: { title: 'Add/Edit Location' },isEditable: false });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }
 

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.LOCATION_API.GETALL, httpOptions)
      .subscribe((location: any) => {
        this.rowData = location;
      });
  }
}





