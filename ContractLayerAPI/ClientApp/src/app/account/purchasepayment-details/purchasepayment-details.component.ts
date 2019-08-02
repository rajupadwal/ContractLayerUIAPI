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

    this.purchasepaymentdetailsForm = this.formBuilder.group({

      RecordNo        : [0],
      Date            : [],
      Location        : [{}],
      Supplier        : [{}],
      PaymentType     : [],
      BillRefNo       : [],
      PaymentMethod   : [],
      ChequeNo        : [],
      AmountPaid      : [],
      Narration       : [],
      IsDeleted: [false],
      LocationId: [],
      SupplierId: []
    });

    if (this.config.data) {
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
    let  PurchasepaymentdetailsForm = this.config.data;
    PurchasepaymentdetailsForm.Date = moment(this.config.data.Date).toDate();
    this.purchasepaymentdetailsForm.setValue(this.config.data);
  }
  
  savePurchasepayment() {
    let purchasepayementdetails = this.purchasepaymentdetailsForm.value;
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































