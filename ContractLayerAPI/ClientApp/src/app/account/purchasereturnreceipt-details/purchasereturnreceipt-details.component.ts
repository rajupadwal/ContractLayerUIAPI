import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { PurchasereturnReceiptService } from '../purchasereturnreceipt-view/purchasereturnreceipt.service';
import { LocationService } from '../../master/location-view/location.service';
import { Location } from '@angular/common';
import { SupplierService } from '../../master/supplier-view/supplier.service';
import * as moment from 'moment';
@Component({
  selector: 'app-purchasereturnreceipt-details',
  templateUrl: './purchasereturnreceipt-details.component.html',
  styleUrls: ['./purchasereturnreceipt-details.component.css']
})

export class PurchasereturnreceiptDetailsComponent implements OnInit {
  
  purchasereturnreceiptForm: FormGroup;
  public locationList: [];
  public supplierList: [];
  public isEditable: boolean = false;
  

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private purchasereturnreceiptService: PurchasereturnReceiptService, private locationService: LocationService, private supplierService: SupplierService, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.purchasereturnreceiptService.getReturnPurchasePaymentNo()
        .subscribe((purchasepaymentno: any) => {
          this.purchasereturnreceiptForm.controls['RecordNo'].patchValue(purchasepaymentno);
        });
    }

    this.purchasereturnreceiptForm = this.formBuilder.group({

      RecordNo: [],
      Date: [],
      Location: [{}],
      Supplier: [{}],
      BillRefNo: [],
      PaymentMethod: [],
      ChequeNo: [],
      AmountReceived: [],
      Narration: [],
      IsDeleted: [false],
      LocationId: [],
      SupplierId: []

    });

    if (this.config.isEditable==true) {
      this.getLocation(this.config.data.LocationId);
      this.getSupplier(this.config.data.SupplierId);
      this.setDataForEdit();
    }
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.purchasereturnreceiptForm.patchValue({ Location: location });
    });
  }

  searchLocation(event) {
    this.locationService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  getSupplier(id) {
    this.supplierService.getSupplierByID(id).subscribe((supplier) => {
      this.purchasereturnreceiptForm.patchValue({ Supplier: supplier });
    });
  }

  searchSupplier(event) {
    this.supplierService.searchSupplier(event.query).subscribe((data: any) => {
      this.supplierList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let purchasereturnreceiptForm = this.config.data;
    purchasereturnreceiptForm.Date = moment(this.config.data.Date).toDate();
    this.purchasereturnreceiptForm.setValue(this.config.data);
  }
  
  savePurchasereturnreceipt() {
    let purchasereturnreceipt = this.purchasereturnreceiptForm.value;
    purchasereturnreceipt.LocationId = purchasereturnreceipt.Location.LocationId;
    purchasereturnreceipt.SupplierId = purchasereturnreceipt.Supplier.SupplierId;
    delete purchasereturnreceipt.Location;
    delete purchasereturnreceipt.Supplier;
    this.purchasereturnreceiptService.savePurchasereturnReceipt(this.purchasereturnreceiptForm.value, this.isEditable).subscribe((purchasereturnreceipt) => {
      // login successful if there's a jwt token in the response
      if (purchasereturnreceipt) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(purchasereturnreceipt);
      }
      return purchasereturnreceipt;
    });
  }
}































