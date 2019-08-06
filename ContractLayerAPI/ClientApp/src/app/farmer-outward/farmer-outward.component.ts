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
import { FarmeroutwardService } from '../farmeroutward-view/farmeroutward.service';

@Component({
  selector: 'app-farmer-outward',
  templateUrl: './farmer-outward.component.html',
  styleUrls: ['./farmer-outward.component.css']
})
export class FarmerOutwardComponent implements OnInit {
  FarmerOutwardDetailsList: any = [];
  FarmerOutwardMaster: FarmerOutwardMaster;

  customerList;
  planList;
  locationList;

  productlist;
  unitLists;
  isEditable: boolean = false;

  constructor(private formBuilder: FormBuilder, private cusotmerService: CusotmerService,
    private productService: ProductService, private productdescservice: ProductdescService, private planService: PlanService, private locationService: LocationService, private farmeroutwardService: FarmeroutwardService, public dialog: DialogRef, private config: DialogConfig, ) { }

  ngOnInit() {

    this.farmeroutwardService.getFarmerOutwardNo()
      .subscribe((outwardno: any) => {
        this.FarmerOutwardMaster.RecordNo = outwardno;
      });

    let detail = new FarmerOutwardDetail();
    this.FarmerOutwardDetailsList = [detail];
    this.FarmerOutwardMaster = new FarmerOutwardMaster();
    this.loadCustomers();
    this.loadLocations();
    this.loadPlans();
    this.loadProducts();
    this.loadUnits();
    
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.FarmerOutwardMaster = this.config.data;
    this.FarmerOutwardMaster.Date = moment(this.config.data.Date).toDate();
    this.getAllFarmeroutwardmastedetails();
  }

  getAllFarmeroutwardmastedetails() {
    this.productService.getAllFarmeroutwardmastedetails(this.config.data).subscribe((response) => {
      this.FarmerOutwardDetailsList = response;
      this.loadProducts();
      this.loadUnits();
    });
  }

  loadCustomers = () => {
    this.cusotmerService.loadCustomers()
      .subscribe((customer: any) => {
        this.customerList = customer;
      });
  }

  loadProducts = () => {
    this.productService.loadProducts()
      .subscribe((products: any) => {
        this.productlist = products;
        this.productlist.forEach((key: any, value: any) => {
          key.ProductTypeName = key.Product.ProductName + '-' + key.ProductType;
        })

        if (this.isEditable == true && this.FarmerOutwardDetailsList) {
          this.FarmerOutwardDetailsList.forEach((key: any, value: any) => {
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

  loadPlans = () => {
    this.planService.loadPlans()
      .subscribe((plans: any) => {
        this.planList = plans;
      });
  }

  loadUnits = () => {
    this.productService.loadUnits()
      .subscribe((units: any) => {
        this.unitLists = units;
        if (this.isEditable == true && this.FarmerOutwardDetailsList) {
          this.FarmerOutwardDetailsList.forEach((key: any, value: any) => {
            key.Units = this.unitLists.find(p => p.UnitId == key.UnitId);
          })
        }
      });
  }

  addNewItem = () => {
    let newDetails = new FarmerOutwardDetail();
    newDetails.RecordNo = this.FarmerOutwardMaster.RecordNo;
    newDetails.Date = new Date();
    this.FarmerOutwardDetailsList.push(newDetails);
  }

  removeItem = (item) => {
    this.FarmerOutwardDetailsList = this.FarmerOutwardDetailsList.filter(p => p.PkId != item.PkId);
  }
  saveItems = () => {

    delete this.FarmerOutwardMaster.Location;

    delete this.FarmerOutwardMaster.Plan;
    delete this.FarmerOutwardMaster.Customer;
    this.FarmerOutwardMaster.TblFarmerOutwardDt = this.FarmerOutwardDetailsList;

    this.FarmerOutwardMaster.TblFarmerOutwardDt.forEach((key: any, value: any) => {
      key.Product = null;
      key.Units = null;
      key.PkId = 0;
    })

    this.productService.saveFarmerOutwards(this.FarmerOutwardMaster);

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    this.dialog.close();

  }

  onSelectPlans = (value) => {
    this.FarmerOutwardMaster.PlanId = this.FarmerOutwardMaster.Plan.PlanId;
  };

  onSelectCustomers = (value) => {
    this.FarmerOutwardMaster.CustomerId = this.FarmerOutwardMaster.Customer.CustomerId;
  };
  onSelectLocations = (value) => {
    this.FarmerOutwardMaster.LocationId = this.FarmerOutwardMaster.Location.LocationId;
  };

  onSelectProducts = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    model.ProductType = model.Product.ProductType;

    let newDetails = new FarmerOutwardDetail();
    newDetails.ProductId = model.ProductId;
    newDetails.ProductType = model.ProductType;

    this.farmeroutwardService.getProductAvailableStock(newDetails)
      .subscribe((stock: any) => {
        model.AvailableStock = stock;
      });
  };
  onSelectUnits = (value, model: any) => {
    model.UnitId = model.Units.UnitId;
  };

  searchCustomer(event) {
    this.cusotmerService.searchCustomer(event.query).subscribe((data: any) => {
      this.customerList = data;
    });
  }

  searchLocation(event) {
    this.locationService.searchLocation(event.query).subscribe((data: any) => {
      this.locationList = data;
    });
  }

  searchPlan(event) {
    this.planService.searchPlan(event.query).subscribe((data: any) => {
      this.planList = data;
    });
  }

  searchProduct = (value) => {
    //made Api call for search
    this.loadProducts();
  };
  searchUnits = (value) => {
    //made Api call for search
    this.loadUnits();
  };
}

export class FarmerOutwardDetail {
  PkId: number;
  RecordNo: number = 0;;
  Date: Date = new Date();
  ProductId: number = 0;
  ProductType: string;
  UnitId: number = 0;
  Quantity: number=0;
  AvailableStock: number = 0;
  Units: any;
  Product: any;
}

export class FarmerOutwardMaster {
  RecordNo: number = 0;
  Date:Date = new Date();
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
