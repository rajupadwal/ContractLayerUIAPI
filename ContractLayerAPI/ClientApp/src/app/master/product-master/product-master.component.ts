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
      ProductType  :  [],
      Hsnsac       :  [],
      Unit         : [{}],
      PurchasePrice  :  [],
      SellingPrice :  [],
      Cgst         :  [],
      Sgst         :  [],
      Igst         :  [],
      MinimumQty   :  [],
      OpeningStock: [],
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
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    let product = this.productForm.value;
   // customer.LocationId = customer.Location.LocationId;
    //product.ProductId = product.ProductName.ProductId;
    product.ProductId = product.Product.ProductId;
    product.UnitId = product.Unit.UnitId;
    delete product.Product;
    delete product.Unit; 
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
