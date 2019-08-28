import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';
import { ProductService } from "../../master/product-view/product.service";
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-farmer-inward',
  templateUrl: './farmer-inward.print.component.html',
  styleUrls: ['./farmer-inward.print.component.css']
})
export class FarmerInwardPrintComponent implements OnInit {
  FarmerInwardMaster: any;
  FarmerInwardDetailsList: any = [];
  productlist;
  producttypelist;

  ngOnInit() {
    this.FarmerInwardMaster = this.printService.documentData;
    this.setDataForEdit();

  }
  constructor(route: ActivatedRoute, private productService: ProductService, private productdescservice: ProductdescService,
    private printService: PrintService) {
  }

  setDataForEdit = () => {
    this.FarmerInwardMaster.deletedDetailsList = [];
    this.getAllFarmerinwardmastedetails();
  }

  getAllFarmerinwardmastedetails() {
    this.productService.getAllFarmerinwardmastedetails(this.FarmerInwardMaster).subscribe((response) => {
      this.FarmerInwardDetailsList = response;
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

        this.FarmerInwardDetailsList.forEach((key: any, value: any) => {
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

        this.FarmerInwardDetailsList.forEach((key: any, value: any) => {
          key.Product = this.productlist.find(p => p.ProductId == key.ProductId);

        })
      });
  }
}

export class FarmerInwardDetail {
  PkId: number;
  RecordNo: number = 0;;
  Date: Date = new Date();
  ProductId: number = 0;
  ProductType: string;
  Unit: string;
  Quantity: number;
  Units: any;
  Product: any;
  Producttypeun: any;
  productTypeList = [];
}

export class FarmerInwardMaster {
  PkId: number = 0;
  RecordNo: number = 0;
  Date: Date = new Date();
  LocationId: number = 0;
  CustomerId: number = 0;
  PlanId: number = 0;
  CollectionAgentName: string;
  //TotalQty: number = 0;
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Plan: any;
  Customer: any;
  TblFarmerInwardDt: FarmerInwardDetail[];
}
