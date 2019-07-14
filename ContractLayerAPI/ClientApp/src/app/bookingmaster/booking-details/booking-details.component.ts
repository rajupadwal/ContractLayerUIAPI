import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

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
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    
    this.loadCustomer();
    //this.loadLocation();
    this.bookingdetailsForm = this.formBuilder.group({

      RecordNo: [0],
      LocationId: [],
      CustomerId: [],
      BookingDate: [],
      MobileNo: [],
      PlanId: [],
      NoOfPlan: [],
      NoOfChicks: [],
      Amount: [],
      EmployeeId: [],
      EnquiryRef: [],
      Agreement: [],
      EggsLiability: [],
      PaymentMethod: [],
      ChequeNo: [],
      PaidAmount: [],
      Narration: [],

      Customer: [{}]

      //BalanceAmonut: [],
      //NoOfPlanCancel: [],
      //DeliveryStatus: [],
      //IsDeleted: [false] 
    });

    if (this.config.data)
      this.setDataForEdit();
  }


  onChanges(): void {
    this.bookingdetailsForm.valueChanges.subscribe(val => {
      if (val.Name == "CustomerId") {
      }
    });
  }



  setDataForEdit = () => {
    this.isEditable = true;
    this.bookingdetailsForm.setValue(this.config.data);
  }
  loadCustomer() {


    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    //let booking = this.bookingdetailsForm.value;

    return this.http.get(APP_CONSTANT.CUSOTMER_API.GETALL, httpOptions)
      .subscribe((customers:any) => {
        this.customers = customers;
      });

  }

  saveBookingDetails() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let booking = this.bookingdetailsForm.value;
    //let booking = {
    //  RecordNo: 0,
    //  LocationId: 1,
    //  CustomerId: 1,
    //  MobileNo: '123456'
    //};

    return this.http.post(this.isEditable ? APP_CONSTANT.BOOKING_API.EDIT : APP_CONSTANT.BOOKING_API.ADD, booking, httpOptions)
      .subscribe((booking) => {
        // login successful if there's a jwt token in the response
        if (booking) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(booking);
        }
        return booking;
      });
  }
}
