import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})

export class IncomeDetailsComponent implements OnInit {

  incomedetailsForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.incomedetailsForm = this.formBuilder.group({

      RecordNo              : [0],
      Date                  : [],
      LocationId            : [],
      TypeOfIncome          : [],
      Title                 : [],
      PaymentMethod         : [],
      ChequeNo              : [],
      Amount            : [],
      Narration             : [],
      IsDeleted             : [false]
    });

    if (this.config.data)
      this.setDataForEdit();
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.incomedetailsForm.setValue(this.config.data);
  }

  saveIncomeDetails() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let income = this.incomedetailsForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.INCOME_API.EDIT : APP_CONSTANT.INCOME_API.ADD, income, httpOptions)
      .subscribe((income) => {
        // login successful if there's a jwt token in the response
        if (income) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(income);
        }
        return income;
      });
  }
}
