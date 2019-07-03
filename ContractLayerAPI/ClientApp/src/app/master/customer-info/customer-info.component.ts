import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent implements OnInit {

  customerForm: FormGroup;
  public isEditable:boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef ) { }

  ngOnInit() {
  
    this.customerForm = this.formBuilder.group({
          AccountType        : [], 
          Address            : [], 
          BankName           : [], 
          City               : [], 
          ConatctPersonNo    : [], 
          ContactPerson      : ["this is sample"], 
          CustmerName        : [], 
          CustomerId         : [0], 
          CustomerMobileNo   : [], 
          Designation        : [], 
          District           : [], 
          GstNo              : [], 
          IfscCode           : [], 
          IsDeleted          : [false], 
          Location           : [], 
          PanNo              : [], 
          Pincode            : [], 
          State              : [], 
          Taluka             : [], 
          AccountNo: [],
          PlantAddress: [],
          MicrCode :[],
          BranchName :[],
          
    });
    if (this.config.data)
    this.setDataForEdit();
  
  }



  setDataForEdit = () => {
    this.isEditable = true;
    this.customerForm.setValue(this.config.data);
  }
  saveCustomer() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    //let customer = this.customerForm.value;
    let customer = this.customerForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.CUSOTMER_API.EDIT:APP_CONSTANT.CUSOTMER_API.ADD, customer, httpOptions)
      .subscribe((customer) => {
          // login successful if there's a jwt token in the response
        if (customer) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(customer);
          }
        return customer;
        

      });
    
  }
  
  
  //public Search(groupName:string,$event) {
  //  //this.resultList = this.dprService.itemGroupDetails.filter(x => x.GroupName.toUpperCase() == groupName.toUpperCase() && x.ItemName.toUpperCase().indexOf($event.query.toUpperCase())>=0);
  //}
  //onSubmit = () => {
  //  if (this.addDPRForm.status == "INVALID") {
  //    return;
  //  }
  //  this.saveChanges();
  //}

  //public saveChanges() {
  // let formToSubmit={}
  // Object.keys(this.addDPRForm.controls).forEach(key => {
  //   let value = this.addDPRForm.get(key).value["ItemDetailId"] ? this.addDPRForm.get(key).value["ItemDetailId"] : this.addDPRForm.get(key).value;
  //   formToSubmit[key] = value
  // });
  ////  this.dprService.saveDPRDetails(JSON.stringify(formToSubmit)).subscribe((response) => {

  ////    this.success = 'Record Saved Sucessfully !';
  ////    this.displayMessage();
  ////  },
  ////    (error) => {

  ////      this.error = "Get an Error while Saving the DPR..Please try again!";
  ////      this.displayMessage();
  ////    });
  //}
  //public clear = () => {
  //  this.ngOnInit();
  //  this.addDPRForm.markAsPristine();
  //}

  //displayMessage() {
  //  setTimeout(() => {
  //    this.error = '';
  //    this.success = '';
  //  }, 5000)
  //}

}
