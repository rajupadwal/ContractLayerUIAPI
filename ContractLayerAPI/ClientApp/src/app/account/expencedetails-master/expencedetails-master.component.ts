import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { EventEmitter } from 'events';
import * as moment from 'moment';
import { ExpencedetailsService } from '../expencedetails-view/expencedetails.service';
import { LocationService } from '../../master/location-view/location.service';
import { EmployeeService } from '../../master/employee-view/employee.service';
import { ExpencetypeService } from '../../master/expencetype-view/expencetype.service';

@Component({
  selector: 'app-expencedetails-master',
  templateUrl: './expencedetails-master.component.html',
  styleUrls: ['./expencedetails-master.component.css']
})

export class ExpencedetailsMasterComponent implements OnInit {

  @Output() postData = new EventEmitter();

  expencedetailsForm: FormGroup;
  public locationList: [];
  public employeeList: [];
  public expencetypeList: [];
  public isEditable: boolean = false;
  //resultList: any[] = [];
  //error: string = '';
  //success: string = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private locationService: LocationService, private employeeService: EmployeeService, private expencetypeService: ExpencetypeService, private expencedetailsService:ExpencedetailsService) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.expencedetailsService.getExpenceNo()
        .subscribe((expenceno: any) => {
          this.expencedetailsForm.controls['ExpencesNo'].patchValue(expenceno);
        });
    }

    this.expencedetailsForm = this.formBuilder.group({
      PkId:[0],
      ExpencesNo: [],
      Date: ["", Validators.required],
      Expence: [{}],
      Location: [{}],
      Employee: [{}],
      PaymentMethod: ["", Validators.required],
      ChequeNo: [],
      Amount: ["", Validators.required],
      Narration: ["", Validators.required],
      IsDeleted: [false],
      LocationId: [],
      EmployeeId: [],
      ExpenceId:[]
    });
    if (this.config.isEditable==true) {
      this.getLocation(this.config.data.LocationId);
      this.getEmployee(this.config.data.EmployeeId);
      this.getExpencetype(this.config.data.ExpenceId);
      this.setDataForEdit();
    }
  }

    getLocation(id) {
      this.locationService.getLocationByID(id).subscribe((location) => {
        this.expencedetailsForm.patchValue({ Location: location });
      });
  }
    getExpencetype(id) {
      this.expencetypeService.getExpencetypeByID(id).subscribe((expencetype) => {
        this.expencedetailsForm.patchValue({ Expence: expencetype });
    });
  }
  searchExpenceType(event) {
    this.expencetypeService.searchExpenceType(event.query).subscribe((data: any) => {
      this.expencetypeList = data;
    });
  }

    searchLocation(event) {
      this.locationService.searchLocation(event.query).subscribe((data: any) => {
        this.locationList = data;
      });
    }

    getEmployee(id) {
      this.employeeService.getEmployeeByID(id).subscribe((employee) => {
        this.expencedetailsForm.patchValue({ Employee: employee });
      });
    }

    searchEmployee(event) {
      this.employeeService.searchEmployee(event.query).subscribe((data: any) => {
        this.employeeList = data;
      });
    }

    
  setDataForEdit = () => {
    this.isEditable = true;
    let expencedetailsForm = this.config.data;
    expencedetailsForm.Date = moment(this.config.data.Date).toDate();
    this.expencedetailsForm.setValue(this.config.data);
  }

  saveexpencedetails() {

    if (!this.dialog.validateForm6(this.expencedetailsForm)) {
      return;
    }
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    let expencedetails = this.expencedetailsForm.value;

    var a = new Date(expencedetails.Date);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    expencedetails.Date = moment(b).toDate();

    expencedetails.EmployeeId = expencedetails.Employee.EmployeeId;
    expencedetails.LocationId = expencedetails.Location.LocationId;
    expencedetails.ExpenceId = expencedetails.Expence.ExpenceId;
    delete expencedetails.Location;
    delete expencedetails.Employee;
    delete expencedetails.Expence;
    return this.http.post(this.isEditable ? APP_CONSTANT.EXPENCEDETAILS_API.EDIT : APP_CONSTANT.EXPENCEDETAILS_API.ADD, expencedetails, httpOptions)
      .subscribe((expencedetails) => {
        // login successful if there's a jwt token in the response
        if (expencedetails) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.postData.emit("supplier Saved")
          this.dialog.close(expencedetails);
        }
        return expencedetails;


      });

  }



}
