import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  customerForm: FormGroup;
  //resultList: any[] = [];
  //error: string = '';
  //success: string = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient ) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({

       CustomerId         :[0],
       CustmerName        :["ABC"],
       CustomerMobileNo   :["ABC"],
       Address            :["ABC"],
       //PlantAddress       :["ABC"],
       State              :["ABC"],
       District           :["ABC"],
       Taluka             :["ABC"],
       City               :["ABC"],
       Pincode            :["ABC"],
       Location           :["ABC"],
       GstNo              :["ABC"],
       PanNo              :["ABC"],
       ContactPerson      :["ABC"],
       ConatctPersonNo    :["ABC"],
       Designation        :["ABC"],
       BankName           :["ABC"],
       AccountNo          :["ABC"],
       IfscCode           :["ABC"],
       //MicrCode           :["ABC"],
       //BranchName         :["ABC"],
       AccountType: [""],
       IsDeleted: [false],


      //Dprid: [{ value: 0, disabled: true }],
      //ClientItemGroupDetailId: [{}, Validators.required],
      //ProjectItemGroupDetailId: [{}, Validators.required],
      //DprcontractorItemGroupDetailId: [{}, Validators.required],
      //WorkNameItemGroupDetailId: [{}, Validators.required],
      //TargetDate: [dt, Validators.required],
      //Dprdate: [dt, Validators.required],
      //DprassociateNameItemGroupDetailId: [{}, Validators.required],
     
      //KtrepresentativeItemGroupDetailId: [{}, Validators.required],
      //ReportText: ['', Validators.required],
    });
  }
  
  saveCustomer() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
      let cusotmer = this.customerForm.value;
    //let customer = {
    //  AccountNo: "ABC",
    //  AccountType: "",
    //  Address: "ABC",
    //  BankName: "ABC",
    //  City: "ABC",
    //  ConatctPersonNo: "ABC",
    //  ContactPerson: "ABC",
    //  CustmerName: "ABC",
    //  CustomerId: 0,
    //  CustomerMobileNo: "ABC",
    //  Designation: "ABC",
    //  District: "ABC",
    //  GstNo: "ABC",
    //  IfscCode: "ABC",
    //  IsDeleted: 0,
    //  Location: "ABC",
    //  PanNo: "ABC",
    //  Pincode: "ABC",
    //  State: "ABC",
    //  Taluka: "ABC",
    //}


      return this.http.post(APP_CONSTANT.CUSOTMER_API.ADD, cusotmer, httpOptions)
        .subscribe((user) => {
          // login successful if there's a jwt token in the response
          if (user) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log('user added successfully');
          }
          return user;
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
