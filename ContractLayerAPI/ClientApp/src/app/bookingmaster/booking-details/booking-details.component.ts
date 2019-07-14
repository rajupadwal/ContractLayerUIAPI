import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import {BookingService } from '../booking-view/booking.service';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})

export class BookingDetailsComponent implements OnInit {
  selectedCustomer
  public customers = [];
  public locations = [];
  bookingdetailsForm: FormGroup;
  public isEditable: boolean = false;
  public customerList = [];


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient,private bookingService: BookingService, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {

    this.bookingdetailsForm = this.formBuilder.group({

      RecordNo        : [0],
      LocationId      : [],
      Customer      : [],
      BookingDate     : [],
      MobileNo        : [],
      PlanId          : [],
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

    if (this.config.data)
      this.setDataForEdit();
  }

  onSelectCustomer(selectedCustomer) {
    this.bookingdetailsForm.patchValue({ MobileNo: selectedCustomer.CustomerMobileNo });
  }
  searchCustomer(event) {
    this.bookingService.searchCustomer(event.query).subscribe((data:any) => {
      this.customerList = data;
    });
  }
  setDataForEdit = () => {
    this.isEditable = true;
    this.bookingdetailsForm.setValue(this.config.data);
  }



  saveBookingDetails() {
    this.bookingService.saveBookingDetails(this.bookingdetailsForm.value,this.isEditable).subscribe((booking) => {
      // login successful if there's a jwt token in the response
      if (booking) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(booking);
      }
      return booking;
    });
  }
}
