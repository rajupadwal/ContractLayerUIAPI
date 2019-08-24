import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { SalesReceiptService } from '../salesreceipt-view/salesreceipt.service';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { LocationService } from '../../master/location-view/location.service';
import * as moment from 'moment';

@Component({
  selector: 'app-salesreceipt-details',
  templateUrl: './salesreceipt-details.component.html',
  styleUrls: ['./salesreceipt-details.component.css']
})

export class SalesReceiptDetailsComponent implements OnInit {
  public locationList: [];
  salereceiptdetailsForm: FormGroup;
  public isEditable: boolean = false;
  public customerList = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private salesreceiptservice: SalesReceiptService, private config: DialogConfig, public dialog: DialogRef
    , private cusotmerService: CusotmerService, private locationService: LocationService) { }

  ngOnInit() {
    if (this.config.isEditable == false) {
      this.salesreceiptservice.getSaleReceiptNo()
        .subscribe((salereceipt: any) => {
          this.salereceiptdetailsForm.controls['ReceiptNo'].patchValue(salereceipt);
        });
    }

    this.salereceiptdetailsForm = this.formBuilder.group({
      PkId: [0],
      ReceiptNo: [],
      Date: ["", Validators.required],
      Location: [{}],
      Customer: [{}],
      PaymentType: ["", Validators.required],
      BillRefNo: ["", Validators.required],
      PaymentMethod: ["", Validators.required],
      ChequeNo: [],
      OutstandingAmount: [],
      CashAmount: ["", Validators.required],
      Narration: ["", Validators.required],
      IsDeleted: [false],
      LocationId: [],
      CustomerId: [],
    });

    if (this.config.isEditable==true) {
      this.getCstomer(this.config.data.CustomerId);
      this.getLocation(this.config.data.LocationId);
      this.setDataForEdit();
    }
  }
  
  getCstomer(id) {
    this.cusotmerService.getCustomerByID(id).subscribe((customer) => {
      this.salereceiptdetailsForm.patchValue({ Customer: customer });
    });
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.salereceiptdetailsForm.patchValue({ Location: location });
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let salereceiptdetails = this.config.data;
    salereceiptdetails.Date = (moment(this.config.data.Date).toDate());
    this.salereceiptdetailsForm.setValue(this.config.data);
  }
  searchCustomer(event) {
    this.salesreceiptservice.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }
  searchLocation(event) {
    this.salesreceiptservice.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  calculateOutstandingAmount(event) {
    let salereceiptdetails = this.salereceiptdetailsForm.value;
    this.salesreceiptservice.getCustOutstanding(salereceiptdetails)
      .subscribe((salereceipt: any) => {
        this.salereceiptdetailsForm.controls['OutstandingAmount'].patchValue(salereceipt);
      });
  }

  saveSalereceipt() {
    if (!this.dialog.validateForm15(this.salereceiptdetailsForm)) {
      return;
    }

    let salereceiptdetails = this.salereceiptdetailsForm.value;

    var a = new Date(salereceiptdetails.Date);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    salereceiptdetails.Date = moment(b).toDate();

    salereceiptdetails.LocationId = salereceiptdetails.Location.LocationId;
    salereceiptdetails.CustomerId = salereceiptdetails.Customer.CustomerId;
    delete salereceiptdetails.Location;
    delete salereceiptdetails.Customer;
    this.salesreceiptservice.saveSalereceipt(salereceiptdetails, this.isEditable).subscribe((salereceiptdetails) => {
      // login successful if there's a jwt token in the response
      if (salereceiptdetails) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(salereceiptdetails);
      }
      return salereceiptdetails;
    });
  }
}
