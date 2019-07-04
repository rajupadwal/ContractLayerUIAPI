import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { LocationService } from './location.service';



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

      headerName: 'Button Col 1', 'width': 100,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },

    {
      headerName: 'LocationId', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'locationId', 'width': 150


    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'widht': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = 'EDIT';
        newTH.className = "glyphicon glyphicon-pencil";
        newTH.onclick = function () {
          alert('Win' + params.data.locationId);
        };
        return newTH;
      },
    },
    //{ headerName: 'CustomerId', field: 'CustomerId' },
    { headerName: 'LocationName ', field: 'locationName', 'width': 150 },
    {
      headerName: 'LocationCode', field: 'locationCode', ' width': 150
    },
    {
      headerName: 'PinCode ', field: 'pinCode', 'width': 100
    },
    {
      headerName: 'Address    ', field: 'address', 'width': 100
    },
    { headerName: 'Remarks           ', field: 'remarks', 'width': 100},
    
    { headerName: 'ContactNo           ', field: 'contactNo', 'width': 100 }

  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private LocationService: LocationService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    //let customer = this.customerForm.value;

    return this.http.get(APP_CONSTANT.LOCATION_API.GETALL, httpOptions)
      .subscribe((location: any) => {
        this.rowData = location;
      });
  }
  redirectToAddNew() {
    this.router.navigateByUrl('/master/Locationview/locationinfo');
  }
}





