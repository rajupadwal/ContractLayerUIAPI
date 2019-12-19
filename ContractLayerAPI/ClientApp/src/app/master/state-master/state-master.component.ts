import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { StateService } from '../state-view/state.service';

@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.css']
})

export class StateMasterComponent implements OnInit {

  statemasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private stateService: StateService) { }

  ngOnInit() {

    //if (this.config.isEditable == false) {
    //  this.expencetypeService.getExpenceNo()
    //    .subscribe((expenceno: any) => {
    //      this.statemasterForm.controls['stateId'].patchValue(expenceno);
    //    });
    //}

    this.statemasterForm = this.formBuilder.group({
      stateId: [0],
      stateName: ["", Validators.required],
      IsDeleted: [false]

    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.statemasterForm.setValue(this.config.data);
  }

  savestateMaster() {
    if (!this.dialog.validateForm(this.statemasterForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let statedetails = this.statemasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.STATEMASTER_API.EDIT : APP_CONSTANT.STATEMASTER_API.ADD, statedetails, httpOptions)
      .subscribe((statemaster) => {
        // login successful if there's a jwt token in the response
        if (statemaster) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(statemaster);
        }
        return statemaster;
      });
  }
}
