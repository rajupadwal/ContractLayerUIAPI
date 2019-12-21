import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { BankService } from '../bank-view/bank.service';
import { SchemePaymentService } from '../schemepayment-view/schemepayment.service';

@Component({
  selector: 'app-schemepayment-details',
  templateUrl: './schemepayment-details.component.html',
  styleUrls: ['./schemepayment-details.component.css']
})

export class SchemepaymentDetailsComponent implements OnInit {

  schemepaymentForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private schemepaymentservice: SchemePaymentService) { }

  ngOnInit() {

    //if (this.config.isEditable == false) {
    //  this.expencetypeService.getExpenceNo()
    //    .subscribe((expenceno: any) => {
    //      this.bankmasterForm.controls['BankId'].patchValue(expenceno);
    //    });
    //}

    this.schemepaymentForm = this.formBuilder.group({
      SrNo: [0],
      Amount: ["", Validators.required],
      CreateDate: [],
      UpdateDate: []

    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.schemepaymentForm.setValue(this.config.data);
  }

  saveSchemePayment() {
    if (!this.dialog.validateForm(this.schemepaymentForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let schemepaymentdetails = this.schemepaymentForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.SCHEMEPAYMENTDETAILS_API.EDIT : APP_CONSTANT.SCHEMEPAYMENTDETAILS_API.ADD, schemepaymentdetails, httpOptions)
      .subscribe((schemepaymentdetails) => {
        // login successful if there's a jwt token in the response
        if (schemepaymentdetails) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(schemepaymentdetails);
        }
        return schemepaymentdetails;
      });
  }
}









































  
