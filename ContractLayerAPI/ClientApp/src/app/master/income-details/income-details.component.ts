import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { LocationService } from '../location-view/location.service';
import { IncomeService } from '../income-view/income.service';
import * as moment from 'moment';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})

export class IncomeDetailsComponent implements OnInit {

  incomedetailsForm: FormGroup;
  public locationList: [];
  public incometypeList: [];
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, public locationService: LocationService, private incomeService:IncomeService) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.incomeService.getIncomeNo()
        .subscribe((booking: any) => {
          this.incomedetailsForm.controls['RecordNo'].patchValue(booking);
        });
    }

    this.incomedetailsForm = this.formBuilder.group({

      PkId                  :[0],
      RecordNo              : [],
      Date: ["", Validators.required],
      Location              : [{}],
      Income                : [{}],
      Title: ["", Validators.required],
      PaymentMethod: ["", Validators.required],
      ChequeNo              : [],
      Amount: ["", Validators.required],
      Narration: ["", Validators.required],
      IsDeleted: [false],
      LocationId: [],
      IncomeId: []
    });

    if (this.config.isEditable == true) {
      this.getLocation(this.config.data.LocationId);
      this.getIncometype(this.config.data.IncomeId);
      this.setDataForEdit();
    }
  }


  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.incomedetailsForm.patchValue({ Location: location });
    });
  }

  searchLocation(event) {
    this.locationService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  getIncometype(id) {
    this.incomeService.getIncometypeByID(id).subscribe((incometype) => {
      this.incomedetailsForm.patchValue({ Income: incometype });
    });
  }

  searchIncomeType(event) {
    this.incomeService.searchIncometype(event.query).subscribe((data: any) => {
      this.incometypeList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let incomedetailsForm = this.config.data;
    incomedetailsForm.Date = moment(this.config.data.Date).toDate();
    this.incomedetailsForm.setValue(this.config.data);
  }

  saveIncomeDetails() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let income = this.incomedetailsForm.value;

    //let expencedetails = this.expencedetailsForm.value;
    income.LocationId = income.Location.LocationId;
    income.IncomeId = income.Income.IncomeId;
    delete income.Location;
    delete income.Income;

    return this.http.post(this.isEditable ? APP_CONSTANT.INCOME_API.EDIT : APP_CONSTANT.INCOME_API.ADD, income, httpOptions)
      .subscribe((income) => {
        // login successful if there's a jwt token in the response
        if (income) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(income);
        }
        return income;
      });
  }
}
