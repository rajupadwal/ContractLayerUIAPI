(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sale-farmerchickeggsbill-view-farmerchickeggsbill-view-module"],{

/***/ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGUvZmFybWVyY2hpY2tlZ2dzYmlsbC1kZXRhaWwvZmFybWVyY2hpY2tlZ2dzYmlsbC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Bill Settlement</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <!--<form [formGroup]=\"bookingdetailsForm\" (ngSubmit)=\"saveBookingDetails()\">-->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"select\"><strong>Location Name:</strong></label>\r\n            <p-autoComplete [(ngModel)]=\"FarmerChickEggsBillMaster.Location\" [suggestions]=\"locationList\" (completeMethod)=\"searchLocation($event)\"\r\n                            [dropdown]=\"true\" (onSelect)=\"onSelectLocations($event)\" [forceSelection]=\"true\" field=\"LocationName\"></p-autoComplete>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"textarea-input\"><strong>Bill No:</strong></label>\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.BillNo\" type=\"text\" pInputText id=\"billno\" name=\"recordno\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"textarea-input\"><strong> Bill Date :</strong></label>\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <p-calendar [(ngModel)]=\"FarmerChickEggsBillMaster.BillDate\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"select\"><strong>Customer Name :</strong></label>\r\n            <p-autoComplete [(ngModel)]=\"FarmerChickEggsBillMaster.Customer\" [suggestions]=\"customerList\" (completeMethod)=\"searchCustomer($event)\"\r\n                            [dropdown]=\"true\" (onSelect)=\"onSelectCustomers($event)\" [forceSelection]=\"true\" field=\"CustmerName\"></p-autoComplete>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"select\"><strong>Plan :</strong></label>\r\n            <p-autoComplete [(ngModel)]=\"FarmerChickEggsBillMaster.Plan\" [suggestions]=\"planList\" (completeMethod)=\"searchPlan($event)\"\r\n                            [dropdown]=\"true\" (onSelect)=\"onSelectPlans($event)\" [forceSelection]=\"true\" field=\"PlanName\"></p-autoComplete>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"textarea-input\"><strong> Address :</strong></label>\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.Address\" type=\"text\" pInputText id=\"address\" name=\"address\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"textarea-input\"><strong> Place Of Supply :</strong></label>\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.PlaceOfSupply\" type=\"text\" pInputText id=\"placeofsupply\" name=\"placeofsupply\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <label for=\"textarea-input\"><strong> Outstanding Amount :</strong></label>\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.OutstandingAmt\" type=\"text\" pInputText id=\"outstandingamt\" name=\"outstandingamt\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Product Details</strong>\r\n          <div style=\"width:10px\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"card-block \">\r\n              <div class=\"form-group\">\r\n                Product Name\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                standard Pack\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                <span class=\"ui-float-label\">\r\n                  Quantity\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                Rate\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                Action\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngFor=\"let item of FarmerChickEggsBillDetailList\">\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                <span class=\"ui-float-label\">\r\n                  <p-autoComplete [(ngModel)]=\"item.Product\" [suggestions]=\"productlist\" (completeMethod)=\"searchProduct($event)\"\r\n                                  [dropdown]=\"true\" (onSelect)=\"onSelectProducts($event,item)\" [forceSelection]=\"true\" field=\"ProductTypeName\"></p-autoComplete>\r\n\r\n                  <label for=\"float-input\"></label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                <span class=\"ui-float-label\">\r\n                  <p-autoComplete [(ngModel)]=\"item.Units\" [suggestions]=\"unitLists\" (completeMethod)=\"searchUnits($event)\"\r\n                                  [dropdown]=\"true\" (onSelect)=\"onSelectUnits($event,item)\" [forceSelection]=\"true\" field=\"UnitDescription\"></p-autoComplete>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                <span class=\"ui-float-label\">\r\n                  <input type=\"text\" [(ngModel)]=\"item.Quantity\" (change)=\"calculateTaxableAmount($event,item)\" pInputText id=\"ref_by\" name=\"ref_by\" class=\"form-control\" rows=\"3\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                <span class=\"ui-float-label\">\r\n                  <input type=\"text\" [(ngModel)]=\"item.Rate\" (change)=\"calculateTaxableAmount($event,item)\" pInputText id=\"ref_by\" name=\"ref_by\" class=\"form-control\" rows=\"3\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"card-block\">\r\n              <div class=\"form-group\">\r\n                <button type=\"button\" (click)=\"removeItem(item)\">Delete</button>\r\n                <i class=\"fa icon-trash\" style=\"height:25px;width:20px;padding-top:10px;\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-10\"></div>\r\n          <div class=\"col-sm-2\">\r\n            <button type=\"button\" (click)=\"addNewItem()\">Add new</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n\r\n            <div style=\"text-align:right\">\r\n              <label for=\"textarea-input\"><strong> Total  Amount :</strong></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.TotalAmount\" type=\"text\" pInputText id=\"totalamount\" name=\"totalamount\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n\r\n            <div style=\"text-align:right\">\r\n              <label for=\"textarea-input\"><strong> TDS Deduction (1 %) :</strong></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.TdsAmount\"  type=\"text\" pInputText id=\"tdsamount\" name=\"tdsamount\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n\r\n            <div style=\"text-align:right\">\r\n              <label for=\"textarea-input\"><strong> Administrative Chargesion (9 %) :</strong></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.AdminChargesAmt\" type=\"text\" pInputText id=\"adminchargesamt\" name=\"adminchargesamt\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div style=\"text-align:right\">\r\n              <label for=\"textarea-input\"><strong> Other Charges :</strong></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.OtherCharges\" (change)=\"calculateTaxableAmount($event,item)\" type=\"text\" pInputText id=\"othercharges\" name=\"othercharges\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div style=\"text-align:right\">\r\n              <label for=\"textarea-input\"><strong> Total Bill Amount :</strong></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"card-block\">\r\n          <div class=\"form-group\">\r\n            <div>\r\n              <span class=\"ui-float-label\">\r\n                <input [(ngModel)]=\"FarmerChickEggsBillMaster.GrandTotal\" type=\"text\" pInputText id=\"grandtotal\" name=\"grandtotal\" class=\"form-control\" rows=\"3\">\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-10\"></div>\r\n      <div class=\"col-sm-2\">\r\n        <button type=\"button\" (click)=\"saveItems()\">save</button>\r\n      </div>\r\n    </div>\r\n    <!--</form>-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FarmerchickeggsbillDetailComponent, FarmerChickEggsBillDetail, FarmerChickEggsBillMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerchickeggsbillDetailComponent", function() { return FarmerchickeggsbillDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerChickEggsBillDetail", function() { return FarmerChickEggsBillDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerChickEggsBillMaster", function() { return FarmerChickEggsBillMaster; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../master/location-view/location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../master/customer-view/customer.service */ "./src/app/master/customer-view/customer.service.ts");
/* harmony import */ var _master_product_view_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../master/product-view/product.service */ "./src/app/master/product-view/product.service.ts");
/* harmony import */ var _master_plan_view_plan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../master/plan-view/plan.service */ "./src/app/master/plan-view/plan.service.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _master_productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../master/productdesc-view/productdesc.service */ "./src/app/master/productdesc-view/productdesc.service.ts");











var FarmerchickeggsbillDetailComponent = /** @class */ (function () {
    function FarmerchickeggsbillDetailComponent(formBuilder, cusotmerService, productService, productdescService, planService, locationService, dialog, config) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.cusotmerService = cusotmerService;
        this.productService = productService;
        this.productdescService = productdescService;
        this.planService = planService;
        this.locationService = locationService;
        this.dialog = dialog;
        this.config = config;
        //FarmerInwardDetailsList: any = [];
        this.FarmerChickEggsBillDetailList = [];
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.FarmerChickEggsBillMaster = _this.config.data;
            _this.FarmerChickEggsBillMaster.BillDate = moment__WEBPACK_IMPORTED_MODULE_3__(_this.config.data.Date).toDate();
            _this.getAllFarmerchickeggbilldetails();
        };
        this.loadCustomers = function () {
            _this.cusotmerService.loadCustomers()
                .subscribe(function (customer) {
                _this.customerList = customer;
            });
        };
        this.loadProducts = function () {
            _this.productService.loadProducts()
                .subscribe(function (products) {
                _this.productlist = products;
                _this.productlist.forEach(function (key, value) {
                    key.ProductTypeName = key.Product.ProductName + '-' + key.ProductType;
                });
                if (_this.isEditable == true && _this.FarmerChickEggsBillDetailList) {
                    _this.FarmerChickEggsBillDetailList.forEach(function (key, value) {
                        key.Product = _this.productlist.find(function (p) { return p.ProductId == key.ProductId; });
                    });
                }
            });
        };
        this.loadLocations = function () {
            _this.locationService.loadLocations()
                .subscribe(function (locaions) {
                _this.locationList = locaions;
            });
        };
        this.loadPlans = function () {
            _this.planService.loadPlans()
                .subscribe(function (plans) {
                _this.planList = plans;
            });
        };
        this.loadUnits = function () {
            _this.productService.loadUnits()
                .subscribe(function (units) {
                _this.unitLists = units;
                if (_this.isEditable == true && _this.FarmerChickEggsBillDetailList) {
                    _this.FarmerChickEggsBillDetailList.forEach(function (key, value) {
                        key.Units = _this.unitLists.find(function (p) { return p.UnitId == key.UnitId; });
                    });
                }
            });
        };
        this.calculateSumOfTotalAmt = function () {
            _this.FarmerChickEggsBillMaster.TotalAmount = 0;
            _this.FarmerChickEggsBillDetailList.forEach(function (key, value) {
                _this.FarmerChickEggsBillMaster.TotalAmount += (parseFloat(key.Quantity) * parseFloat(key.Rate));
                _this.FarmerChickEggsBillMaster.TdsAmount = (parseFloat(_this.FarmerChickEggsBillMaster.TotalAmount.toString()) * 1 / 100);
                _this.FarmerChickEggsBillMaster.AdminChargesAmt = (parseFloat(_this.FarmerChickEggsBillMaster.TotalAmount.toString()) * 9 / 100);
                _this.FarmerChickEggsBillMaster.GrandTotal = (parseFloat(_this.FarmerChickEggsBillMaster.TotalAmount.toString()) - parseFloat(_this.FarmerChickEggsBillMaster.TdsAmount.toString()) - parseFloat(_this.FarmerChickEggsBillMaster.AdminChargesAmt.toString()) - parseFloat(_this.FarmerChickEggsBillMaster.OtherCharges.toString()));
            });
        };
        this.addNewItem = function () {
            var newDetails = new FarmerChickEggsBillDetail();
            newDetails.BillNo = _this.FarmerChickEggsBillMaster.BillNo;
            newDetails.BillDate = new Date();
            _this.FarmerChickEggsBillDetailList.push(newDetails);
        };
        this.removeItem = function (item) {
            _this.FarmerChickEggsBillDetailList = _this.FarmerChickEggsBillDetailList.filter(function (p) { return p.BillId != item.BillId; });
        };
        this.saveItems = function () {
            delete _this.FarmerChickEggsBillMaster.Location;
            delete _this.FarmerChickEggsBillMaster.Plan;
            delete _this.FarmerChickEggsBillMaster.Customer;
            _this.FarmerChickEggsBillMaster.TblSalesBillDt = _this.FarmerChickEggsBillDetailList;
            _this.FarmerChickEggsBillMaster.TblSalesBillDt.forEach(function (key, value) {
                key.Product = null;
                key.Units = null;
                key.PkId = 0;
            });
            _this.productService.saveFarmerChickEggBill(_this.FarmerChickEggsBillMaster);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            _this.dialog.close();
        };
        this.onSelectPlans = function (value) {
            _this.FarmerChickEggsBillMaster.PlanId = _this.FarmerChickEggsBillMaster.Plan.PlanId;
        };
        this.onSelectCustomers = function (value) {
            _this.FarmerChickEggsBillMaster.CustomerId = _this.FarmerChickEggsBillMaster.Customer.CustomerId;
        };
        this.onSelectLocations = function (value) {
            _this.FarmerChickEggsBillMaster.LocationId = _this.FarmerChickEggsBillMaster.Location.LocationId;
        };
        this.onSelectProducts = function (value, model) {
            model.ProductId = model.Product.ProductId;
            model.ProductType = model.Product.ProductType;
        };
        this.onSelectUnits = function (value, model) {
            model.UnitId = model.Units.UnitId;
        };
        this.searchProduct = function (value) {
            //made Api call for search
            _this.loadProducts();
        };
        this.searchUnits = function (value) {
            //made Api call for search
            _this.loadUnits();
        };
    }
    FarmerchickeggsbillDetailComponent.prototype.ngOnInit = function () {
        var detail = new FarmerChickEggsBillDetail();
        this.FarmerChickEggsBillDetailList = [detail];
        this.FarmerChickEggsBillMaster = new FarmerChickEggsBillMaster();
        this.loadCustomers();
        this.loadLocations();
        this.loadPlans();
        if (this.config.data)
            this.setDataForEdit();
    };
    FarmerchickeggsbillDetailComponent.prototype.getAllFarmerchickeggbilldetails = function () {
        var _this = this;
        this.productService.getAllFarmerchickeggbilldetails(this.config.data).subscribe(function (response) {
            _this.FarmerChickEggsBillDetailList = response;
            _this.loadProducts();
            _this.loadUnits();
        });
    };
    FarmerchickeggsbillDetailComponent.prototype.calculateTaxableAmount = function (event, item) {
        this.calculateSumOfTotalAmt();
    };
    FarmerchickeggsbillDetailComponent.prototype.searchCustomer = function (event) {
        var _this = this;
        this.cusotmerService.searchCustomer(event.query).subscribe(function (data) {
            _this.customerList = data;
        });
    };
    FarmerchickeggsbillDetailComponent.prototype.searchLocation = function (event) {
        var _this = this;
        this.locationService.searchLocation(event.query).subscribe(function (data) {
            _this.locationList = data;
        });
    };
    FarmerchickeggsbillDetailComponent.prototype.searchPlan = function (event) {
        var _this = this;
        this.planService.searchPlan(event.query).subscribe(function (data) {
            _this.planList = data;
        });
    };
    FarmerchickeggsbillDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmerchickeggsbill-detail',
            template: __webpack_require__(/*! ./farmerchickeggsbill-detail.component.html */ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.html"),
            styles: [__webpack_require__(/*! ./farmerchickeggsbill-detail.component.css */ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_5__["CusotmerService"],
            _master_product_view_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], _master_productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_10__["ProductdescService"], _master_plan_view_plan_service__WEBPACK_IMPORTED_MODULE_7__["PlanService"], _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_8__["DialogRef"], _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_9__["DialogConfig"]])
    ], FarmerchickeggsbillDetailComponent);
    return FarmerchickeggsbillDetailComponent;
}());

