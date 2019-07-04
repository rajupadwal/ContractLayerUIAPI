import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})

export class SupplierMasterComponent implements OnInit {

  supplierForm: FormGroup;
  //resultList: any[] = [];
  //error: string = '';
  //success: string = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.supplierForm = this.formBuilder.group({

      SupplierId: [0],
      SupplierName: [],
      SupplierMobileNo: [],
      Address: [],
      State: [],
      District: [],
      Taluka: [],
    });
  }

  savesupplier() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    //let customer = this.customerForm.value;
    let supplier = this.supplierForm.value;

    return this.http.post(APP_CONSTANT.SUPPLIER_API.ADD, supplier, httpOptions)
      .subscribe((supplier) => {
        // login successful if there's a jwt token in the response
        if (supplier) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.router.navigateByUrl('/master/Supplierview');
        }
        return supplier;


      });

  }



}
