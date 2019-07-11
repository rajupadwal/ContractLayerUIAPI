import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.component.html',
  styleUrls: ['./booking-view.component.css']
})
export class BookingViewComponent implements OnInit {

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
      headerName: 'RecordNo', headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      field: 'RecordNo', 'width': 150
    },

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'widht': 50,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(BookingDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Booking Order' } });
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
    { headerName: 'Location Name ', field: 'LocationId', 'width': 150 },
    {
      headerName: 'Customer Name', field: 'CustomerId', ' width': 150
    },
    {
      headerName: 'BookingDate ', field: 'BookingDate', 'width': 100
    },
    {
      headerName: 'Plan    ', field: 'PlanId', 'width': 100
    },
    { headerName: 'NoOfPlan    ', field: 'NoOfPlan' },
    { headerName: 'NoOfChicks    ', field: 'NoOfChicks' },
    { headerName: 'Amount    ', field: 'Amount' }
  ];

  rowData = [

  ];

  constructor(private router: Router, private http: HttpClient, private bookingService: BookingService, public dialog: DialogService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    return this.http.get(APP_CONSTANT.BOOKING_API.GETALL, httpOptions)
      .subscribe((booking: any) => {
        this.rowData = booking;
      });
  }
  redirectToAddNew() {
    const ref = this.dialog.open(BookingDetailsComponent, { modalConfig: { title: 'Add/Edit Booking Order' } });
    ref.afterClosed.subscribe(result => {
      // this.rowData.push(result); //TODO this should be implemented like this
      this.RefreshGrid();
    });
  }

  RefreshGrid = () => {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get(APP_CONSTANT.BOOKING_API.GETALL, httpOptions)
      .subscribe((booking: any) => {
        this.rowData = booking;
      });
  }

  delete(booking) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(APP_CONSTANT.BOOKING_API.DELETE, booking, httpOptions)
      .subscribe((booking) => {
        this.RefreshGrid();
      });
  }
}