var FarmerChickEggsBillDetail = /** @class */ (function () {
    function FarmerChickEggsBillDetail() {
        this.BillId = 0;
        this.BillNo = '';
        this.BillDate = new Date();
        this.ProductId = 0;
        this.UnitId = 0;
        this.Quantity = 0;
        this.Rate = 0;
        this.Amount = 0;
    }
    return FarmerChickEggsBillDetail;
}());

var FarmerChickEggsBillMaster = /** @class */ (function () {
    function FarmerChickEggsBillMaster() {
        this.BillNo = '';
        this.BillDate = new Date();
        this.LocationId = 0;
        this.CustomerId = 0;
        this.PlanId = 0;
        this.OutstandingAmt = 0;
        this.PlaceOfSupply = '';
        this.Address = '';
        this.TotalAmount = 0;
        this.TdsAmount = 0;
        this.AdminChargesAmt = 0;
        this.OtherCharges = 0;
        this.GrandTotal = 0;
    }
    return FarmerChickEggsBillMaster;
}());



/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGUvZmFybWVyY2hpY2tlZ2dzYmlsbC12aWV3L2Zhcm1lcmNoaWNrZWdnc2JpbGwtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\"></div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                 class=\"ag-theme-balham\"\r\n                 [rowData]=\"rowData\"\r\n                 [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>\r\n\r\n"

