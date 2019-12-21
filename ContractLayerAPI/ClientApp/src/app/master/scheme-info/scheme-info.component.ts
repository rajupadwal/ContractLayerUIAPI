import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { DialogConfig } from "src/app/dialog/dialog-config";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogRef } from '../../dialog/dialog-ref';
import * as moment from 'moment';

@Component({
  selector: 'app-scheme-info',
  templateUrl: './scheme-info.component.html',
  styleUrls: ['./scheme-info.component.css']
})

export class SchemeInfoComponent implements OnInit {

  schemeForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.schemeForm = this.formBuilder.group({
      
      SchemeId: [0],
      SchemeName: ["", Validators.required],
      SanctionOrderNo: [],
      SanctionDate: ["", Validators.required],
      DueDate: ["", Validators.required],
      CreateDate: [],
      UpdateDate: [] 
    });
  
  if(this.config.data)
      this.setDataForEdit();

  }
 setDataForEdit = () => {
   this.isEditable = true;
   let schemeForm = this.config.data;
   
   schemeForm.SanctionDate = moment(this.config.data.SanctionDate).toDate();
   schemeForm.DueDate = moment(this.config.data.DueDate).toDate();
   this.schemeForm.setValue(this.config.data);
}

  saveScheme() {
    if (!this.dialog.validateForm8(this.schemeForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let schemeinfo = this.schemeForm.value;

  return this.http.post(this.isEditable ? APP_CONSTANT.SCHEME_API.EDIT : APP_CONSTANT.SCHEME_API.ADD, schemeinfo, httpOptions)
    .subscribe((scheme) => {
      if (scheme) {
          this.dialog.close(scheme);
        }
      return scheme;
      });
  }
}
