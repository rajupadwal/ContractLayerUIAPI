import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { PurchasePayemntService } from '../purchasepayment-view/purchasepayment.service';
import { LocationService } from '../../master/location-view/location.service';
import { SupplierService } from '../../master/supplier-view/supplier.service';
import * as moment from 'moment';
@Component({
  selector: 'app-purchasepayment-details',
  templateUrl: './purchasepayment-details.component.html',
  styleUrls: ['./purchasepayment-details.component.css']
})

export class PurchasepaymentDetailsComponent implements OnInit {
  
  purchasepaymentdetailsForm: FormGroup;
  public isEditable: boolean = false;
  public locationList: [];
  public supplierList = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private purchasepayemntservice: PurchasePayemntService, private config: DialogConfig, public dialog: DialogRef, private supplierService: SupplierService, private locationService: LocationService) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.purchasepayemntservice.getPurchasePaymentNo()
        .subscribe((purchasepaymentno: any) => {
          this.purchasepaymentdetailsForm.controls['RecordNo'].patchValue(purchasepaymentno);
        });
    }

    this.purchasepaymentdetailsForm = this.formBuilder.group({
      PkId            :[0],
      RecordNo        : [],
      Date: ["", Validators.required],
      Location        : [{}],
      Supplier        : [{}],
      PaymentType: ["", Validators.required],
      BillRefNo: ["", Validators.required],
      PaymentMethod: ["", Validators.required],
      ChequeNo        : [],
      AmountPaid: ["", Validators.required],
      Narration: ["", Validators.required],
      IsDeleted: [false],
      LocationId: [],
      SupplierId: [],
      OutstandingAmount : [0]
    });

    if (this.config.isEditable==true) {
      this.getSupplier(this.config.data.SupplierId);
      this.getLocation(this.config.data.LocationId);
      this.setDataForEdit();
    }
  }

  getSupplier(id) {
    this.supplierService.getSupplierByID(id).subscribe((supplier) => {
      this.purchasepaymentdetailsForm.patchValue({ Supplier: supplier });
    });
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.purchasepaymentdetailsForm.patchValue({ Location: location });
    });
  }

  searchSupplier(event) {
    this.supplierService.searchSupplier(event.query).subscribe((data: any) => {
      this.supplierList = data;
    });
  }
  searchLocation(event) {
    this.locationService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }
  
  setDataForEdit = () => {
    this.isEditable = true;
    let PurchasepaymentdetailsForm = this.config.data;
    PurchasepaymentdetailsForm.Date = moment(this.config.data.Date).toDate();
    this.purchasepaymentdetailsForm.setValue(this.config.data);
  }

  calculateOutstandingAmount(event) {
    let purchasepaymentdetails = this.purchasepaymentdetailsForm.value;
    this.purchasepayemntservice.getSuppOutstanding(purchasepaymentdetails)
      .subscribe((suppreceipt: any) => {
        this.purchasepaymentdetailsForm.controls['OutstandingAmount'].patchValue(suppreceipt);
      });
  }
  
  savePurchasepayment() {

    if (!this.dialog.validateForm16(this.purchasepaymentdetailsForm)) {
      return;
    }
    let purchasepayementdetails = this.purchasepaymentdetailsForm.value;

    var a = new Date(purchasepayementdetails.Date);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    purchasepayementdetails.Date = moment(b).toDate();

    purchasepayementdetails.LocationId = purchasepayementdetails.Location.LocationId;
    purchasepayementdetails.SupplierId = purchasepayementdetails.Supplier.SupplierId;
    delete purchasepayementdetails.Location;
    delete purchasepayementdetails.Supplier;
    this.purchasepayemntservice.savePurchasepayment(purchasepayementdetails, this.isEditable).subscribe((purchasepayementdetails) => {
      // login successful if there's a jwt token in the response
      if (purchasepayementdetails) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(purchasepayementdetails);
      }
      return purchasepayementdetails;
    });
  }
}