/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FarmerchickeggsbillViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerchickeggsbillViewComponent", function() { return FarmerchickeggsbillViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../farmerchickeggsbill-detail/farmerchickeggsbill-detail.component */ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.ts");
/* harmony import */ var _farmerchickeggsbill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmerchickeggsbill.service */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");







var FarmerchickeggsbillViewComponent = /** @class */ (function () {
    function FarmerchickeggsbillViewComponent(router, http, farmerchikeggbillservice, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.farmerchikeggbillservice = farmerchikeggbillservice;
        this.dialog = dialog;
        this.columnDefs = [
            {
                headerName: 'Button Col 1', 'width': 100,
                cellRenderer: 'buttonRenderer',
            },
            {
                headerName: 'BillId', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'BillId', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'width': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_4__["FarmerchickeggsbillDetailComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Sale ' } });
                        ref.afterClosed.subscribe(function (result) {
                            _this.RefreshGrid();
                        });
                    };
                    return newTH;
                },
            },
            { headerName: 'Date ', field: 'BillDate', 'width': 150 },
            {
                headerName: 'Location Name', field: 'LocationName', ' width': 150
            },
            {
                headerName: 'Customer Name ', field: 'CustmerName', 'width': 100
            },
            {
                headerName: 'Plan Name ', field: 'PlanName', 'width': 100
            },
            {
                headerName: 'Place Name ', field: 'PlaceOfSupply', 'width': 100
            },
            {
                headerName: 'Address ', field: 'Address', 'width': 100
            },
            {
                headerName: 'Total Amount ', field: 'TotalAmount', 'width': 100
            },
            {
                headerName: 'TDS Amount ', field: 'TdsAmount', 'width': 100
            },
            {
                headerName: 'Admin Charges Amount ', field: 'AdminChargesAmt', 'width': 100
            },
            {
                headerName: 'Grand Total Amount ', field: 'GrandTotal', 'width': 100
            },
        ];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            _this.farmerchikeggbillservice.loadFarmerchickeggbillMaster().subscribe(function (response) {
                _this.rowData = response;
            }, function (error) {
                console.log(error);
            });
        };
    }
    FarmerchickeggsbillViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.farmerchikeggbillservice.loadFarmerchickeggbillMaster().subscribe(function (response) {
            _this.rowData = response;
        }, function (error) {
            console.log(error);
        });
    };
    FarmerchickeggsbillViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_4__["FarmerchickeggsbillDetailComponent"], { modalConfig: { title: 'Add/Edit sale' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    FarmerchickeggsbillViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmerchickeggsbill-view',
            template: __webpack_require__(/*! ./farmerchickeggsbill-view.component.html */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.html"),
            styles: [__webpack_require__(/*! ./farmerchickeggsbill-view.component.css */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _farmerchickeggsbill_service__WEBPACK_IMPORTED_MODULE_5__["FarmerchikeggbillService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], FarmerchickeggsbillViewComponent);
    return FarmerchickeggsbillViewComponent;
}());



/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.service.ts ***!
  \******************************************************************************/
/*! exports provided: FarmerchikeggbillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerchikeggbillService", function() { return FarmerchikeggbillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");




var FarmerchikeggbillService = /** @class */ (function () {
    function FarmerchikeggbillService(http) {
        this.http = http;
    }
    FarmerchikeggbillService.prototype.loadFarmerchickeggbillMaster = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].PRODUCT_FARMER_CHICKEGGBILL_API.GETALLFARMERCHICKEGGBILLMASTERS);
    };
    FarmerchikeggbillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FarmerchikeggbillService);
    return FarmerchikeggbillService;
}());



