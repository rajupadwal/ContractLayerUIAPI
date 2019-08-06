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
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})

export class SupplierMasterComponent implements OnInit {

  @Output() postData = new EventEmitter();
  
  supplierForm: FormGroup;
  public isEditable: boolean = false;
  //resultList: any[] = [];
  //error: string = '';
  //success: string = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.supplierForm = this.formBuilder.group({

      SupplierId  : [0],
      SupplierName : [],
      SupplierMobileNo : [],
      Address : [],
      State : [],
      District : [],
      Taluka : [],
      PlantAddress	:[],
      City : [],
      Pincode : [],
      WebAddress : [],
      RegistrationNo : [],
      GstNo : [],
      PanNo : [],
      Remarks : [],
      ContactPerson : [],
      ConatctPersonNo : [],
      Designation : [],
      BankName : [],
      AccountNo : [],
      IfscCode : [],
      MicrCode : [],
      BranchName : [],
      AccountType : [],
    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }
  setDataForEdit = () => {
    this.isEditable = true;
    this.supplierForm.setValue(this.config.data);
  }
  
  savesupplier() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    let supplier = this.supplierForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.SUPPLIER_API.EDIT : APP_CONSTANT.SUPPLIER_API.ADD, supplier, httpOptions)
      .subscribe((supplier) => {
        // login successful if there's a jwt token in the response
        if (supplier) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.postData.emit("supplier SAved")
          this.dialog.close(supplier);
        }
        return supplier;


      });

  }



}
