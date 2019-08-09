
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
import { FarmerchikeggbillService } from '../farmerchickeggsbill-view/farmerchickeggsbill.service';



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
  producttypelist;
  isEditable: boolean = false;

  constructor(private formBuilder: FormBuilder, private cusotmerService: CusotmerService,
    private productService: ProductService, private productdescService: ProductdescService, private planService: PlanService, private locationService: LocationService, private farmerchikeggbillService: FarmerchikeggbillService,public dialog: DialogRef, private config: DialogConfig, ) { }

  ngOnInit() {

    this.farmerchikeggbillService.getChickEggsBillNo()
      .subscribe((billno: any) => {
        this.FarmerChickEggsBillMaster.BillNo = billno;
      });

    let detail = new FarmerChickEggsBillDetail();
    this.FarmerChickEggsBillDetailList = [detail];
    this.FarmerChickEggsBillMaster = new FarmerChickEggsBillMaster();
    this.loadCustomers();
    this.loadLocations();
    this.loadPlans();

    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
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
      //this.loadUnits();
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

            let newDetails = new FarmerChickEggsBillDetail();
            newDetails.ProductId = key.Product.ProductId;

            this.productService.getProductTypeByProductID(newDetails)
              .subscribe((types: any) => {
                this.producttypelist = types;
                this.producttypelist.forEach((key: any, value: any) => {
                  key.Producttypeun = key.ProductType + '-' + key.Unit.UnitDescription;
                })
              });
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

  //loadUnits = () => {
  //  this.productService.loadUnits()
  //    .subscribe((units: any) => {
  //      this.unitLists = units;
  //      if (this.isEditable == true && this.FarmerChickEggsBillDetailList) {
  //        this.FarmerChickEggsBillDetailList.forEach((key: any, value: any) => {
  //          key.Units = this.unitLists.find(p => p.UnitId == key.UnitId);
  //        })
  //      }
  //    });
  //}

  calculateSumOfTotalAmt = () => {
    this.FarmerChickEggsBillMaster.TotalAmount = 0;

    this.FarmerChickEggsBillDetailList.forEach((key, value) => {
      this.FarmerChickEggsBillMaster.TotalAmount += (parseFloat(key.Quantity) * parseFloat(key.Rate));

      this.FarmerChickEggsBillMaster.TdsAmount = (parseFloat(this.FarmerChickEggsBillMaster.TotalAmount.toString()) * 1 / 100);

      this.FarmerChickEggsBillMaster.AdminChargesAmt = (parseFloat(this.FarmerChickEggsBillMaster.TotalAmount.toString()) * 9 / 100);

      this.FarmerChickEggsBillMaster.GrandTotal = (parseFloat(this.FarmerChickEggsBillMaster.TotalAmount.toString()) - parseFloat(this.FarmerChickEggsBillMaster.TdsAmount.toString()) - parseFloat(this.FarmerChickEggsBillMaster.AdminChargesAmt.toString()) - parseFloat(this.FarmerChickEggsBillMaster.OtherCharges.toString()) );
    })
  }

  calculateTaxableAmount(event, item) {
    
    this.calculateSumOfTotalAmt();
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


    this.FarmerChickEggsBillMaster.TblSalesBillDt.forEach((key: any, value: any) => {
      key.Product = null;
      key.Producttypeun = null;
      key.PkId = 0;

    })

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
   

    model.ProductId = model.Product.ProductId;
    this.FarmerChickEggsBillDetailList.ProductId = model.ProductId;

    let newDetails = new FarmerChickEggsBillDetail();
    newDetails.ProductId = model.Product.ProductId;

    this.productService.getProductTypeByProductID(newDetails)
      .subscribe((types: any) => {
        this.producttypelist = types;
        this.producttypelist.forEach((key: any, value: any) => {
          key.ProductTypeUnit = key.ProductType + '-' + key.Unit.UnitDescription;
        })
      });
  }

  onSelectProducttypes = (value, model: any) => {
    model.ProductId = model.Product.ProductId;
    model.ProductType = model.Producttypeun.ProductType;
    model.Unit = model.Producttypeun.Unit.UnitDescription;
    model.ProductType = model.Producttypeun.ProductType;
    model.Rate = model.Producttypeun.SellingPrice;
  };
  //onSelectUnits = (value, model: any) => {
  //  model.UnitId = model.Units.UnitId;
  //};

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

  searchProducttype = (value) => {
    let newDetails = new FarmerChickEggsBillDetail();
    newDetails.ProductId = this.FarmerChickEggsBillDetailList.ProductId;

    this.productService.getProductTypeByProductID(newDetails)
      .subscribe((types: any) => {
        this.producttypelist = types;
        this.producttypelist.forEach((key: any, value: any) => {
          key.ProductTypeUnit = key.ProductType + '-' + key.Unit.UnitDescription;
        })

        if (this.isEditable == true && this.FarmerChickEggsBillDetailList) {
          this.FarmerChickEggsBillDetailList.forEach((key: any, value: any) => {
            let newDetails = new FarmerChickEggsBillDetail();
            newDetails.ProductId = key.Product.ProductId;

            this.productService.getProductTypeByProductID(newDetails)
              .subscribe((types: any) => {
                this.producttypelist = types;
                this.producttypelist.forEach((key: any, value: any) => {
                  key.ProductTypeUnit = key.ProductType + '-' + key.Unit.UnitDescription;
                })
              });
          })
        }
      });
  };
  //searchUnits = (value) => {
  //  //made Api call for search
  //  this.loadUnits();
  //};

}
export class FarmerChickEggsBillDetail {
  PkId: number;
  BillId: number = 0;
  BillNo: string = '';
  BillDate: Date = new Date();
  ProductId: number = 0;
  Unit: string;
  Quantity: number=0;
  Rate: number=0;
  Amount: number=0;
  Producttypeun: any;
  Product: any;
}

export class FarmerChickEggsBillMaster {
  BillNo: string = '';
  BillDate: Date = new Date();
  LocationId: number = 0;
  CustomerId: number = 0;
  PlanId: number = 0;
  OutstandingAmt: number=0;
  PlaceOfSupply: string = '';
  Address: string = '';
  TotalAmount: number=0;
  TdsAmount: number=0;
  AdminChargesAmt: number=0;
  OtherCharges: number=0;
  GrandTotal: number=0;
  //TotalQty: number = 0;
  //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
  Location: any;
  Plan: any;
  Customer: any;
  TblSalesBillDt: FarmerChickEggsBillDetail[];
}



