/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.view.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.view.module.ts ***!
  \**********************************************************************************/
/*! exports provided: FarmerchickeggbillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerchickeggbillModule", function() { return FarmerchickeggbillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../farmerchickeggsbill-detail/farmerchickeggsbill-detail.component */ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.ts");
/* harmony import */ var _farmerchickeggsbill_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./farmerchickeggsbill-view.component */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.ts");
/* harmony import */ var _farmerchickeggsbill_view_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./farmerchickeggsbill.view.routing.module */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.view.routing.module.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");
/* harmony import */ var _validation_border__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validation-border */ "./src/app/validation-border/index.ts");
/* harmony import */ var _farmerchickeggsbill_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./farmerchickeggsbill.service */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.service.ts");








//import { DPRService } from './dpr.service';
//import { AutoCompleteModule } from 'primeng';






var FarmerchickeggbillModule = /** @class */ (function () {
    function FarmerchickeggbillModule() {
    }
    FarmerchickeggbillModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _farmerchickeggsbill_view_routing_module__WEBPACK_IMPORTED_MODULE_10__["FarmerChikEggviewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border__WEBPACK_IMPORTED_MODULE_12__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_farmerchickeggsbill_view_component__WEBPACK_IMPORTED_MODULE_9__["FarmerchickeggsbillViewComponent"], _farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_8__["FarmerchickeggsbillDetailComponent"]],
            providers: [_farmerchickeggsbill_service__WEBPACK_IMPORTED_MODULE_13__["FarmerchikeggbillService"]]
        })
    ], FarmerchickeggbillModule);
    return FarmerchickeggbillModule;
}());



