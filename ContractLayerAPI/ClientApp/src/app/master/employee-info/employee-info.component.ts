import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})

export class EmployeeInfoComponent implements OnInit {

  employeeForm: FormGroup;
  public locationList: [];
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, public locationService: LocationService, public cusotmerService: CusotmerService ) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({

      EmployeeId            : [0],
      EmployeeName          : [],
      PersonalContactNo     : [],
      Address               : [],
      EducationDetails      : [],
      PastWorkExp           : [],
      PanCardNo             : [],
      AadharId              : [],
      VoterId               : [],
      BloodGroup            : [],
      MaritialStatus        : [],
      Salary                : [],
      DateOfJoining         : [],
      DateOfLeaving         : [],
      Role                  : [],
      Location              : [{}],
      UserId                : [],
      Password              : [],
      CompanyMobileNo       : [],
      Post                  : [],
      Remarks               : [],
      District              : [],
      Taluka                : [],
      City                  : [],
      EmergencyContactName  : [],
      EmergencyNo           : [],
      Relation              : [],
      BankName              : [],
      AccountNo             : [],
      IfscCode              : [],
      MicrCode              : [],
      BranchName            : [],
      AccountType           : []
    });

    if (this.config.data)
      this.getLocation(this.config.data.LocationId);
      this.setDataForEdit();
  }

  getLocation(id) {
    this.locationService.getLocationByID(id).subscribe((location) => {
      this.employeeForm.patchValue({ Location: location });
    });
  }

  searchLocation(event) {
    this.cusotmerService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    let employeeForm = this.config.data;
    employeeForm.DateOfJoining =  moment(this.config.data.DateOfJoining).toDate();
    employeeForm.DateOfLeaving = moment(this.config.data.DateOfLeaving).toDate();

    this.employeeForm.setValue(this.config.data);
  }

  saveEmployee() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let employee = this.employeeForm.value;
    employee.LocationId = employee.Location.LocationId;
    delete employee.Location;
    return this.http.post(this.isEditable ? APP_CONSTANT.EMPLOYEE_API.EDIT : APP_CONSTANT.EMPLOYEE_API.ADD, employee, httpOptions)
      .subscribe((employee) => {
        // login successful if there's a jwt token in the response
        if (employee) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(employee);
        }
        return employee;
      });
  }
}
