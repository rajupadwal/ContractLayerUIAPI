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

    this.salereceiptdetailsForm = this.formBuilder.group({

      ReceiptNo: [0],
      Date: [],
      Location: [{}],
      Customer: [{}],
      PaymentType: [],
      BillRefNo: [],
      PaymentMethod: [],
      ChequeNo: [],
      ChequeAmount: [],
      CashAmount: [],
      Narration: [],
      IsDeleted: [false],
      LocationId: [],
      CustomerId: []

    });

    if (this.config.data) {
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

  saveSalereceipt() {
    let salereceiptdetails = this.salereceiptdetailsForm.value;
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
