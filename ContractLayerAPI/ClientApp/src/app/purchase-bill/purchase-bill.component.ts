import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CusotmerService } from "../master/customer-view/customer.service";
import { ProductService } from "../master/product-view/product.service";
import { PlanService } from "../master/plan-view/plan.service";
import { LocationService } from "../master/location-view/location.service";
import { DialogRef } from '../dialog/dialog-ref';
import { DialogConfig } from '../dialog/dialog-config';
import * as moment from 'moment';
import { ProductdescService } from '../master/productdesc-view/productdesc.service';
import { SupplierService } from '../master/supplier-view/supplier.service';

@Component({
  selector: 'app-purchase-bill',
  templateUrl: './purchase-bill.component.html',
  styleUrls: ['./purchase-bill.component.css']
})
export class PurchaseBillComponent implements OnInit {
  PurchaseBillDetailsList: any = [];
  PurchaseBillMaster: PurchaseBillMaster;
  supplierList;
  locationList;
  productlist;
  unitLists;
  isEditable: boolean = false;
  constructor(private formBuilder: FormBuilder, private supplierservice: SupplierService,
    private productService: ProductService,private productdescservice: ProductdescService,  private locationService: LocationService, public dialog: DialogRef, private config: DialogConfig, ) { }

  ngOnInit() {
    let detail = new PurchaseBillDetail();
    this.PurchaseBillDetailsList = [detail];
    this.PurchaseBillMaster = new PurchaseBillMaster();
    this.loadSuppliers();
    this.loadLocations();
    this.loadProducts();
    this.loadUnits();
    
    if (this.config.data)
      this.setDataForEdit();
  }


  calculatePurchase = () => {

    this.PurchaseBillMaster.BeforeTaxAmt = 0;
    this.PurchaseBillMaster.TransportationCost     = 0;
    this.PurchaseBillMaster.TransportationGSTPer   = 0;
    this.PurchaseBillMaster.TransportationGSTAmt   = 0;
    this.PurchaseBillMaster.TotalTransportAmt      = 0;
    this.PurchaseBillMaster.TotalCGSTAmt           = 0;
    this.PurchaseBillMaster.TotalSGSTAmt           = 0;
    this.PurchaseBillMaster.TotalIGSTAmt           = 0;
    this.PurchaseBillMaster.OtherCharges           = 0;
    this.PurchaseBillMaster.Roundoff               = 0;
    this.PurchaseBillMaster.GrandTotal         = 0;

    this.PurchaseBillDetailsList.forEach((key, value) => {
      this.PurchaseBillMaster.BeforeTaxAmt += key.TaxableAmt;

    })
  }

  calculateTaxableAmount(event,item) {
    item.TaxableAmt = parseFloat(item.Quantity) * parseFloat(item.Rate);
    item.TotalAmount = item.TaxableAmt + (parseFloat(item.TaxableAmt) * (parseFloat(item.CgstPercentage) / 100))
      + (parseFloat(item.TaxableAmt) * (parseFloat(item.SgstPercentage) / 100));
    this.calculatePurchase();
  }
  setDataForEdit = () => {
    this.isEditable = true;
    this.PurchaseBillMaster = this.config.data;
    this.PurchaseBillMaster.deletedDetailsList = [];
    this.PurchaseBillMaster.BillDate = moment(this.config.data.Date).toDate();
    this.PurchaseBillMaster.GRNDate = moment(this.config.data.Date).toDate();
    this.getAllPurchasebillmastedetails();
  }

  getAllPurchasebillmastedetails() {
    this.productService.getAllPurchasebillmastedetails(this.config.data).subscribe((response) => {
      this.PurchaseBillDetailsList = response;
      this.loadProducts();
      this.loadUnits();
    });
  }

  loadSuppliers = () => {
    this.supplierservice.loadSuppliers()
      .subscribe((supplier: any) => {
        this.supplierList = supplier;
      });
  }

  loadProducts = () => {
    this.productService.loadProducts()
      .subscribe((products: any) => {
        this.productlist = products;
        this.productlist.forEach((key: any, value: any) => {
          key.ProductTypeName = key.Product.ProductName + '-' + key.ProductType;
        })


        if (this.isEditable == true && this.PurchaseBillDetailsList) {
          this.PurchaseBillDetailsList.forEach((key: any, value: any) => {
            key.Product = this.productlist.find(p => p.ProductId == key.ProductId);
          })
        }
      });
  }

