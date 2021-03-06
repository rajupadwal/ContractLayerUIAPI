import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { LocationService } from '../location-view/location.service';
import { CusotmerService } from '../customer-view/customer.service';
import * as moment from 'moment';
import { EnquiryService } from '../enquiry-view/enquiry.service';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-enquiry-master',
  templateUrl: './enquiry-master.component.html',
  styleUrls: ['./enquiry-master.component.css']
})

export class EnquiryMasterComponent implements OnInit {

  //@Output() postData = new EventEmitter();
  
  enquiryForm: FormGroup;
  public locationList: [];
  public isEditable: boolean = false;
   
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private locationService: LocationService, private cusotmerservice: CusotmerService, private enquiryService: EnquiryService) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.enquiryService.getEnquiryNo()
        .subscribe((enquiry: any) => {
          this.enquiryForm.controls['RecordNo'].patchValue(enquiry);
        });
    }

    this.enquiryForm = this.formBuilder.group({
      PkId            : [0],
      RecordNo        : [],
      Date		        : [],
      CustomerName    : [],
      Enquiry		      : [],
      RequiredQty	    : [],
      District	      : [],
      Taluka		      : [],
      City		        : [],
      PinCode		      : [],
      MobileNo	      : [],
      Address		      : [],
      RemindDate	    : [],
      EnquiryType	    : [],
      Narration	      : [],
      Location        : [{}],
      IsDeleted: [false],
      LocationId:[]
    });
    if (this.config.isEditable == true) {
      this.getLocation(this.config.data.LocationId);
      this.setDataForEdit();
    }
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.enquiryForm.patchValue({ Location: location });
    });
  }

  searchLocation(event) {
    this.locationService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let enquiryForm = this.config.data;
    enquiryForm.Date = moment(this.config.data.Date).toDate();
    enquiryForm.RemindDate = moment(this.config.data.RemindDate).toDate();
    this.enquiryForm.setValue(this.config.data);
  }
  
  saveEnquiry() {
    if (!this.dialog.validateForm5(this.enquiryForm)) {
      return;
    }

    let enquiry = this.enquiryForm.value;

    var a = new Date(enquiry.Date);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    enquiry.DateOfJoining = moment(b).toDate();

    var c = new Date(enquiry.RemindDate);
    var d = new Date(c.getTime() + day);
    enquiry.RemindDate = moment(d).toDate();

    enquiry.LocationId = enquiry.Location.LocationId;
    delete enquiry.Location;
    this.enquiryService.saveEnquiry(enquiry, this.isEditable).subscribe((enquiry) => {
        // login successful if there's a jwt token in the response
        if (enquiry) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(enquiry);
        }
        return enquiry;
      });

  }
}
