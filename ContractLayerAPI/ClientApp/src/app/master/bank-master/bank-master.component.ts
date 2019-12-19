import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { BankService } from '../bank-view/bank.service';

@Component({
  selector: 'app-bank-master',
  templateUrl: './bank-master.component.html',
  styleUrls: ['./bank-master.component.css']
})

export class BankMasterComponent implements OnInit {

  bankmasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private bankService: BankService) { }

  ngOnInit() {

    //if (this.config.isEditable == false) {
    //  this.expencetypeService.getExpenceNo()
    //    .subscribe((expenceno: any) => {
    //      this.bankmasterForm.controls['BankId'].patchValue(expenceno);
    //    });
    //}

    this.bankmasterForm = this.formBuilder.group({
      BankId: [0],
      BankName: ["", Validators.required],
      IsDeleted: [false]

    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.bankmasterForm.setValue(this.config.data);
  }

  saveBankMaster() {
    if (!this.dialog.validateForm(this.bankmasterForm)) {
      return;
    }

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let bankdetails = this.bankmasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.BANKMASTER_API.EDIT : APP_CONSTANT.BANKMASTER_API.ADD, bankdetails, httpOptions)
      .subscribe((bankmaster) => {
        // login successful if there's a jwt token in the response
        if (bankmaster) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(bankmaster);
        }
        return bankmaster;
      });
  }
}
