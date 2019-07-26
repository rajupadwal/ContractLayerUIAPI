import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import {BookingService } from '../booking-view/booking.service';
import { LocationService } from '../../master/location-view/location.service';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { PlanService } from '../../master/plan-view/plan.service';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})

export class BookingDetailsComponent implements OnInit {
  selectedCustomer
  bookingdetailsForm: FormGroup;
  public isEditable: boolean = false;
  public customerList = [];
  selectedPlan
  public planList: [];
  public locationList: [];


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private bookingService: BookingService, private config: DialogConfig, public dialog: DialogRef, public locationService: LocationService, public cusotmerService: CusotmerService, public planService: PlanService) { }

  ngOnInit() {

    this.bookingdetailsForm = this.formBuilder.group({

      RecordNo        : [0],
      Location        : [{}],
      Customer        : [{}],
      BookingDate     : [],
      MobileNo        : [],
      Plan            : [{}],
      NoOfPlan        : [],
      NoOfChicks      : [],
      Amount          : [],
      EmployeeId      : [],
      EnquiryRef      : [],
      Agreement       : [],
      EggsLiability   : [],
      //NoOfPlanCancel  : [],
      PaymentMethod   : [],
      ChequeNo        : [],
      PaidAmount      : [],
      //BalanceAmonut   : [],
      Narration       : [],
      //DeliveryStatus  : [],
      //IsDeleted       : [false] 
    });

    if (this.config.data) {
      this.getLocation(this.config.data.LocationId);
      this.getCustomer(this.config.data.CustomerId);
      this.getPlan(this.config.data.PlanId);
      this.setDataForEdit();
    }
     
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.bookingdetailsForm.patchValue({ Location: location });
    });
  }

  getCustomer(id) {
    this.cusotmerService.getCustomerByID(id).subscribe((customer) => {
      this.bookingdetailsForm.patchValue({ Customer: customer });
    });
  }

  getPlan(id) {
    this.planService.getPlanByID(id).subscribe((plan) => {
      this.bookingdetailsForm.patchValue({ Plan: plan });
    });
  }

  onSelectCustomer(selectedCustomer) {
    this.bookingdetailsForm.patchValue({ MobileNo: selectedCustomer.CustomerMobileNo });
  }

  searchLocation(event) {
    this.bookingService.searchLocation(event.query).subscribe((data:any) => {
      this.locationList = data;
    });
  }

  searchCustomer(event) {
    this.bookingService.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }

  onSelectPlan(selectedPlan) {
    this.bookingdetailsForm.patchValue({ NoOfChicks: selectedPlan.NoOfChicks, Amount: selectedPlan.Amount });
    //this.bookingdetailsForm.patchValue({  });
  }
  searchPlan(event) {
    this.bookingService.searchPlan(event.query).subscribe((data: any) => {
      this.planList = data;
    });
  }


  setDataForEdit = () => {
    this.isEditable = true;
    this.bookingdetailsForm.setValue(this.config.data);
  }

  saveBookingDetails() {
    let booking;
    Object.assign(booking, this.bookingdetailsForm.value);
    booking.LocationId = booking.Location.LocationId;
    booking.CustomerId = booking.Customer.CustomerId;
    booking.PlanId = booking.Plan.PlanId;
    delete booking.Location;
    delete booking.Plan;
    delete booking.Customer;
    this.bookingService.saveBookingDetails(booking,this.isEditable).subscribe((booking) => {
      // login successful if there's a jwt token in the response
      if (booking) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(booking);
      }
      return booking;
    });
  }
}
