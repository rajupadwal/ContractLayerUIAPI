import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-profile-master',
  templateUrl: './profile-master.component.html',
  styleUrls: ['./profile-master.component.css']
})

export class ProfileMasterComponent implements OnInit {

  profilemasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.profilemasterForm = this.formBuilder.group({
      ProfileId   : [0],
      CompanyName : [],
      PhoneNo     : [],
      Address     : [],
      GstNo       : [],
      EmailId     : [],
      MobileNo    : [],
      ThankYouNote: [],
      CompanyLogo : []
    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.profilemasterForm.setValue(this.config.data);
  }

  saveProfileMaster() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let profilemaster = this.profilemasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.PROFILE_API.EDIT : APP_CONSTANT.PROFILE_API.ADD, profilemaster, httpOptions)
      .subscribe((profilemaster) => {
        // login successful if there's a jwt token in the response
        if (profilemaster) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(profilemaster);
        }
        return profilemaster;
      });
  }
}
