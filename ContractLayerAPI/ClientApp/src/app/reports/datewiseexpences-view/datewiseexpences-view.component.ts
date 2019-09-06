import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogService } from '../../dialog/dialog.service';
import * as moment from 'moment';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { PrintService } from '../../printing/print.service';
import { ProductService } from '../../master/product-view/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DatewiseexpencesService } from './datewiseexpences.service';
import { ExpencetypeService } from '../../master/expencetype-view/expencetype.service';

@Component({
  selector: 'app-datewiseexpences-view',
  templateUrl: './datewiseexpences-view.component.html',
  styleUrls: ['./datewiseexpences-view.component.css']
})
export class DatewiseexpencesViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public expencetypeList: [];
  datewiseexpencesdetailsForm: FormGroup;

  columnDefs = [
    {
      headerName: 'Date', field: 'TransactionDate', valueFormatter: this.dateFormatter, 'width': 90,
    },
    {
      headerName: 'Expences No', field: 'ExpencesNo', 'width': 120,
    },
    {
      headerName: 'Expence Type ', field: 'ExpenceType', 'width': 140,
    },
    //{
    //  headerName: 'Location Name', field: 'LocationName','width': 140,
    //},
    {
      headerName: 'Employee Name', field: 'EmployeeName', 'width': 160,
    },
    {
      headerName: 'Payment Method', field: 'PaymentMethod', 'width': 150,
    },
    {
      headerName: 'Amount', field: 'Amount', 'width': 100,
    },
    {
      headerName: 'Narration', field: 'Narration', 'width': 140,
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

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, public productService: ProductService,  private expencetypeService: ExpencetypeService,private datewiseexpencesService: DatewiseexpencesService, private cusotmerService: CusotmerService, private printService: PrintService) { }


  ngOnInit() {

    this.datewiseexpencesdetailsForm = this.formBuilder.group({
      Expence: [{}],
      StartDate: [],
      EndDate: [],
      ExpenceId: []
    });

    this.searchExpenceType("");
  }

  searchExpenceType(event) {
    this.expencetypeService.searchExpenceType(event.query).subscribe((data: any) => {
      this.expencetypeList = data;
    });
  }

  searchOption() {
    let datewiseexpencesdetailsForm = this.datewiseexpencesdetailsForm.value;
    datewiseexpencesdetailsForm.EmployeeId = datewiseexpencesdetailsForm.Expence.ExpenceId;
    datewiseexpencesdetailsForm.DateOfJoining = datewiseexpencesdetailsForm.StartDate;
    datewiseexpencesdetailsForm.DateOfLeaving = datewiseexpencesdetailsForm.EndDate;
    this.datewiseexpencesService.getExpencesDetails(datewiseexpencesdetailsForm)
      .subscribe((response: any) => {
        this.rowData = response;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'DatewiseExpences');
  }

  printLedger() {
    this.printService.printDocument("DatewiseExpences", this.rowData);
  }
}
