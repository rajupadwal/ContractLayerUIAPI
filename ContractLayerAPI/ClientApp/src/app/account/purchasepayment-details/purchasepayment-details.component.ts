import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { PurchasePayemntService } from '../purchasepayment-view/purchasepayment.service';
@Component({
  selector: 'app-purchasepayment-details',
  templateUrl: './purchasepayment-details.component.html',
  styleUrls: ['./purchasepayment-details.component.css']
})

export class PurchasepaymentDetailsComponent implements OnInit {
  
  purchasepaymentdetailsForm: FormGroup;
  public isEditable: boolean = false;
  

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private purchasepayemntservice: PurchasePayemntService, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {

    this.purchasepaymentdetailsForm = this.formBuilder.group({

      RecordNo: [0],
      Date: [],
      LocationId: [],
      SupplierId: [],
      PaymentType: [''],
      BillRefNo: [],
      PaymentMethod: [],
      ChequeNo: [],
      AmountPaid: [],
      Narration: [],
      IsDeleted: [false]

    });

    if (this.config.data) {
      
      this.setDataForEdit();
    }

  }

  //onSelectCustomer(selectedCustomer) {
  //  this.bookingdetailsForm.patchValue({ MobileNo: selectedCustomer.CustomerMobileNo });

  //}

    


  
  setDataForEdit = () => {
    this.isEditable = true;
    this.purchasepaymentdetailsForm.setValue(this.config.data);
  }
  
  



  savePurchasepayment() {
    this.purchasepayemntservice.savePurchasepayment(this.purchasepaymentdetailsForm.value, this.isEditable).subscribe((purchasepayment) => {
      // login successful if there's a jwt token in the response
      if (purchasepayment) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(purchasepayment);
      }
      return purchasepayment;
    });
  }
}































