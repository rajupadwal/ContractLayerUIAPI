import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { BankService } from '../bank-view/bank.service';

@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.css']
})

export class BranchMasterComponent implements OnInit {

  branchForm: FormGroup;
  public bankList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private bankservice: BankService) { }

  ngOnInit() {
    this.branchForm = this.formBuilder.group({

      BranchId         :  [0],
      Bank       : [{}],
      BranchName   : ["", Validators.required],
      IfscCode     :  [],
      BankId      : [],
      CreateDate   : [],
      UpdateDate   : []
    });
    if (this.config.isEditable == true) {
      this.getBank(this.config.data.BankId);
      this.setDataForEdit();
    }
  }

  getBank(id) {
    this.bankservice.getBankdetailsByID(id).subscribe((bank) => {
      this.branchForm.patchValue({ Bank: bank });
    });
  }

  searchBank(event) {
    this.bankservice.searchBankName(event.query).subscribe((data: any) => {
      this.bankList = data;
    });
  }
   
  setDataForEdit = () => {
    this.isEditable = true;
    this.branchForm.setValue(this.config.data);
  }
  
  saveBranch() {

    if (!this.dialog.validateForm11(this.branchForm)) {
      return;
    }
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    let branchdetails = this.branchForm.value;
    branchdetails.BankId = branchdetails.Bank.BankId;
    delete branchdetails.Bank;
    return this.http.post(this.isEditable ? APP_CONSTANT.BRANCH_API.EDIT : APP_CONSTANT.BRANCH_API.ADD, branchdetails, httpOptions)
      .subscribe((branchdetails) => {
          // login successful if there's a jwt token in the response
        if (branchdetails) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(branchdetails);
          }
        return branchdetails;
      });
  }
}
