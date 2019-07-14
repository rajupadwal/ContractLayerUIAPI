import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-expencedetails-master',
  templateUrl: './expencedetails-master.component.html',
  styleUrls: ['./expencedetails-master.component.css']
})

export class ExpencedetailsMasterComponent implements OnInit {

  @Output() postData = new EventEmitter();

  expencedetailsForm: FormGroup;
  public isEditable: boolean = false;
  //resultList: any[] = [];
  //error: string = '';
  //success: string = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.expencedetailsForm = this.formBuilder.group({

      ExpencesNo: [0],
      Date: [],
      ExpenceId: [],
      LocationId: [],
      EmployeeId: [],
      PaymentMethod: [],
      ChequeNo: [],
      Amount: [],
      Narration: [],
      IsDeleted: [false],
      
    });
    if (this.config.data)
      this.setDataForEdit();

  }
  setDataForEdit = () => {
    this.isEditable = true;
    this.expencedetailsForm.setValue(this.config.data);
  }

  saveexpencedetails() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    let expencedetails = this.expencedetailsForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.EXPENCEDETAILS_API.EDIT : APP_CONSTANT.EXPENCEDETAILS_API.ADD, expencedetails, httpOptions)
      .subscribe((expencedetails) => {
        // login successful if there's a jwt token in the response
        if (expencedetails) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.postData.emit("supplier SAved")
          this.dialog.close(expencedetails);
        }
        return expencedetails;


      });

  }



}
