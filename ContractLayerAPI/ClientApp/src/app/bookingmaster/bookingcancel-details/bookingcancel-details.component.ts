import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { BookingcancelService } from '../bookingcancel-view/bookingcancel.service';

@Component({
  selector: 'app-bookingcancel-details',
  templateUrl: './bookingcancel-details.component.html',
  styleUrls: ['./bookingcancel-details.component.css']
})

export class BookingcancelDetailsComponent implements OnInit {
  selectedCustomer
  public customers = [];
  public customerList = [];
  public locationList = [];
  selectedPlan
  public planList: [];
  bookingcancelForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private bookingcancelService: BookingcancelService, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.bookingcancelForm = this.formBuilder.group({

      RecordNo              : [0],
      LocationId            : [],
      CustomerId            : [],
      BookungCancelDate     : [],
      PlanId                : [],
      NoOfPlan              : [],
      NoOfChicks            : [],
      Amonut                : [],
      CancelNoOfPlan        : [],
      CancelNoOfChicks      : [],
      CancelAmount          : [],
      PaymentMethod         : [],
      ChequeNo              : [],
      PaidAmount            : [],
      Narration             : [],
      IsDeleted             : [false]
    });

    if (this.config.data)
      this.setDataForEdit();
  }

  setDataForEdit = () => {
    this.isEditable = true;
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
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let bookingcancel = this.bookingcancelForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.BOOKINGCANCEL_API.EDIT : APP_CONSTANT.BOOKINGCANCEL_API.ADD, bookingcancel, httpOptions)
      .subscribe((bookingcancel) => {
        // login successful if there's a jwt token in the response
        if (bookingcancel) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(bookingcancel);
        }
        return bookingcancel;
      });
  }
}
