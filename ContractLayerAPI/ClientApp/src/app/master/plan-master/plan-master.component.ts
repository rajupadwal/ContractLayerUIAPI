import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-plan-master',
  templateUrl: './plan-master.component.html',
  styleUrls: ['./plan-master.component.css']
})

export class PlanMasterComponent implements OnInit {

  planmasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.planmasterForm = this.formBuilder.group({
      PlanId    : [0],
      PlanName  : [],
      ChickAgeInDays  : [],
      DurationInDays  : [],
      NoOfChicks  : [],
      EggsReturn  : [],
      ChicksReturnRate  : [],
      Amount      : [],
      AdminCharges      : []
      
    });
    if (this.config.data)
      this.setDataForEdit();
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.planmasterForm.setValue(this.config.data);
  }

  savePlanMaster() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let planmaster = this.planmasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.PLAN_API.EDIT : APP_CONSTANT.PLAN_API.ADD, planmaster, httpOptions)
      .subscribe((planmaster) => {
        // login successful if there's a jwt token in the response
        if (planmaster) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(planmaster);
        }
        return planmaster;
      });
  }
}
