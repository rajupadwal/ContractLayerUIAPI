import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { TypeService } from '../type-view/type.service';

@Component({
  selector: 'app-type-master',
  templateUrl: './type-master.component.html',
  styleUrls: ['./type-master.component.css']
})

export class TypeMasterComponent implements OnInit {

  typemasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private typeservice: TypeService) { }

  ngOnInit() {

    //if (this.config.isEditable == false) {
    //  this.expencetypeService.getExpenceNo()
    //    .subscribe((expenceno: any) => {
    //      this.statemasterForm.controls['stateId'].patchValue(expenceno);
    //    });
    //}

    this.typemasterForm = this.formBuilder.group({
      TypeId: [0],
      TypeName: ["", Validators.required],
      CreateDate: [],
      UpdateDate: []

    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.typemasterForm.setValue(this.config.data);
  }

  saveTypeMaster() {
    if (!this.dialog.validateForm(this.typemasterForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let typedetails = this.typemasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.TYPEMASTER_API.EDIT : APP_CONSTANT.TYPEMASTER_API.ADD, typedetails, httpOptions)
      .subscribe((statemaster) => {
        // login successful if there's a jwt token in the response
        if (typedetails) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(typedetails);
        }
        return typedetails;
      });
  }
}
























































