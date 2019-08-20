import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { DialogConfig } from "src/app/dialog/dialog-config";
import { DialogRef } from '../../dialog/dialog-ref';
import { ProductService } from '../product-view/product.service';
import { ProductdescService } from '../productdesc-view/productdesc.service';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})

export class ProductMasterComponent implements OnInit {

  productForm: FormGroup;
  public productList: [];
  public unitList: [];
  public isEditable: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private config: DialogConfig, public dialog: DialogRef, private productdescservice: ProductdescService, private productservice :ProductService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({

      PkId         :  [0],
      Product      : [{}],
      ProductType: ["", Validators.required],
      Hsnsac       :  [],
      Unit         : [{}],
      PurchasePrice: ["0", Validators.required],
      SellingPrice: ["0", Validators.required],
      Cgst: [0],
      Sgst: [0],
      Igst         :  [0],
      MinimumQty   :  [0],
      OpeningStock: [0],
      ProductId: [],
      UnitId: []
    });
    if (this.config.isEditable == true) {
      this.getProduct(this.config.data.ProductId);
      this.getUnit(this.config.data.UnitId);
      this.setDataForEdit();
    }
  }

  getProduct(id) {
    this.productdescservice.getProductByID(id).subscribe((product) => {
      this.productForm.patchValue({ Product: product });
    });
  }

  searchProduct(event) {
    this.productdescservice.searchProduct(event.query).subscribe((data: any) => {
      this.productList = data;
    });
  }

  getUnit(id) {
    this.productservice.getUnitByID(id).subscribe((unit) => {
      this.productForm.patchValue({ Unit: unit });
    });
  }

  searchUnit(event) {
    this.productservice.searchUnit(event.query).subscribe((data: any) => {
      this.unitList = data;
    });
  }

  
  setDataForEdit = () => {
    this.isEditable = true;
    this.productForm.setValue(this.config.data);
  }

  
  saveProduct() {

    if (!this.dialog.validateForm11(this.productForm)) {
      return;
    }
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    let product1 = this.productForm.value;
    product1.ProductId = product1.Product.ProductId;
    product1.UnitId = product1.Unit.UnitId;
    delete product1.Product;
    delete product1.Unit; 
    return this.http.post(this.isEditable ? APP_CONSTANT.PRODUCT_API.EDIT : APP_CONSTANT.PRODUCT_API.ADD, product1, httpOptions)
      .subscribe((product1) => {
          // login successful if there's a jwt token in the response
        if (product1) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.dialog.close(product1);
          }
        return product1;
      });
  }
}
