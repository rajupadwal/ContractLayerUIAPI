import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-expencetype-master',
  templateUrl: './expencetype-master.component.html',
  styleUrls: ['./expencetype-master.component.css']
})

export class ExpencetypeMasterComponent implements OnInit {

  expencetypeForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.expencetypeForm = this.formBuilder.group({
      ExpenceId: [0],
      ExpenceType: [],
      IsDeleted:[false]
                 
    });
    if (this.config.data)
      this.setDataForEdit();
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.expencetypeForm.setValue(this.config.data);
  }

  saveExpenceType() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let expencetype = this.expencetypeForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.EXPENCETYPE_API.EDIT : APP_CONSTANT.EXPENCETYPE_API.ADD, expencetype, httpOptions)
      .subscribe((expencetype) => {
        // login successful if there's a jwt token in the response
        if (expencetype) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(expencetype);
        }
        return expencetype;
      });
  }
}