/***/ }),

/***/ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.view.routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill.view.routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: FarmerChikEggviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerChikEggviewRoutingModule", function() { return FarmerChikEggviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _farmerchickeggsbill_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmerchickeggsbill-view.component */ "./src/app/sale/farmerchickeggsbill-view/farmerchickeggsbill-view.component.ts");
/* harmony import */ var _farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../farmerchickeggsbill-detail/farmerchickeggsbill-detail.component */ "./src/app/sale/farmerchickeggsbill-detail/farmerchickeggsbill-detail.component.ts");





var routes = [
    {
        path: '',
        component: _farmerchickeggsbill_view_component__WEBPACK_IMPORTED_MODULE_3__["FarmerchickeggsbillViewComponent"],
        data: {
            title: 'Farmer Chik Eggs Bill view'
        }
    },
    {
        path: 'farmerinward',
        component: _farmerchickeggsbill_detail_farmerchickeggsbill_detail_component__WEBPACK_IMPORTED_MODULE_4__["FarmerchickeggsbillDetailComponent"],
        data: {
            title: 'Farmer Chik Eggs Bill Detail'
        }
    }
];
var FarmerChikEggviewRoutingModule = /** @class */ (function () {
    function FarmerChikEggviewRoutingModule() {
    }
    FarmerChikEggviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FarmerChikEggviewRoutingModule);
    return FarmerChikEggviewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=sale-farmerchickeggsbill-view-farmerchickeggsbill-view-module.js.map