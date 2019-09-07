import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { BookingService } from './booking.service';
import * as moment from 'moment';
import { ProductService } from '../../master/product-view/product.service';

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

  private gridApi;
  private gridColumnApi;


  columnDefs = [

    {
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(BookingDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Booking Order' }, isEditable: true });
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
        //newTH.className = "pi pi-times";
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
      field: 'RecordNo', 'width': 130,
      filter: "agNumberColumnFilter"
    },
    {
      headerName: 'Location', field: 'Location.LocationName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Customer Name', field: 'Customer.CustmerName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Booking Date ', field: 'BookingDate', valueFormatter: this.dateFormatter, 'width': 180,
      filter: "agDateColumnFilter",
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateAsString = moment(cellValue).format('DD/MM/YYYY');
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split("/");
          var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
          if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true
      }
    },
    {
      headerName: 'Plan Name', field: 'Plan.PlanName', 'width': 100,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Unit Manager', field: 'Employee.EmployeeName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    { headerName: 'No Of Plan', field: 'NoOfPlan', 'width': 100 },
    { headerName: 'Plan Cancel', field: 'NoOfPlanCancel', 'width': 120 },
    { headerName: 'No Of Chicks', field: 'NoOfChicks', 'width': 120 },
    { headerName: 'Amount', field: 'Amount', 'width': 100 },
    { headerName: 'Paid Amount', field: 'PaidAmount', 'width': 130 },
    { headerName: 'Delivery Status    ', field: 'DeliveryStatus', 'width': 130 }
  ];

  defaultColDef = {
    sortable: true,
    filter: true


  };

  rowData;

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.ngOnInit();
  }

  dateFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY');
  }

  constructor(private router: Router, private http: HttpClient, private bookingService: BookingService, public dialog: DialogService, public productService: ProductService) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(APP_CONSTANT.BOOKING_API.GETALL, httpOptions)
      .subscribe((booking: any) => {
        this.rowData = booking;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'BookingDetails');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(BookingDetailsComponent, { modalConfig: { title: 'Add/Edit Booking Order' }, isEditable: false });
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
    if (confirm("Are you sure do you want to delete record?")) {

      return this.http.post(APP_CONSTANT.BOOKING_API.DELETE, booking, httpOptions)
        .subscribe((booking) => {
          this.RefreshGrid();
        });
    }
  }
}





