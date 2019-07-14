import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-employeeadvance-details',
  templateUrl: './employeeadvance-details.component.html',
  styleUrls: ['./employeeadvance-details.component.css']
})

export class EmployeeadvanceDetailsComponent implements OnInit {

  employeeadvanceForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.employeeadvanceForm = this.formBuilder.group({
      RecordNo        : [0],
      RecordDate      : [],
      LocationName    : [],
      Advance         : [],
      Narration       : [],
      EmployeeName    : []
    });
    if (this.config.data)
      this.setDataForEdit();
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.employeeadvanceForm.setValue(this.config.data);
  }

  saveEmployeeAdvance() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let employeeadvance = this.employeeadvanceForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.EMPLOYEEADVANCE_API.EDIT : APP_CONSTANT.EMPLOYEEADVANCE_API.ADD, employeeadvance, httpOptions)
      .subscribe((employeeadvance) => {
        // login successful if there's a jwt token in the response
        if (employeeadvance) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(employeeadvance);
        }
        return employeeadvance;
      });
  }
}
