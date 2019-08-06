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

    this.bookingService.getBookingNo()
      .subscribe((booking: any) => {
        this.bookingdetailsForm.controls['RecordNo'].patchValue(booking);
      });
    
    this.bookingdetailsForm = this.formBuilder.group({

      RecordNo: [],
      Location        : [{}],
      Customer        : [{}],
      BookingDate     : [],
      MobileNo        : [],
      Plan            : [{}],
      NoOfPlan        : [],
      NoOfChicks      : [],
      Amount          : [],
      Employee        : [{}],
      EnquiryRef      : [],
      Agreement       : [],
      EggsLiability   : [],
      //NoOfPlanCancel  : [],
      PaymentMethod   : [],
      ChequeNo        : [],
      PaidAmount      : [],
      //BalanceAmonut   : [],
      Narration: [],
      LocationId: [],
      CustomerId: [],
      PlanId: [],
      EmployeeId: []
      //DeliveryStatus  : [],
      //IsDeleted       : [false] 
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

  calculatePlanAmount(event) {
    this.bookingdetailsForm.patchValue({ NoOfChicks: (parseFloat(this.bookingdetailsForm.controls['NoOfPlan'].value) * parseFloat(this.bookingdetailsForm.controls['NoOfChicks'].value)) });
    this.bookingdetailsForm.patchValue({ Amount: (parseFloat(this.bookingdetailsForm.controls['NoOfPlan'].value) * parseFloat(this.bookingdetailsForm.controls['Amount'].value)) });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    //let bookingdetailsForm;
    //bookingdetailsForm.BookingDate = moment(this.config.data.BookingDate).toDate();
    this.bookingdetailsForm.setValue(this.config.data);
  }

  saveBookingDetails() {
    let booking = this.bookingdetailsForm.value;
    booking.EmployeeId = booking.Employee.EmployeeId;
    booking.LocationId = booking.Location.LocationId;
    booking.CustomerId = booking.Customer.CustomerId;
    booking.PlanId = booking.Plan.PlanId;
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
