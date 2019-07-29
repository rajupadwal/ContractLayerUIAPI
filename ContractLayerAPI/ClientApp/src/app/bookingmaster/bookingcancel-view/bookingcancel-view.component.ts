import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { BookingcancelDetailsComponent } from '../bookingcancel-details/bookingcancel-details.component';
import { BookingcancelService } from './bookingcancel.service';

@Component({
  selector: 'app-bookingcancel-view',
  templateUrl: './bookingcancel-view.component.html',
  styleUrls: ['./bookingcancel-view.component.css']
})
export class BookingcancelViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log (param);
}

  columnDefs = [
    {
      headerName: 'Button Col 1', 'width':100,
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Click 1'
      }
    },
    {
      headerName: 'RecordNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 150
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(BookingcancelDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Booking Cancel' } });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 150,

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
    { headerName: 'Location Name ', field: 'Location.LocationName', 'width': 150 },
    {
      headerName: 'Customer Name', field: 'Customer.CustmerName', ' width': 150
    },
    {
      headerName: 'BookingDate ', field: 'BookungCancelDate', 'width': 100
    },
    {
      headerName: 'Plan    ', field: 'Plan.PlanName', 'width': 100
    },
    { headerName: 'NoOfPlan    ', field: 'NoOfPlan' },
    { headerName: 'NoOfChicks    ', field: 'NoOfChicks' },
    { headerName: 'Amount    ', field: 'Amonut' }
    
  ];

  rowData;
    
  constructor(private router: Router, private http: HttpClient, private bookingcancelService: BookingcancelService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    return this.http.get(APP_CONSTANT.BOOKINGCANCEL_API.GETALL, httpOptions)
      .subscribe((bookingcancel: any) => {
        this.rowData = bookingcancel;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(BookingcancelDetailsComponent, { modalConfig: { title: 'Add/Edit Booking Cancel Order' } });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.BOOKINGCANCEL_API.GETALL, httpOptions)
      .subscribe((bookingcancel: any) => {
        this.rowData = bookingcancel;
      });
  }

  delete(bookingcancel) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(APP_CONSTANT.BOOKINGCANCEL_API.DELETE, bookingcancel, httpOptions)
      .subscribe((bookingcancel) => {
        this.RefreshGrid();
      });
  }
}


  


