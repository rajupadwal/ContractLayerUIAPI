import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { PrintService } from '../../printing/print.service';
import { ProductService } from '../../master/product-view/product.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatewisepurchasereturnService } from './datewisepurchasereturn.service';
import { SupplierService } from '../../master/supplier-view/supplier.service';

@Component({
  selector: 'app-datewisepurchasereturn-view',
  templateUrl: './datewisepurchasereturn-view.component.html',
  styleUrls: ['./datewisepurchasereturn-view.component.css']
})
export class DatewisepurchasereturnViewComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  public supplierList = [];
  purchasereturndetailsForm: FormGroup;

  columnDefs = [
    {
      headerName: 'Date', field: 'TransactionDate', valueFormatter: this.dateFormatter, 'width': 150,
    },
    {
      headerName: 'Supplier Name ', field: 'SupplierName', 'width': 250,
    },
    {
      headerName: 'ProductName', field: 'ProductName','width': 220,
    },
    {
      headerName: 'ProductTypeUnit', field: 'ProductTypeUnit', 'width': 240,
    },
    {
      headerName: 'Rejected Quantity', field: 'Quantity', 'width': 150,
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

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, public productService: ProductService, private datewisepurchasereturnService: DatewisepurchasereturnService, private supplierService: SupplierService, private printService: PrintService) { }


  ngOnInit() {

    this.purchasereturndetailsForm = this.formBuilder.group({
      Supplier: [{}],
      StartDate: [],
      EndDate: [],
      SupplierId: [],
    });

    this.searchSupplier("");
  }

  searchSupplier(event) {
    this.supplierService.searchSupplier(event.query).subscribe((data: any) => {
      this.supplierList = data;
    });
  }

  searchOption() {
    let purchasereturndetailsForm = this.purchasereturndetailsForm.value;
    purchasereturndetailsForm.EmployeeId = purchasereturndetailsForm.Supplier.SupplierId;
    purchasereturndetailsForm.DateOfJoining = purchasereturndetailsForm.StartDate;
    purchasereturndetailsForm.DateOfLeaving = purchasereturndetailsForm.EndDate;
    this.datewisepurchasereturnService.getPurchaseReturnDetails(purchasereturndetailsForm)
      .subscribe((response: any) => {
        this.rowData = response;
      });
  }

  exportAsXLSX(): void {
    this.productService.exportAsExcelFile(this.rowData, 'DatewisePurchaseReturn');
  }

  printLedger() {
    this.printService.printDocument("DatewisePurchaseReturn", this.rowData);
  }
}
