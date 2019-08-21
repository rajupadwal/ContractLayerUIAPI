import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';
import { ProductService } from "../../master/product-view/product.service";
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
import * as moment from 'moment';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.print.component.html',
  styleUrls: ['./create-sale.print.component.css']
})
export class CreateSalePrintComponent implements OnInit {
  FarmerChickEggsBillMaster: any;
  FarmerChickEggsBillDetailList: any = [];
  productlist;
  producttypelist;

  ngOnInit() {
    this.FarmerChickEggsBillMaster = this.printService.documentData;
    this.setDataForEdit();

  }
  constructor(route: ActivatedRoute, private productService: ProductService, private productdescservice: ProductdescService,
    private printService: PrintService) {
  }

  setDataForEdit = () => {
    this.FarmerChickEggsBillMaster.deletedDetailsList = [];
    this.getAllPurchasebillmastedetails();
  }

  getAllPurchasebillmastedetails() {
    this.productService.getAllFarmerchickeggbilldetails(this.FarmerChickEggsBillMaster).subscribe((response) => {
      this.FarmerChickEggsBillDetailList = response;
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

        this.FarmerChickEggsBillDetailList.forEach((key: any, value: any) => {
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

        this.FarmerChickEggsBillDetailList.forEach((key: any, value: any) => {
          key.Product = this.productlist.find(p => p.ProductId == key.ProductId);

        })
      });
  }
}

export class FarmerChickEggsBillDetail {
  PkId: number;
  BillId: number = 0;
  BillNo: string = '';
  BillDate: Date = new Date();
  ProductId: number = 0;
  Unit: string;
  Quantity: number = 0;
  Rate: number = 0;
  Amount: number = 0;
  Producttypeun: any;
  Product: any;
  productTypeList = [];
}

export class FarmerChickEggsBillMaster {
  BillNo: string = '';
  BillDate: Date = new Date();
  LocationId: number = 0;
  CustomerId: number = 0;
  PlanId: number = 0;
  OutstandingAmt: number = 0;
  PlaceOfSupply: string = '';
  Address: string = '';
  TotalAmount: number = 0;
  TdsAmount: number = 0;
  AdminChargesAmt: number = 0;
  OtherCharges: number = 0;
  GrandTotal: number = 0;
  //TotalQty: number = 0;
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Plan: any;
  Customer: any;
  TblSalesBillDt: FarmerChickEggsBillDetail[];
}
