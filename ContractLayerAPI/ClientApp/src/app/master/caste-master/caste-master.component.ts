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
  selector: 'app-caste-master',
  templateUrl: './caste-master.component.html',
  styleUrls: ['./caste-master.component.css']
})

export class CasteMasterComponent implements OnInit {

  castemasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef ) { }

  ngOnInit() {
    this.castemasterForm = this.formBuilder.group({
     CasteId: [0],
      CasteName: ["", Validators.required],
      CreateDate: [],
      UpdateDate: []

    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.castemasterForm.setValue(this.config.data);
  }

  saveCasteMaster() {
    if (!this.dialog.validateForm(this.castemasterForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let castedetails = this.castemasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.CASTEMASTER_API.EDIT : APP_CONSTANT.CASTEMASTER_API.ADD, castedetails, httpOptions)
      .subscribe((castemaster) => {
        if (castemaster) {
          this.dialog.close(castemaster);
        }
        return castemaster;
      });
  }
}
