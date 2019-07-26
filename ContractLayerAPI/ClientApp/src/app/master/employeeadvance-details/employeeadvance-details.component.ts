import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { LocationService } from '../location-view/location.service';
import { EmployeeService } from '../employee-view/employee.service';
import { EmployeeadvanceService } from '../employeeadvance-view/employeeadvance.service';
import * as moment from 'moment';

@Component({
  selector: 'app-employeeadvance-details',
  templateUrl: './employeeadvance-details.component.html',
  styleUrls: ['./employeeadvance-details.component.css']
})

export class EmployeeadvanceDetailsComponent implements OnInit {

  employeeadvanceForm: FormGroup;
  public locationList: [];
  public employeeList: [];
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private locationService: LocationService, private employeeService: EmployeeService, private employeeadvanceService: EmployeeadvanceService) { }

  ngOnInit() {
    this.employeeadvanceForm = this.formBuilder.group({
      RecordNo        : [0],
      RecordDate      : [],
      Location        : [{}],
      Advance         : [],
      Narration       : [],
      Employee        : [{}],
    });
    if (this.config.data)
      this.getLocation(this.config.data.LocationId);
      this.getEmployee(this.config.data.EmployeeId);
      this.setDataForEdit();
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.employeeadvanceForm.patchValue({ Location: location });
    });
  }

  searchLocation(event) {
    this.locationService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  getEmployee(id) {
    this.employeeService.getEmployeeByID(id).subscribe((employee) => {
      this.employeeadvanceForm.patchValue({ Employee: employee });
    });
  }

  searchEmployee(event) {
    this.employeeService.searchEmployee(event.query).subscribe((data: any) => {
      this.employeeList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    //this.employeeadvanceForm.Date = moment(this.config.data.Date).toDate();
    this.employeeadvanceForm.setValue(this.config.data);
  }

  saveEmployeeAdvance() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let employeeadvance;
    Object.assign(employeeadvance, this.employeeadvanceForm.value);
    employeeadvance.EmployeeId = employeeadvance.Employee.EmployeeId;
    employeeadvance.LocationId = employeeadvance.Location.LocationId;
    delete employeeadvance.Location;
    delete employeeadvance.Employee;
    this.employeeadvanceService.saveEmployeeAdvance(employeeadvance, this.isEditable).subscribe((employeeadvance) => {
      // login successful if there's a jwt token in the response
      if (employeeadvance) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.dialog.close(employeeadvance);
      }
      return employeeadvance;
    });
    
  }
}
