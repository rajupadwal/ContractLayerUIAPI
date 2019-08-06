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
import { FarmerinwardService } from '../farmerinward-view/farmerinward.service';



@Component({
  selector: 'app-farmer-inward',
  templateUrl: './farmer-inward.component.html',
  styleUrls: ['./farmer-inward.component.css']
})
export class FarmerInwardComponent implements OnInit {
  FarmerInwardDetailsList: any = [];
  FarmerInwardMaster: FarmerInwardMaster;


  customerList;
  planList;
  locationList;

  productlist;
  unitLists;
  isEditable: boolean = false;

  constructor(private formBuilder: FormBuilder, private cusotmerService: CusotmerService,
    private productService: ProductService, private planService: PlanService, private locationService: LocationService, private productdescService: ProductdescService, private farmerinwardService: FarmerinwardService, public dialog: DialogRef, private config: DialogConfig, ) { }

  ngOnInit() {

    this.farmerinwardService.getFarmerInwardNo()
      .subscribe((inwardno: any) => {
        this.FarmerInwardMaster.RecordNo=inwardno;
      });

    let detail = new FarmerInwardDetail();
    this.FarmerInwardDetailsList = [detail];
    this.FarmerInwardMaster = new FarmerInwardMaster();
    this.loadCustomers();
    this.loadLocations();
    this.loadPlans();
    
    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.FarmerInwardMaster = this.config.data;
    this.FarmerInwardMaster.Date = moment(this.config.data.Date).toDate();
    this.getAllFarmerinwardmastedetails();
  }

  getAllFarmerinwardmastedetails() {
    this.productService.getAllFarmerinwardmastedetails(this.config.data).subscribe((response) => {
      this.FarmerInwardDetailsList = response;
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

        if (this.isEditable == true && this.FarmerInwardDetailsList) {
          this.FarmerInwardDetailsList.forEach((key: any, value: any) => {
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
        if (this.isEditable == true && this.FarmerInwardDetailsList) {
          this.FarmerInwardDetailsList.forEach((key: any, value: any) => {
            key.Units = this.unitLists.find(p => p.UnitId == key.UnitId);
          })
        }
      });
  }

  addNewItem = () => {
    let newDetails = new FarmerInwardDetail();
    newDetails.RecordNo = this.FarmerInwardMaster.RecordNo;
    newDetails.Date = new Date();
    this.FarmerInwardDetailsList.push(newDetails);
  }

  removeItem = (item) => {
    this.FarmerInwardDetailsList = this.FarmerInwardDetailsList.filter(p => p.PkId != item.PkId);
  }
  saveItems = () => {

    delete this.FarmerInwardMaster.Location;

    delete this.FarmerInwardMaster.Plan;
    delete this.FarmerInwardMaster.Customer;
    this.FarmerInwardMaster.TblFarmerInwardDt = this.FarmerInwardDetailsList;

    this.FarmerInwardMaster.TblFarmerInwardDt.forEach((key: any, value: any) => {
      key.Product = null;
      key.Units = null;
      key.PkId = 0;
    })


    this.productService.saveFarmerInwards(this.FarmerInwardMaster);

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    this.dialog.close();
  }

  onSelectPlans = (value) => {
    this.FarmerInwardMaster.PlanId = this.FarmerInwardMaster.Plan.PlanId;
  };

  onSelectCustomers = (value) => {
    this.FarmerInwardMaster.CustomerId = this.FarmerInwardMaster.Customer.CustomerId;
  };
  onSelectLocations = (value) => {
    this.FarmerInwardMaster.LocationId = this.FarmerInwardMaster.Location.LocationId;
  };

  onSelectProducts = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    model.ProductType = model.Product.ProductType;
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

export class FarmerInwardDetail {
  PkId: number;
  RecordNo: number = 0;;
  Date: Date = new Date();
  ProductId: number = 0;
  UnitId: number = 0;
  Quantity: number;
  Units: any;
  Product: any;
  
}

export class FarmerInwardMaster {
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
  TblFarmerInwardDt: FarmerInwardDetail[];
}
