
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import { LocationService } from '../../master/location-view/location.service';
import { CusotmerService } from '../../master/customer-view/customer.service';
import { ProductService } from '../../master/product-view/product.service';
import { PlanService } from '../../master/plan-view/plan.service';
import { DialogRef } from '../../dialog/dialog-ref';
import { DialogConfig } from '../../dialog/dialog-config';
import { ProductdescService } from '../../master/productdesc-view/productdesc.service';



@Component({
  selector: 'app-farmerchickeggsbill-detail',
  templateUrl: './farmerchickeggsbill-detail.component.html',
  styleUrls: ['./farmerchickeggsbill-detail.component.css']
})
export class FarmerchickeggsbillDetailComponent implements OnInit {
  //FarmerInwardDetailsList: any = [];
  FarmerChickEggsBillDetailList: any = [];
  FarmerChickEggsBillMaster: FarmerChickEggsBillMaster;

  customerList;
  planList;
  locationList;
  saletypeList;

  productlist;
  unitLists;
  isEditable: boolean = false;

  constructor(private formBuilder: FormBuilder, private cusotmerService: CusotmerService,
    private productService: ProductService, private productdescService: ProductdescService, private planService: PlanService, private locationService: LocationService, public dialog: DialogRef, private config: DialogConfig, ) { }

  ngOnInit() {
    let detail = new FarmerChickEggsBillDetail();
    this.FarmerChickEggsBillDetailList = [detail];
    this.FarmerChickEggsBillMaster = new FarmerChickEggsBillMaster();
    this.loadCustomers();
    this.loadLocations();
    this.loadPlans();

    if (this.config.data)
      this.setDataForEdit();

  }

  setDataForEdit = () => {
    this.isEditable = true;
    this.FarmerChickEggsBillMaster = this.config.data;
    this.FarmerChickEggsBillMaster.BillDate = moment(this.config.data.Date).toDate();
    this.getAllFarmerchickeggbilldetails();
  }

  getAllFarmerchickeggbilldetails() {
    this.productService.getAllFarmerchickeggbilldetails(this.config.data).subscribe((response) => {
      this.FarmerChickEggsBillDetailList = response;
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
    this.productdescService.loadProducts()
      .subscribe((products: any) => {
        this.productlist = products;
        if (this.isEditable == true && this.FarmerChickEggsBillDetailList) {
          this.FarmerChickEggsBillDetailList.forEach((key: any, value: any) => {
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
        if (this.isEditable == true && this.FarmerChickEggsBillDetailList) {
          this.FarmerChickEggsBillDetailList.forEach((key: any, value: any) => {
            key.Units = this.unitLists.find(p => p.UnitDescription == key.Unit);
          })
        }
      });
  }



  addNewItem = () => {
    let newDetails = new FarmerChickEggsBillDetail();
    newDetails.BillNo = this.FarmerChickEggsBillMaster.BillNo;
    newDetails.BillDate = new Date();
    this.FarmerChickEggsBillDetailList.push(newDetails);
  }

  removeItem = (item) => {
    this.FarmerChickEggsBillDetailList = this.FarmerChickEggsBillDetailList.filter(p => p.BillId != item.BillId);
  }
  saveItems = () => {

    delete this.FarmerChickEggsBillMaster.Location;

    delete this.FarmerChickEggsBillMaster.Plan;
    delete this.FarmerChickEggsBillMaster.Customer;
    this.FarmerChickEggsBillMaster.TblSalesBillDt = this.FarmerChickEggsBillDetailList;


    this.productService.saveFarmerChickEggBill(this.FarmerChickEggsBillMaster);

    // store user details and jwt token in local storage to keep user logged in between page refreshes
    this.dialog.close();
  }

  onSelectPlans = (value) => {
    this.FarmerChickEggsBillMaster.PlanId = this.FarmerChickEggsBillMaster.Plan.PlanId;
  };

  onSelectCustomers = (value) => {
    this.FarmerChickEggsBillMaster.CustomerId = this.FarmerChickEggsBillMaster.Customer.CustomerId;
  };
  onSelectLocations = (value) => {
    this.FarmerChickEggsBillMaster.LocationId = this.FarmerChickEggsBillMaster.Location.LocationId;
  };

  onSelectProducts = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
  };
  onSelectUnits = (value, model: any) => {
    model.Unit = model.Units.UnitDescription;
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
export class FarmerChickEggsBillDetail {
  PkId: number;
  BillId: number = 0;
  BillNo: string = '';
  BillDate: Date = new Date();
  ProductId: number = 0;
  Unit: string = '';
  Quantity: number;
  Rate: number;
  Amount: number;
  Units: any;
  Product: any;

}

export class FarmerChickEggsBillMaster {
  BillNo: string = '';
  BillDate: Date = new Date();
  LocationId: number = 0;
  CustomerId: number = 0;
  PlanId: number = 0;
  OutstandingAmt: number;
  PlaceOfSupply: string = '';
  Address: string = '';
  TotalAmount: number;
  TdsAmount: number;
  AdminChargesAmt: number;
  OtherCharges: number;
  GrandTotal: number;
  //SaleType: string[] = ['Cash', 'Credit'];

  //TotalQty: number = 0;
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Plan: any;
  Customer: any;
  //Saletype: any;
  TblSalesBillDt: FarmerChickEggsBillDetail[];
}

