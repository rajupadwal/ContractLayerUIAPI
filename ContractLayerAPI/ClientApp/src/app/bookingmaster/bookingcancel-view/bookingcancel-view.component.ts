import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import { BookingcancelDetailsComponent } from '../bookingcancel-details/bookingcancel-details.component';
import { BookingcancelService } from './bookingcancel.service';
import * as moment from 'moment';
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
import { ProductService } from '../../master/product-view/product.service';

@Component({
  selector: 'app-bookingcancel-view',
  templateUrl: './bookingcancel-view.component.html',
  styleUrls: ['./bookingcancel-view.component.css']
})
export class BookingcancelViewComponent implements OnInit {

  onBtnClick1 = (param) => {
    alert('i am clicked');
    console.log(param);
  }

  private gridApi;
  private gridColumnApi;

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
      headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 80,

      cellRenderer: (params) => {
        var newTH = document.createElement('div');
        newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
        newTH.onclick = () => {
          const ref = this.dialog.open(BookingcancelDetailsComponent, { data: params.data, modalConfig: { title: 'Add/Edit Booking Cancel' }, isEditable: true });
          ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
          });
        };
        return newTH;
      },
    },
    {
      headerName: 'Delete', 'width': 80,

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
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },

    {
      headerName: 'Location', field: 'Location.LocationName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Customer Name', field: 'Customer.CustmerName', ' width': 150,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith" }
    },
    {
      headerName: 'Cancel Date ', field: 'BookungCancelDate', valueFormatter: this.dateFormatter, 'width': 180,
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
      headerName: 'Plan', field: 'Plan.PlanName', 'width': 120,
      filter: "agTextColumnFilter",
      filterParams: { defaultOption: "startsWith", 'width': 120 }
    },
    { headerName: 'No Of Plan', field: 'NoOfPlan', 'width': 120 },
    { headerName: 'Plan Cancel', field: 'CancelNoOfPlan', 'width': 120 },
    { headerName: 'No Of Chicks    ', field: 'NoOfChicks', 'width': 120 },
    { headerName: 'Amount    ', field: 'Amonut', 'width': 120 }

  ];

  rowData;

  defaultColDef = {
    sortable: true,
    filter: true
  };

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.ngOnInit();
  }

  dateFormatter(params) {
    return moment(params.value).format('DD/MM/YYYY');
  }

  constructor(private router: Router, private http: HttpClient, private bookingcancelService: BookingcancelService, public dialog: DialogService, public productService: ProductService ) { }

  ngOnInit() {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    return this.http.get(APP_CONSTANT.BOOKINGCANCEL_API.GETALL, httpOptions)
      .subscribe((bookingcancel: any) => {
        this.rowData = bookingcancel;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'BookingCancel');
  }

  redirectToAddNew() {
    const ref = this.dialog.open(BookingcancelDetailsComponent, { modalConfig: { title: 'Add/Edit Booking Cancel Order' }, isEditable: false });
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
    if (confirm("Are you sure do you want to delete record?")) {
      return this.http.post(APP_CONSTANT.BOOKINGCANCEL_API.DELETE, bookingcancel, httpOptions)
        .subscribe((bookingcancel) => {
          this.RefreshGrid();
        });
    }
  }
}





