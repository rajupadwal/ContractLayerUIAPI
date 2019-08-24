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
import * as moment from 'moment';
import { EmployeeService } from '../../master/employee-view/employee.service';
import { parse } from 'querystring';
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
  public employeeList: [];

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private bookingService: BookingService, private config: DialogConfig, public dialog: DialogRef, public locationService: LocationService, public cusotmerService: CusotmerService, public planService: PlanService, private employeeService: EmployeeService) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.bookingService.getBookingNo()
        .subscribe((booking: any) => {
          this.bookingdetailsForm.controls['RecordNo'].patchValue(booking);
        });
    }

    this.bookingdetailsForm = this.formBuilder.group({
      PkId  : [0],
      RecordNo  : [],
      Location        : [{}],
      Customer        : [{}],
      BookingDate: ["", Validators.required],
      MobileNo: ["", Validators.required],
      Plan            : [{}],
      NoOfPlan: ["", Validators.required],
      NoOfChicks      : [],
      EggsReturnRate  :[],
      Amount          : [],
      Employee        : [{}],
      EnquiryRef      : [],
      Agreement: ["", Validators.required],
      EggsLiability   : [],
      NoOfPlanCancel  : [],
      PaymentMethod: ["", Validators.required],
      ChequeNo        : [],
      PaidAmount: ["", Validators.required],
      BalanceAmount   : [],
      Narration: ["", Validators.required],
      LocationId: [],
      CustomerId: [],
      PlanId: [],
      EmployeeId: [],
      DeliveryStatus  : [],
      IsDeleted       : [false] 
    });

    if (this.config.isEditable==true) {
      this.getLocation(this.config.data.LocationId);
      this.getCustomer(this.config.data.CustomerId);
      this.getPlan(this.config.data.PlanId);
      this.getEmployee(this.config.data.EmployeeId);
      this.setDataForEdit();
    }
  }

  getEmployee(id) {
    this.employeeService.getEmployeeByID(id).subscribe((employee) => {
      this.bookingdetailsForm.patchValue({ Employee: employee });
    });
  }

  searchEmployee(event) {
    this.employeeService.searchEmployee(event.query).subscribe((data: any) => {
      this.employeeList = data;
    });
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
    this.locationService.searchLocation(event.query).subscribe((data:any) => {
      this.locationList = data;
    });
  }

  searchCustomer(event) {
    this.cusotmerService.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }

  onSelectPlan(selectedPlan) {
    this.bookingdetailsForm.patchValue({ NoOfChicks: selectedPlan.NoOfChicks, Amount: selectedPlan.Amount });
    //this.bookingdetailsForm.patchValue({  });
  }

  calculatePlanAmount(event) {
    this.bookingdetailsForm.patchValue({ NoOfChicks: (parseFloat(this.bookingdetailsForm.controls['NoOfPlan'].value) * parseFloat(this.bookingdetailsForm.controls['NoOfChicks'].value)) });
    this.bookingdetailsForm.patchValue({ Amount: (parseFloat(this.bookingdetailsForm.controls['NoOfPlan'].value) * parseFloat(this.bookingdetailsForm.controls['Amount'].value)) });
  }

  searchPlan(event) {
    this.planService.searchPlan(event.query).subscribe((data: any) => {
      this.planList = data;
    });
  }
    
  setDataForEdit = () => {
    this.isEditable = true;
    let bookingdetailsForm = this.config.data;
    bookingdetailsForm.BookingDate = moment(this.config.data.BookingDate).toDate();
    this.bookingdetailsForm.setValue(this.config.data);
  }

  saveBookingDetails() {
    if (!this.dialog.validateForm13(this.bookingdetailsForm)) {
      return;
    }

    let booking = JSON.parse(JSON.stringify(this.bookingdetailsForm.value));

    var a = new Date(booking.BookingDate);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    booking.BookingDate = moment(b).toDate();

    booking.EmployeeId = booking.Employee.EmployeeId;
    booking.LocationId = booking.Location.LocationId;
    booking.CustomerId = booking.Customer.CustomerId;
    booking.PlanId = booking.Plan.PlanId;
    booking.DeliveryStatus = 'Pending';
    booking.NoOfPlanCancel = '0';
   
    //Object.assign(booking, this.bookingdetailsForm.value);
    
    delete booking.Location;
    delete booking.Plan;
    delete booking.Customer;
    delete booking.Employee;
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
