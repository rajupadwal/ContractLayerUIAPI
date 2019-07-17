import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { SalesReceiptService } from '../salesreceipt-view/salesreceipt.service';
@Component({
  selector: 'app-salesreceipt-details',
  templateUrl: './salesreceipt-details.component.html',
  styleUrls: ['./salesreceipt-details.component.css']
})

export class SalesReceiptDetailsComponent implements OnInit {
  //selectedCustomer
  //public customers = [];
  //public locations = [];
  salereceiptdetailsForm: FormGroup;
  public isEditable: boolean = false;
  //public customerList = [];
 // selectedPlan
 // public planList: [];


  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private salesreceiptservice: SalesReceiptService, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {

    this.salereceiptdetailsForm = this.formBuilder.group({

      ReceiptNo: [0],
      Date: [],
      LocationId: [],
      CustomerId: [],
      PaymentType: [],
      BillRefNo: [],
      PaymentMethod: [],
      ChequeNo: [],
      ChequeAmount: [],
      CashAmount: [],
      Narration: [],
      IsDeleted: [false]
       
    });

    if (this.config.data)
      this.setDataForEdit();
  }

  //onSelectCustomer(selectedCustomer) {
  //  this.bookingdetailsForm.patchValue({ MobileNo: selectedCustomer.CustomerMobileNo });

  //}
  //searchCustomer(event) {
  //  this.bookingService.searchCustomer(event.query).subscribe((data: any) => {
  //    this.customerList = data;
  //  });
  //}

  


  setDataForEdit = () => {
    this.isEditable = true;
    this.salereceiptdetailsForm.setValue(this.config.data);
  }



  saveSalereceipt() {
    this.salesreceiptservice.salesreceiptData(this.salereceiptdetailsForm.value, this.isEditable).subscribe((salereceipt) => {
      // login successful if there's a jwt token in the response
      if (salereceipt) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(salereceipt);
      }
      return salereceipt;
    });
  }
}
