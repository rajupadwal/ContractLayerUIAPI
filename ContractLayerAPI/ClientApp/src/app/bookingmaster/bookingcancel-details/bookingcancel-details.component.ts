import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-bookingcancel-details',
  templateUrl: './bookingcancel-details.component.html',
  styleUrls: ['./bookingcancel-details.component.css']
})

export class BookingcancelDetailsComponent implements OnInit {

  bookingcancelForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

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
