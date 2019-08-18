import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { BookingcancelService } from '../bookingcancel-view/bookingcancel.service';
import { LocationService } from '../../master/location-view/location.service';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { PlanService } from '../../master/plan-view/plan.service';

import * as moment from 'moment';

@Component({
  selector: 'app-bookingcancel-details',
  templateUrl: './bookingcancel-details.component.html',
  styleUrls: ['./bookingcancel-details.component.css']
})

export class BookingcancelDetailsComponent implements OnInit {
  selectedCustomer
  public customerList = [];
  public locationList = [];
  selectedPlan
  public planList: [];
  bookingcancelForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private bookingcancelService: BookingcancelService, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, public locationService: LocationService, public cusotmerService: CusotmerService, public planService: PlanService) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.bookingcancelService.getBookingCancelNo()
        .subscribe((bookingcancel: any) => {
          this.bookingcancelForm.controls['RecordNo'].patchValue(bookingcancel);
        });
    }

    this.bookingcancelForm = this.formBuilder.group({
      PkId                  :[0],
      RecordNo              : [],
      Location: [{}],
      Customer              : [{}],
      BookungCancelDate: ["", Validators.required],
      Plan                  : [{}],
      NoOfPlan: ["", Validators.required],
      NoOfChicks            : [],
      Amonut                : [],
      CancelNoOfPlan: ["", Validators.required],
      CancelNoOfChicks      : [],
      CancelAmount          : [],
      PaymentMethod: ["", Validators.required],
      ChequeNo              : [],
      PaidAmount: ["", Validators.required],
      Narration: ["", Validators.required],
      IsDeleted: [false],
      LocationId: [],
      CustomerId: [],
      PlanId: []
    });

    if (this.config.isEditable==true) {
      this.getLocation(this.config.data.LocationId);
      this.getCustomer(this.config.data.CustomerId);
      this.getPlan(this.config.data.PlanId);
      this.setDataForEdit();
    }
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.bookingcancelForm.patchValue({ Location: location });
    });
  }

  getCustomer(id) {
    this.cusotmerService.getCustomerByID(id).subscribe((customer) => {
      this.bookingcancelForm.patchValue({ Customer: customer });
    });
  }

  getPlan(id) {
    this.planService.getPlanByID(id).subscribe((plan) => {
      this.bookingcancelForm.patchValue({ Plan: plan });
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let bookingcancelForm = this.config.data;
    bookingcancelForm.BookungCancelDate = (moment(this.config.data.BookungCancelDate).toDate());
    this.bookingcancelForm.setValue(this.config.data);

   
  }

  onSelectCustomer(selectedCustomer) {
    this.bookingcancelForm.patchValue({ MobileNo: selectedCustomer.CustomerMobileNo });

  }
  searchCustomer(event) {
    this.bookingcancelService.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }

  searchLocation(event) {
    this.bookingcancelService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  onSelectPlan(selectedPlan) {
    this.bookingcancelForm.patchValue({ NoOfChicks: selectedPlan.NoOfChicks, Amonut: selectedPlan.Amount, CancelNoOfChicks: selectedPlan.NoOfChicks, CancelAmount: selectedPlan.Amount});
    //this.bookingdetailsForm.patchValue({  });
  }
  searchPlan(event) {
    this.bookingcancelService.searchPlan(event.query).subscribe((data: any) => {
      this.planList = data;
    });
  }

  saveBookingCancel() {
    if (!this.dialog.validateForm14(this.bookingcancelForm)) {
      return;
    }

    let bookingcancel = this.bookingcancelForm.value;
    bookingcancel.LocationId = bookingcancel.Location.LocationId;
    bookingcancel.CustomerId = bookingcancel.Customer.CustomerId;
    bookingcancel.PlanId = bookingcancel.Plan.PlanId;
    Object.assign(bookingcancel, this.bookingcancelForm.value);

    delete bookingcancel.Location;
    delete bookingcancel.Plan;
    delete bookingcancel.Customer;

    this.bookingcancelService.saveBookingCancel(bookingcancel, this.isEditable).subscribe((bookingcancel) => {
        // login successful if there's a jwt token in the response
        if (bookingcancel) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(bookingcancel);
        }
        return bookingcancel;
      });
  }
}
