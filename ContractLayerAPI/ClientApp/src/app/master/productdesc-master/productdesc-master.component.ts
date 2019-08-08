import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-productdesc-master',
  templateUrl: './productdesc-master.component.html',
  styleUrls: ['./productdesc-master.component.css']
})

export class ProductdescMasterComponent implements OnInit {

  productdescmasterForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.productdescmasterForm = this.formBuilder.group({
      ProductId   : [0],
      ProductName: ["", Validators.required] 
     //IsDeleted    : [false]
    });
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.productdescmasterForm.setValue(this.config.data);
  }

  saveProductdescMaster() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let productdescmaster = this.productdescmasterForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.PRODUCTDESC_API.EDIT : APP_CONSTANT.PRODUCTDESC_API.ADD, productdescmaster, httpOptions)
      .subscribe((productdescmaster) => {
        // login successful if there's a jwt token in the response
        if (productdescmaster) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(productdescmaster);
        }
        return productdescmaster;
      });
  }
}
