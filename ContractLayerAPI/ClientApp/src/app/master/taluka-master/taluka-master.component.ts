import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { StateService } from '../state-view/state.service';
import { DistrictService } from '../district-view/district.service';
import { TalukaService } from '../taluka-view/taluka.service';

@Component({
  selector: 'app-taluka-master',
  templateUrl: './taluka-master.component.html',
  styleUrls: ['./taluka-master.component.css']
})

export class TalukaMasterComponent implements OnInit {

  talukaForm: FormGroup;
  public stateList: [];
  public districtList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private stateservice: StateService, private districtService:DistrictService, private talukaservice:TalukaService ) { }

  ngOnInit() {
    this.talukaForm = this.formBuilder.group({
      TalukaId: [0],
      State: [{}],
      District: [{}],
      TalukaName: ["", Validators.required],
      StateId: [],
      DistrictId: [],
      CreateDate: [],
      UpdateDate: []
    });
    if (this.config.isEditable == true) {
      this.getState(this.config.data.StateId);
      this.setDataForEdit();
    }
  }

  onSelectState = (value) => {
    let newDetails = this.talukaForm.value;
    newDetails.StateId = newDetails.State.StateId;

    this.talukaservice.getDistrictByStateID(newDetails)
      .subscribe((district: any) => {
        this.districtList = district;
        this.districtList.forEach((key: any, value: any) => {
          key.DistrictName = key.DistrictName;
        })
      });
  };

  getState(id) {
    this.stateservice.getStatedetailsByID(id).subscribe((state) => {
      this.talukaForm.patchValue({ State: state });
    });
  }

  searchState(event) {
    this.stateservice.searchStateName(event.query).subscribe((data: any) => {
      this.stateList = data;
    });
  }

  searchDistrict(event) {
    this.districtService.searchDistrictName(event.query).subscribe((data: any) => {
      this.districtList = data;
    });
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.talukaForm.setValue(this.config.data);
  }

  saveTalukaMaster() {

    if (!this.dialog.validateForm11(this.talukaForm)) {
      return;
    }
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let talukadetails = this.talukaForm.value;
    talukadetails.StateId = talukadetails.State.StateId;
    talukadetails.DistrictId = talukadetails.District.DistrictId;
    delete talukadetails.State;
    delete talukadetails.District;
    return this.http.post(this.isEditable ? APP_CONSTANT.TALUKAMASTER_API.EDIT : APP_CONSTANT.TALUKAMASTER_API.ADD, talukadetails, httpOptions)
      .subscribe((talukadetails) => {
        if (talukadetails) {
          this.dialog.close(talukadetails);
        }
        return talukadetails;
      });
  }
}
