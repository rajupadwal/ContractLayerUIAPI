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
  selector: 'app-district-master',
  templateUrl: './district-master.component.html',
  styleUrls: ['./district-master.component.css']
})

export class DistrictMasterComponent implements OnInit {

  districtForm: FormGroup;
  public stateList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private stateservice: StateService) { }

  ngOnInit() {
    this.districtForm = this.formBuilder.group({

      DistrictId: [0],
      State: [{}],
      DistrictName: ["", Validators.required],
      StateId: [],
      CreateDate: [],
      UpdateDate: []
    });
    if (this.config.isEditable == true) {
      this.getState(this.config.data.StateId);
      this.setDataForEdit();
    }
  }

  getState(id) {
    this.stateservice.getStatedetailsByID(id).subscribe((state) => {
      this.districtForm.patchValue({ State: state });
    });
  }

  searchState(event) {
    this.stateservice.searchStateName(event.query).subscribe((data: any) => {
      this.stateList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.districtForm.setValue(this.config.data);
  }

  saveDistrictMaster() {

    if (!this.dialog.validateForm11(this.districtForm)) {
      return;
    }
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let districtdetails = this.districtForm.value;
    districtdetails.StateId = districtdetails.State.StateId;
    delete districtdetails.State;
    return this.http.post(this.isEditable ? APP_CONSTANT.DISTRICTMASTER_API.EDIT : APP_CONSTANT.DISTRICTMASTER_API.ADD, districtdetails, httpOptions)
      .subscribe((districtdetails) => {
        // login successful if there's a jwt token in the response
        if (districtdetails) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(districtdetails);
        }
        return districtdetails;
      });
  }
}
