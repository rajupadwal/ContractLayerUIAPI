import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from "../master/product-view/product.service";
import { LocationService } from "../master/location-view/location.service";
import { DialogRef } from '../dialog/dialog-ref';
import { DialogConfig } from '../dialog/dialog-config';
import * as moment from 'moment';
import { ProductdescService } from '../master/productdesc-view/productdesc.service';
import { SupplierService } from '../master/supplier-view/supplier.service';
import { PrintService } from "../printing/print.service";
import { PurchasebillreturnService } from '../purchasebillreturn-view/purchasebillreturn.service';

@Component({
  selector: 'app-purchase-billreturn',
  templateUrl: './purchase-billreturn.component.html',
  styleUrls: ['./purchase-billreturn.component.css']
})
export class PurchaseBillReturnComponent implements OnInit {
  PurchaseBillDetailsList: any = [];
  PurchaseBillMaster: PurchaseBillMaster;
  supplierList;
  locationList;
  productlist;
  producttypelist;
  isEditable: boolean = false;
  constructor(private formBuilder: FormBuilder, private supplierservice: SupplierService, private purchasebillService: PurchasebillreturnService,
    private productService: ProductService, private productdescservice: ProductdescService,
    private locationService: LocationService, public dialog: DialogRef, private config: DialogConfig, private printService: PrintService ) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.purchasebillService.getGRNNo()
        .subscribe((grnno: any) => {
          this.PurchaseBillMaster.BatchNo = grnno;

        });
    }

    let detail = new PurchaseBillDetail();
    this.PurchaseBillDetailsList = [detail];
    this.PurchaseBillMaster = new PurchaseBillMaster();
    this.loadSuppliers();
    this.loadLocations();
    this.loadProducts();
    //this.loadUnits();

    this.PurchaseBillMaster.BeforeTaxAmt = 0;
    this.PurchaseBillMaster.TransportationCost = 0;
    this.PurchaseBillMaster.TransportationGSTPer = 0;
    this.PurchaseBillMaster.TransportationGSTAmt = 0;
    this.PurchaseBillMaster.TotalTransportAmt = 0;
    this.PurchaseBillMaster.TotalCGSTAmt = 0;
    this.PurchaseBillMaster.TotalSGSTAmt = 0;
    this.PurchaseBillMaster.TotalIGSTAmt = 0;
    this.PurchaseBillMaster.OtherCharges = 0;
    this.PurchaseBillMaster.Roundoff = 0;
    this.PurchaseBillMaster.GrandTotal = 0;

    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
    else {
      this.loadProductTypes();
    }
  }


  calculatePurchase = () => {
    this.PurchaseBillMaster.BeforeTaxAmt = 0;
    this.PurchaseBillMaster.TotalCGSTAmt = 0;
    this.PurchaseBillMaster.TotalSGSTAmt = 0;

    this.PurchaseBillDetailsList.forEach((key, value) => {
      this.PurchaseBillMaster.BeforeTaxAmt += key.TaxableAmt;
    })

    this.PurchaseBillDetailsList.forEach((key, value) => {
      this.PurchaseBillMaster.GrandTotal += key.TotalAmount;
    })

    this.PurchaseBillDetailsList.forEach((key, value) => {
      this.PurchaseBillMaster.TotalCGSTAmt += (parseFloat(key.TaxableAmt) * (parseFloat(key.CgstPercentage) / 100));
    })

    this.PurchaseBillDetailsList.forEach((key, value) => {
      this.PurchaseBillMaster.TotalSGSTAmt += (parseFloat(key.TaxableAmt) * (parseFloat(key.SgstPercentage) / 100));
    })

    //this.PurchaseBillDetailsList.forEach((key, value) => {
    //  this.PurchaseBillMaster.TotalIGSTAmt += (parseFloat(key.TaxableAmt) * (parseFloat(key.IgstPercentage) / 100));
    //})
    this.calculateTransportAmount(event);
  }

  calculateTaxableAmount(event, item) {
    item.TaxableAmt = parseFloat(item.RejectedQty) * parseFloat(item.Rate);
    item.TotalAmount = item.TaxableAmt + (parseFloat(item.TaxableAmt) * (parseFloat(item.CgstPercentage) / 100))
      + (parseFloat(item.TaxableAmt) * (parseFloat(item.SgstPercentage) / 100));

    this.calculatePurchase();
  }

  calculateTransportAmount(event) {
    this.PurchaseBillMaster.TransportationGSTAmt = parseFloat(this.PurchaseBillMaster.TransportationCost.toString()) * (parseFloat(this.PurchaseBillMaster.TransportationGSTPer.toString()) / 100);
    this.PurchaseBillMaster.TotalTransportAmt = parseFloat(this.PurchaseBillMaster.TransportationGSTAmt.toString()) + parseFloat(this.PurchaseBillMaster.TransportationCost.toString());
    this.PurchaseBillMaster.GrandTotal = parseFloat(this.PurchaseBillMaster.OtherCharges.toString()) + parseFloat(this.PurchaseBillMaster.BeforeTaxAmt.toString()) + parseFloat(this.PurchaseBillMaster.TotalCGSTAmt.toString()) + parseFloat(this.PurchaseBillMaster.TotalSGSTAmt.toString()) + parseFloat(this.PurchaseBillMaster.TransportationGSTAmt.toString()) + parseFloat(this.PurchaseBillMaster.TransportationCost.toString());
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.PurchaseBillMaster = this.config.data;
    this.PurchaseBillMaster.deletedDetailsList = [];
    this.PurchaseBillMaster.BillDate = moment(this.config.data.BillDate).toDate();
    this.PurchaseBillMaster.GRNDate = moment(this.config.data.GRNDate).toDate();
    this.getAllPurchasebillmastedetails();
  }

  getAllPurchasebillmastedetails() {
    this.productService.getAllPurchasebillreturnmastedetails(this.config.data).subscribe((response) => {
      this.PurchaseBillDetailsList = response;
      this.loadProducts();
      this.loadProductTypes();
      //this.loadUnits();
    });
  }

  loadSuppliers = () => {
    this.supplierservice.loadSuppliers()
      .subscribe((supplier: any) => {
        this.supplierList = supplier;
      });
  }

  loadProductTypes() {
    this.productService.loadProducts()
      .subscribe((products: any) => {
        this.producttypelist = products;
        this.producttypelist.forEach((key: any, value: any) => {
          key.ProductTypeUnit = key.ProductType + '-' + key.Unit.UnitDescription;
        })
        if (this.isEditable == true && this.PurchaseBillDetailsList) {
          this.PurchaseBillDetailsList.forEach((key: any, value: any) => {
            let productType = this.producttypelist.find(p => p.ProductId == key.ProductId && p.UnitId == key.Unit && p.ProductType == key.ProductType);
            if (productType) {
              key.Producttypeun = productType;
              key.ProductTypeUnit = productType.ProductType + '-' + productType.Unit.UnitDescription;
            }

          })
        }
      });
  }

  loadProducts = () => {
    this.productdescservice.loadProducts()
      .subscribe((products: any) => {
        this.productlist = products;

        if (this.isEditable == true && this.PurchaseBillDetailsList) {
          this.PurchaseBillDetailsList.forEach((key: any, value: any) => {
            key.Product = this.productlist.find(p => p.ProductId == key.ProductId);

          })
        }
      });
  }

  loadLocations = () => {
    this.locationService.loadLocations()
      .subscribe((locations: any) => {
        this.locationList = locations;
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
  saveItems = (isPrint) => {

    let purchaseDetails = {};
    Object.assign(purchaseDetails, this.PurchaseBillMaster );

    var a = new Date(this.PurchaseBillMaster.BillDate);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    this.PurchaseBillMaster.BillDate = moment(b).toDate();

    var c = new Date(this.PurchaseBillMaster.GRNDate);
    var d = new Date(c.getTime() + day);
    this.PurchaseBillMaster.GRNDate = moment(d).toDate();

    delete this.PurchaseBillMaster.Location;
    delete this.PurchaseBillMaster.Supplier;
    this.PurchaseBillMaster.TblPurchaseBillReturnDt = this.PurchaseBillDetailsList;


    this.PurchaseBillMaster.TblPurchaseBillReturnDt.forEach((key: any, value: any) => {
      key.Product = null;
      key.PkId = 0;
      key.Producttypeun = null;
    })

    //adding deleted records List
    this.productService.savePurchaseBillReturns(this.PurchaseBillMaster).subscribe((response) => {
      this.dialog.close("Purchase Bill master added successfully");
      if (isPrint && isPrint == true) {
        this.printService.printDocument("PurchaseBill","");
      }
    });
   
    // store user details and jwt token in local storage to keep user logged in between page refreshes
   
  }
  

  onSelectSuppliers = (value) => {
    this.PurchaseBillMaster.SupplierId = this.PurchaseBillMaster.Supplier.SupplierId;
  };
  onSelectLocations = (value) => {
    this.PurchaseBillMaster.LocationId = this.PurchaseBillMaster.Location.LocationId;
  };

  onSelectProducts = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    this.PurchaseBillDetailsList.ProductId = model.ProductId;

    }

  onSelectProducttypes = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    model.ProductType = model.Producttypeun.ProductType;
    model.Unit = model.Producttypeun.Unit.UnitId;
    model.Rate = model.Producttypeun.SellingPrice;
    model.CgstPercentage = model.Producttypeun.Cgst;
    model.SgstPercentage = model.Producttypeun.Sgst;
    model.HsnCode = model.Producttypeun.Hsnsac;
  };

 
  searchProducttype = (value, item) => {
    let newDetails = new PurchaseBillDetail();
    newDetails.ProductId = item.ProductId;
    let prdList = []
    if (this.producttypelist && this.producttypelist.length > 0) {
      prdList = JSON.parse(JSON.stringify(this.producttypelist));
    }
    item.productTypeList = [];
    item.productTypeList = prdList.filter(p => p.ProductId == item.ProductId);
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
  
}

export class PurchaseBillDetail {
  BillId: number = 0;
  BatchNo: string = '';
  BillNo: string = '';
  BillDate: Date = new Date();
  ProductId: number = 0;
  ProductType: string = '';
  Unit: string;
  HsnCode: string = '';
  Quantity: number = 0;
  RejectedQty: number = 0;
  Rate: number = 0;
  Mrp: number = 0;
  Discount: number = 0;
  TaxableAmt: number = 0;
  CgstPercentage: number = 0;
  SgstPercentage: number = 0;
  IgstPercentage: number = 0;
  TotalAmount: number = 0;
  PkId: number = 0;
  Producttypeun: any;
  Product: any;
  productTypeList = [];
 
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
  TblPurchaseBillReturnDt: PurchaseBillDetail[];
  deletedDetailsList: any[] = [];
}
