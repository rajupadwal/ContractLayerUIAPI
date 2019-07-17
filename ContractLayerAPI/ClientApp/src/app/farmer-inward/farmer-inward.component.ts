import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CusotmerService } from "../master/customer-view/customer.service";
import { ProductService } from "../master/product-view/product.service";
import { PlanService } from "../master/plan-view/plan.service";
import { LocationService } from "../master/location-view/location.service";




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

  constructor(private formBuilder: FormBuilder, private cusotmerService: CusotmerService,
    private productService: ProductService, private planService: PlanService, private locationService: LocationService) { }

  ngOnInit() {
    this.FarmerInwardDetailsList = [];
    this.FarmerInwardMaster = new FarmerInwardMaster();
    this.loadPlans();
    this.loadProducts();
    this.loadCustomers();
    this.loadLocations();
    this.loadUnits();
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
      });
  }

 

  addNewItem = () => {
    let newDetails = new FarmerInwardDetail();
    newDetails.RecordNo = this.FarmerInwardMaster.RecordNo;
    newDetails.Date = this.FarmerInwardMaster.Date;
    this.FarmerInwardDetailsList.push(newDetails);
  }

  removeItem = () => {
 
  }
  saveItems = () => {
    this.productService.saveFarmerInwards(this.FarmerInwardMaster, this.FarmerInwardDetailsList);
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

  onSelectProducts = (value,model:any) => {
    model.ProductId = model.Product.ProductId;
  };
  onSelectUnits = (value, model: any) => {
    model.Unit = model.Units.UnitId;
  };



  searchCustomer = (value) => {
    this.loadCustomers();
  };

  searchLocation = (value) => {
    //made Api call for search
    this.loadLocations();
  };

 
  searchPlan = (value) => {
    //made Api call for search
    this.loadPlans();
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
export class FarmerInwardDetail {
  RecordNo: number = 0;;
  Date: string = '';
  ProductId: number = 0;
  Unit: string = '';
  Quantity: number ;

  Product: any;
  Units: any;
}

export class FarmerInwardMaster {
  RecordNo: number = 0;
  Date: string = '';
  LocationId: number = 0;
  CustomerId: number = 0;
  PlanId: number = 0;
  TotalQty: number = 0;
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Plan: any;
  Customer: any;
}
