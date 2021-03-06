import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CusotmerService } from "../../master/customer-view/customer.service";
import { ProductService } from "../../master/product-view/product.service";
import { PlanService } from "../../master/plan-view/plan.service";
import { LocationService } from "../../master/location-view/location.service";
import { DialogRef } from '../../dialog/dialog-ref';
import { DialogConfig } from '../../dialog/dialog-config';

import * as moment from 'moment';
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';
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
  producttypelist;
  isEditable: boolean = false;

  constructor(private formBuilder: FormBuilder, private cusotmerService: CusotmerService,
    private productService: ProductService, private productdescservice: ProductdescService, private planService: PlanService, private locationService: LocationService, private productdescService: ProductdescService, private farmerinwardService: FarmerinwardService, public dialog: DialogRef, private config: DialogConfig, ) { }

  ngOnInit() {

    if (this.config.isEditable == false) {
      this.farmerinwardService.getFarmerInwardNo()
        .subscribe((inwardno: any) => {
          this.FarmerInwardMaster.RecordNo = inwardno;
        });
    }

    let detail = new FarmerInwardDetail();
    this.FarmerInwardDetailsList = [detail];
    this.FarmerInwardMaster = new FarmerInwardMaster();
    this.loadCustomers();
    this.loadLocations();
    this.loadPlans();

    if (this.config.isEditable == true) {
      this.setDataForEdit();
    } else {
      this.loadProductTypes();
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
      this.loadProductTypes();
    });
  }

  loadCustomers = () => {
    this.cusotmerService.loadCustomers()
      .subscribe((customer: any) => {
        this.customerList = customer;
      });
  }


  loadProductTypes() {
    this.productService.loadProducts()
      .subscribe((products: any) => {
        this.producttypelist = products;
        this.producttypelist.forEach((key: any, value: any) => {
          key.ProductTypeUnit = key.ProductType + '-' + key.Unit.UnitDescription;
        })
        if (this.isEditable == true && this.FarmerInwardDetailsList) {
          this.FarmerInwardDetailsList.forEach((key: any, value: any) => {
            let productType = this.producttypelist.find(p => p.ProductId == key.ProductId && p.UnitId == key.Unit && p.ProductType == key.ProductType );
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

    var a = new Date(this.FarmerInwardMaster.Date);
    // seconds * minutes * hours * milliseconds = 1 day 
    var day = 60 * 60 * 24 * 1000;
    var b = new Date(a.getTime() + day);
    this.FarmerInwardMaster.Date = moment(b).toDate();

    delete this.FarmerInwardMaster.Location;
    delete this.FarmerInwardMaster.Plan;
    delete this.FarmerInwardMaster.Customer;
    this.FarmerInwardMaster.TblFarmerInwardDt = this.FarmerInwardDetailsList;

    this.FarmerInwardMaster.TblFarmerInwardDt.forEach((key: any, value: any) => {
      key.Product = null;
      key.Producttypeun = null;
      key.PkId = 0;
    })


    this.productService.saveFarmerInwards(this.FarmerInwardMaster).subscribe(result => {
      this.dialog.close("Record added succesfully");
    });
    

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    //this.dialog.close();
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
    this.FarmerInwardDetailsList.ProductId = model.ProductId;
  };

  onSelectProducttypes = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    model.ProductType = model.Producttypeun.ProductType;
    model.Unit = model.Producttypeun.Unit.UnitId;
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

  searchProducttype = (value, item) => {
    let newDetails = new FarmerInwardDetail();
    newDetails.ProductId = item.ProductId;
    let prdList = []
    if (this.producttypelist && this.producttypelist.length > 0)
    {
      prdList = JSON.parse(JSON.stringify(this.producttypelist));
    }
    item.productTypeList = [];
    item.productTypeList = prdList.filter(p => p.ProductId == item.ProductId);
  };
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
