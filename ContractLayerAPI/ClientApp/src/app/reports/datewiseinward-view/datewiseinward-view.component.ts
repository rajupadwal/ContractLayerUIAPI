import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import * as moment from 'moment';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { PrintService } from '../../printing/print.service';
import { ProductService } from '../../master/product-view/product.service';
import { DatewiseinwardService } from './datewiseinward.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-datewiseinward-view',
  templateUrl: './datewiseinward-view.component.html',
  styleUrls: ['./datewiseinward-view.component.css']
})
export class DatewiseinwardViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public customerList = [];
  farmerinwarddetailsForm: FormGroup;

  columnDefs = [
    {
      headerName: 'Date', field: 'TransactionDate', valueFormatter: this.dateFormatter, 'width': 150,
    },
    {
      headerName: 'Customer Name ', field: 'CustomerName', 'width': 200,
    },
    {
      headerName: 'PlanName ', field: 'PlanName', 'width': 150,
    },
    {
      headerName: 'ProductName', field: 'ProductName','width': 200,
    },
    {
      headerName: 'ProductTypeUnit', field: 'ProductTypeUnit', 'width': 220,
    },
    {
      headerName: 'Quantity', field: 'Quantity', 'width': 150,
    },
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

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, public productService: ProductService, private datewiseinwardService: DatewiseinwardService, private cusotmerService: CusotmerService, private printService: PrintService) { }


  ngOnInit() {

    this.farmerinwarddetailsForm = this.formBuilder.group({
      Customer: [{}],
      StartDate: [],
      EndDate: [],
      CustomerId: [],
    });

    this.searchCustomer("");
  }

  searchCustomer(event) {
    this.cusotmerService.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }

  searchOption() {
    let farmerinwarddetailsForm = this.farmerinwarddetailsForm.value;
    farmerinwarddetailsForm.EmployeeId = farmerinwarddetailsForm.Customer.CustomerId;
    farmerinwarddetailsForm.DateOfJoining = farmerinwarddetailsForm.StartDate;
    farmerinwarddetailsForm.DateOfLeaving = farmerinwarddetailsForm.EndDate;
    this.datewiseinwardService.getFarmerInwardDetails(farmerinwarddetailsForm)
      .subscribe((response: any) => {
        this.rowData = response;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'DatewiseFarmerInward');
  }

  printLedger() {
    this.printService.printDocument("DatewiseFarmerInward", this.rowData);
  }
}
