import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})

export class ProductMasterComponent implements OnInit {

  productForm: FormGroup;
  public isEditable: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({

      PkId         :  [0],
      ProductId    :  [],
      ProductType  :  [],
      Hsnsac       :  [],
      Unit         :  [],
      PurchasePrice  :  [],
      SellingPrice :  [],
      Cgst         :  [],
      Sgst         :  [],
      Igst         :  [],
      MinimumQty   :  [],
      OpeningStock: []

    });
    if (this.config.data)
      this.setDataForEdit();
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.productForm.setValue(this.config.data);
  }
  
  saveProduct() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    let product = this.productForm.value;

    return this.http.post(this.isEditable ? APP_CONSTANT.PRODUCT_API.EDIT : APP_CONSTANT.PRODUCT_API.ADD, product, httpOptions)
      .subscribe((product) => {
          // login successful if there's a jwt token in the response
        if (product) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(product);
          }
        return product;
      });
  }

}
