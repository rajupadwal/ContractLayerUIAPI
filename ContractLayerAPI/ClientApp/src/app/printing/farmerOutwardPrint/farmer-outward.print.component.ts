import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';
import { ProductService } from "../../master/product-view/product.service";
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-farmer-outward',
  templateUrl: './farmer-outward.print.component.html',
  styleUrls: ['./farmer-outward.print.component.css']
})
export class FarmerOutwardPrintComponent implements OnInit {
  FarmerOutwardMaster: any;
  FarmerOutwardDetailsList: any = [];
  productlist;
  producttypelist;

  ngOnInit() {
    this.FarmerOutwardMaster = this.printService.documentData;
    this.setDataForEdit();

  }
  constructor(route: ActivatedRoute, private productService: ProductService, private productdescservice: ProductdescService,
    private printService: PrintService) {
  }

  setDataForEdit = () => {
    this.FarmerOutwardMaster.deletedDetailsList = [];
    this.getAllFarmeroutwardmastedetails();
  }

  getAllFarmeroutwardmastedetails() {
    this.productService.getAllFarmeroutwardmastedetails(this.FarmerOutwardMaster).subscribe((response) => {
      this.FarmerOutwardDetailsList = response;
      this.loadProducts();
      this.loadProductTypes();
      //this.loadUnits();
    });
  }


  loadProductTypes() {
    this.productService.loadProducts()
      .subscribe((products: any) => {
        this.producttypelist = products;
        this.producttypelist.forEach((key: any, value: any) => {
          key.ProductTypeUnit = key.ProductType + '-' + key.Unit.UnitDescription;
        })

        this.FarmerOutwardDetailsList.forEach((key: any, value: any) => {
          let productType = this.producttypelist.find(p => p.ProductId == key.ProductId && p.UnitId == key.Unit && p.ProductType == key.ProductType);
          if (productType) {
            key.Producttypeun = productType;
            key.ProductTypeUnit = productType.ProductType + '-' + productType.Unit.UnitDescription;
          }

        })

        setTimeout(() => {
          this.printService.onDataReady();
        }, 3000);

      });
  }

  loadProducts = () => {
    this.productdescservice.loadProducts()
      .subscribe((products: any) => {
        this.productlist = products;

        this.FarmerOutwardDetailsList.forEach((key: any, value: any) => {
          key.Product = this.productlist.find(p => p.ProductId == key.ProductId);

        })
      });
  }
}

export class FarmerOutwardDetail {
  PkId: number;
  RecordNo: number = 0;;
  Date: Date = new Date();
  ProductId: number = 0;
  ProductType: string;
  Unit: string;
  Quantity: number = 0;
  AvailableStock: number = 0;
  Product: any;
  Producttypeun: any;
  productTypeList = [];
}

export class FarmerOutwardMaster {
  PkId: number;
  RecordNo: number = 0;
  Date: Date = new Date();
  LocationId: number = 0;
  CustomerId: number = 0;
  PlanId: number = 0;
  //TotalQty: number = 0;
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Plan: any;
  Customer: any;
  TblFarmerOutwardDt: FarmerOutwardDetail[];
}