  loadLocations = () => {
    this.locationService.loadLocations()
      .subscribe((locaions: any) => {
        this.locationList = locaions;
      });
  }

  loadUnits = () => {
    this.productService.loadUnits()
      .subscribe((units: any) => {
        this.unitLists = units;
        if (this.isEditable == true && this.PurchaseBillDetailsList) {
          this.PurchaseBillDetailsList.forEach((key: any, value: any) => {
            key.Units = this.unitLists.find(p => p.UnitDescription == key.Unit);
          })
        }
      });
  }

  addNewItem = () => {
    let newDetails = new PurchaseBillDetail();
    newDetails.PkId = Date.now();
    newDetails.BillNo = this.PurchaseBillMaster.BillNo;
    newDetails.BillDate = new Date();
    newDetails.BillId = this.PurchaseBillMaster.BillId,
    newDetails.BatchNo = this.PurchaseBillMaster.BatchNo;
    this.PurchaseBillDetailsList.push(newDetails);
    this.calculatePurchase();
  }

  removeItem = (item) => {
    this.PurchaseBillMaster.deletedDetailsList.push(this.PurchaseBillDetailsList.find(p => p.PkId == item.PkId));
    this.PurchaseBillDetailsList = this.PurchaseBillDetailsList.filter(p => p.PkId != item.PkId);
    this.calculatePurchase();
  }
  saveItems = () => {
    delete this.PurchaseBillMaster.Location;
    delete this.PurchaseBillMaster.Supplier;
    this.PurchaseBillMaster.TblPurchaseBillDt = this.PurchaseBillDetailsList;

    this.PurchaseBillMaster.TblPurchaseBillDt.forEach((key: any, value: any) => {
      key.Product = null;
      key.PkId = 0;

    })

    //adding deleted records List
    this.productService.savePurchaseBills(this.PurchaseBillMaster);

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    this.dialog.close();

  }

  onSelectSuppliers = (value) => {
    this.PurchaseBillMaster.SupplierId = this.PurchaseBillMaster.Supplier.SupplierId;
  };
  onSelectLocations = (value) => {
    this.PurchaseBillMaster.LocationId = this.PurchaseBillMaster.Location.LocationId;
  };

  onSelectProducts = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    model.ProductType = model.Product.ProductType;
  };
  onSelectUnits = (value, model: any) => {
    model.Unit = model.Units.UnitDescription;
  };

  searchSupplier = (value) => {
    this.loadSuppliers();
  };

  searchLocation = (value) => {
    //made Api call for search
    this.loadLocations();
  };

  searchProduct = (value) => {
    //made Api call for search
    this.loadProducts();
  };
  searchUnits = (value) => {
    //made Api call for search
    this.loadUnits();
  };
}

export class PurchaseBillDetail {
  BillId: number = 0;
  BatchNo: string = '';
  BillNo: string = '';
  BillDate: Date = new Date();
  ProductId: number = 0;
  ProductType: string = '';
  Unit: string = '';
  HsnCode: string = '';
  Quantity: number=0;
  Rate: number = 0;
  Mrp: number = 0;
  Discount: number = 0;
  TaxableAmt: number = 0;
  CgstPercentage: number = 0;
  SgstPercentage: number = 0;
  IgstPercentage: number = 0;
  TotalAmount: number = 0;
  PkId: number = 0;
  Units: any;
  Product: any;
 
}

export class PurchaseBillMaster {
  BillId: number = 0;
  BatchNo: string = '';
  BillNo: string = '';
  BillDate: Date = new Date();
  GRNDate: Date = new Date();
  LocationId: number = 0;
  SupplierId: number = 0;
  BeforeTaxAmt: number = 0;
  TransportationCost: number = 0;
  TransportationGSTPer: number = 0;
  TransportationGSTAmt: number = 0;
  TotalTransportAmt: number = 0;
  TotalCGSTAmt: number = 0;
  TotalSGSTAmt: number = 0;
  TotalIGSTAmt: number = 0;
  OtherCharges: number = 0;
  Roundoff: number = 0;
  GrandTotal: number = 0;
  Narration: string = '';
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Supplier: any;
  TblPurchaseBillDt: PurchaseBillDetail[];
  deletedDetailsList: any[] = [];
}
