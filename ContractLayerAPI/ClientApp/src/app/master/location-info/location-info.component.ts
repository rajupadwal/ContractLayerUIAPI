import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogConfig } from "src/app/dialog/dialog-config";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})

export class LocationInfoComponent implements OnInit {

  locationForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.locationForm = this.formBuilder.group({
      
      LocationId: [0],
      LocationName: ["", Validators.required],
      LocationCode: [],
      PinCode: ["", Validators.required],
      Address: ["", Validators.required],
      Remarks: [],
      ContactNo: [],
      VoucherType: [],
      Prefix: [],
      BillinigSeriesfrom: [],
      BillingSeriesTo :[],
    });
  
  if(this.config.data)
      this.setDataForEdit();

  }
 setDataForEdit = () => {
  this.isEditable = true;
  this.locationForm.setValue(this.config.data);
}

  savelocation() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    let location = this.locationForm.value;

  return this.http.post(this.isEditable ? APP_CONSTANT.LOCATION_API.EDIT : APP_CONSTANT.LOCATION_API.ADD, location, httpOptions)
      .subscribe((location) => {
        // login successful if there's a jwt token in the response
        if (location) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(location);
        }
        return location;
      });
  }
}
