(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["farmeroutward-view-farmeroutward-module"],{

/***/ "./src/app/farmer-outward/farmer-outward.component.css":
/*!*************************************************************!*\
  !*** ./src/app/farmer-outward/farmer-outward.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci1vdXR3YXJkL2Zhcm1lci1vdXR3YXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/farmer-outward/farmer-outward.component.html":
/*!**************************************************************!*\
  !*** ./src/app/farmer-outward/farmer-outward.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Farmer Outward</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <!--<form [formGroup]=\"bookingdetailsForm\" (ngSubmit)=\"saveBookingDetails()\">-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Record No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input [(ngModel)]=\"FarmerOutwardMaster.RecordNo\" readonly=\"readonly\" type=\"text\" pInputText id=\"recordno\" name=\"recordno\" class=\"form-control\" rows=\"3\" disabled>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Date :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <p-calendar [(ngModel)]=\"FarmerOutwardMaster.Date\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n              <p-autoComplete [(ngModel)]=\"FarmerOutwardMaster.Location\" [suggestions]=\"locationList\" (completeMethod)=\"searchLocation($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectLocations($event)\" [forceSelection]=\"true\" field=\"LocationName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Customer Name :</strong></label>\r\n              <p-autoComplete [(ngModel)]=\"FarmerOutwardMaster.Customer\" [suggestions]=\"customerList\" (completeMethod)=\"searchCustomer($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectCustomers($event)\" [forceSelection]=\"true\" field=\"CustmerName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Plan :</strong></label>\r\n              <p-autoComplete [(ngModel)]=\"FarmerOutwardMaster.Plan\" [suggestions]=\"planList\" (completeMethod)=\"searchPlan($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectPlans($event)\" [forceSelection]=\"true\" field=\"PlanName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Product Details</strong>\r\n            <div style=\"width:10px\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"card-block \">\r\n                <div class=\"form-group\">\r\n                  Product Name\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  standard Pack\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    Quantity\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  Action\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngFor=\"let item of FarmerOutwardDetailsList\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <p-autoComplete [(ngModel)]=\"item.Product\" [suggestions]=\"productlist\" (completeMethod)=\"searchProduct($event)\"\r\n                                    [dropdown]=\"true\" (onSelect)=\"onSelectProducts($event,item)\" [forceSelection]=\"true\" field=\"ProductName\"></p-autoComplete>\r\n                    <label for=\"float-input\"></label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <p-autoComplete [(ngModel)]=\"item.Units\" [suggestions]=\"unitLists\" (completeMethod)=\"searchUnits($event)\"\r\n                                    [dropdown]=\"true\" (onSelect)=\"onSelectUnits($event,item)\" [forceSelection]=\"true\" field=\"UnitDescription\"></p-autoComplete>\r\n                    <label for=\"float-input\">Standard Pack </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <input type=\"text\"  [(ngModel)]=\"item.Quantity\" pInputText id=\"ref_by\" name=\"ref_by\" class=\"form-control\" rows=\"3\">\r\n                    <label for=\"float-input\">Quantity </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" (click)=\"removeItem(item)\">Delete</button>\r\n                  <i class=\"fa icon-trash\" style=\"height:25px;width:20px;padding-top:10px;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-10\"></div>\r\n            <div class=\"col-sm-2\">\r\n              <button type=\"button\"(click)=\"addNewItem()\">Add new</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <button type=\"button\" (click)=\"saveItems()\">save</button>\r\n        </div>\r\n      </div>\r\n    <!--</form>-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/farmer-outward/farmer-outward.component.ts":
/*!************************************************************!*\
  !*** ./src/app/farmer-outward/farmer-outward.component.ts ***!
  \************************************************************/
/*! exports provided: FarmerOutwardComponent, FarmerOutwardDetail, FarmerOutwardMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerOutwardComponent", function() { return FarmerOutwardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerOutwardDetail", function() { return FarmerOutwardDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerOutwardMaster", function() { return FarmerOutwardMaster; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master/customer-view/customer.service */ "./src/app/master/customer-view/customer.service.ts");
/* harmony import */ var _master_product_view_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master/product-view/product.service */ "./src/app/master/product-view/product.service.ts");
/* harmony import */ var _master_plan_view_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../master/plan-view/plan.service */ "./src/app/master/plan-view/plan.service.ts");
/* harmony import */ var _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../master/location-view/location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _master_productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../master/productdesc-view/productdesc.service */ "./src/app/master/productdesc-view/productdesc.service.ts");











var FarmerOutwardComponent = /** @class */ (function () {
    function FarmerOutwardComponent(formBuilder, cusotmerService, productService, productdescservice, planService, locationService, dialog, config) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.cusotmerService = cusotmerService;
        this.productService = productService;
        this.productdescservice = productdescservice;
        this.planService = planService;
        this.locationService = locationService;
        this.dialog = dialog;
        this.config = config;
        this.FarmerOutwardDetailsList = [];
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.FarmerOutwardMaster = _this.config.data;
            _this.FarmerOutwardMaster.Date = moment__WEBPACK_IMPORTED_MODULE_9__(_this.config.data.Date).toDate();
            _this.getAllFarmeroutwardmastedetails();
        };
        this.loadCustomers = function () {
            _this.cusotmerService.loadCustomers()
                .subscribe(function (customer) {
                _this.customerList = customer;
            });
        };
        this.loadProducts = function () {
            _this.productdescservice.loadProducts()
                .subscribe(function (products) {
                _this.productlist = products;
                if (_this.isEditable == true && _this.FarmerOutwardDetailsList) {
                    _this.FarmerOutwardDetailsList.forEach(function (key, value) {
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
                if (_this.isEditable == true && _this.FarmerOutwardDetailsList) {
                    _this.FarmerOutwardDetailsList.forEach(function (key, value) {
                        key.Units = _this.unitLists.find(function (p) { return p.UnitDescription == key.Unit; });
                    });
                }
            });
        };
        this.addNewItem = function () {
            var newDetails = new FarmerOutwardDetail();
            newDetails.RecordNo = _this.FarmerOutwardMaster.RecordNo;
            newDetails.Date = new Date();
            _this.FarmerOutwardDetailsList.push(newDetails);
        };
        this.removeItem = function (item) {
            _this.FarmerOutwardDetailsList = _this.FarmerOutwardDetailsList.filter(function (p) { return p.PkId != item.PkId; });
        };
        this.saveItems = function () {
            delete _this.FarmerOutwardMaster.Location;
            delete _this.FarmerOutwardMaster.Plan;
            delete _this.FarmerOutwardMaster.Customer;
            _this.FarmerOutwardMaster.TblFarmerOutwardDt = _this.FarmerOutwardDetailsList;
            _this.productService.saveFarmerOutwards(_this.FarmerOutwardMaster);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            _this.dialog.close();
        };
        this.onSelectPlans = function (value) {
            _this.FarmerOutwardMaster.PlanId = _this.FarmerOutwardMaster.Plan.PlanId;
        };
        this.onSelectCustomers = function (value) {
            _this.FarmerOutwardMaster.CustomerId = _this.FarmerOutwardMaster.Customer.CustomerId;
        };
        this.onSelectLocations = function (value) {
            _this.FarmerOutwardMaster.LocationId = _this.FarmerOutwardMaster.Location.LocationId;
        };
        this.onSelectProducts = function (value, model) {
            model.ProductId = model.Product.ProductId;
        };
        this.onSelectUnits = function (value, model) {
            model.Unit = model.Units.UnitDescription;
        };
        this.searchCustomer = function (value) {
            _this.loadCustomers();
        };
        this.searchLocation = function (value) {
            //made Api call for search
            _this.loadLocations();
        };
        this.searchPlan = function (value) {
            //made Api call for search
            _this.loadPlans();
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
    FarmerOutwardComponent.prototype.ngOnInit = function () {
        var detail = new FarmerOutwardDetail();
        this.FarmerOutwardDetailsList = [detail];
        this.FarmerOutwardMaster = new FarmerOutwardMaster();
        this.loadCustomers();
        this.loadLocations();
        this.loadPlans();
        this.loadProducts();
        this.loadUnits();
        if (this.config.data)
            this.setDataForEdit();
    };
    FarmerOutwardComponent.prototype.getAllFarmeroutwardmastedetails = function () {
        var _this = this;
        this.productService.getAllFarmeroutwardmastedetails(this.config.data).subscribe(function (response) {
            _this.FarmerOutwardDetailsList = response;
            _this.loadProducts();
            _this.loadUnits();
        });
    };
    FarmerOutwardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmer-outward',
            template: __webpack_require__(/*! ./farmer-outward.component.html */ "./src/app/farmer-outward/farmer-outward.component.html"),
            styles: [__webpack_require__(/*! ./farmer-outward.component.css */ "./src/app/farmer-outward/farmer-outward.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_3__["CusotmerService"],
            _master_product_view_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _master_productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_10__["ProductdescService"], _master_plan_view_plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"], _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"], _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_8__["DialogConfig"]])
    ], FarmerOutwardComponent);
    return FarmerOutwardComponent;
}());

var FarmerOutwardDetail = /** @class */ (function () {
    function FarmerOutwardDetail() {
        this.RecordNo = 0;
        this.Date = new Date();
        this.ProductId = 0;
        this.Unit = '';
    }
    ;
    return FarmerOutwardDetail;
}());

var FarmerOutwardMaster = /** @class */ (function () {
    function FarmerOutwardMaster() {
        this.RecordNo = 0;
        this.Date = new Date();
        this.LocationId = 0;
        this.CustomerId = 0;
        this.PlanId = 0;
    }
    return FarmerOutwardMaster;
}());



/***/ }),

/***/ "./src/app/farmeroutward-view/farmeroutward-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/farmeroutward-view/farmeroutward-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lcm91dHdhcmQtdmlldy9mYXJtZXJvdXR3YXJkLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/farmeroutward-view/farmeroutward-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/farmeroutward-view/farmeroutward-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\"></div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                 class=\"ag-theme-balham\"\r\n                 [rowData]=\"rowData\"\r\n                 [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/farmeroutward-view/farmeroutward-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/farmeroutward-view/farmeroutward-view.component.ts ***!
  \********************************************************************/
/*! exports provided: FarmeroutwardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmeroutwardViewComponent", function() { return FarmeroutwardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _farmeroutward_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmeroutward.service */ "./src/app/farmeroutward-view/farmeroutward.service.ts");
/* harmony import */ var _farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../farmer-outward/farmer-outward.component */ "./src/app/farmer-outward/farmer-outward.component.ts");







var FarmeroutwardViewComponent = /** @class */ (function () {
    function FarmeroutwardViewComponent(router, http, farmeroutwardService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.farmeroutwardService = farmeroutwardService;
        this.dialog = dialog;
        this.columnDefs = [
            {
                headerName: 'Button Col 1', 'width': 100,
                cellRenderer: 'buttonRenderer',
            },
            {
                headerName: 'RecordNo', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'RecordNo', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'width': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_6__["FarmerOutwardComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Farmer Outward' } });
                        ref.afterClosed.subscribe(function (result) {
                            _this.RefreshGrid();
                        });
                    };
                    return newTH;
                },
            },
            { headerName: 'Date ', field: 'Date', 'width': 150 },
            {
                headerName: 'Location Name', field: 'LocationName', ' width': 150
            },
            {
                headerName: 'Customer Name ', field: 'CustmerName', 'width': 100
            },
            {
                headerName: 'Plan Name ', field: 'PlanName', 'width': 100
            },
        ];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            _this.farmeroutwardService.loadFarmerOutwardMaster().subscribe(function (response) {
                _this.rowData = response;
            }, function (error) {
                console.log(error);
            });
        };
    }
    FarmeroutwardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.farmeroutwardService.loadFarmerOutwardMaster().subscribe(function (response) {
            _this.rowData = response;
        }, function (error) {
            console.log(error);
        });
    };
    FarmeroutwardViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_6__["FarmerOutwardComponent"], { modalConfig: { title: 'Add/Edit Farmer Outward Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    FarmeroutwardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmeroutward-view',
            template: __webpack_require__(/*! ./farmeroutward-view.component.html */ "./src/app/farmeroutward-view/farmeroutward-view.component.html"),
            styles: [__webpack_require__(/*! ./farmeroutward-view.component.css */ "./src/app/farmeroutward-view/farmeroutward-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _farmeroutward_service__WEBPACK_IMPORTED_MODULE_5__["FarmeroutwardService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], FarmeroutwardViewComponent);
    return FarmeroutwardViewComponent;
}());



/***/ }),

/***/ "./src/app/farmeroutward-view/farmeroutward.module.ts":
/*!************************************************************!*\
  !*** ./src/app/farmeroutward-view/farmeroutward.module.ts ***!
  \************************************************************/
/*! exports provided: FarmeroutwardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmeroutwardModule", function() { return FarmeroutwardModule; });
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
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");
/* harmony import */ var _validation_border__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../validation-border */ "./src/app/validation-border/index.ts");
/* harmony import */ var _farmeroutward_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./farmeroutward.service */ "./src/app/farmeroutward-view/farmeroutward.service.ts");
/* harmony import */ var _farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../farmer-outward/farmer-outward.component */ "./src/app/farmer-outward/farmer-outward.component.ts");
/* harmony import */ var _farmeroutward_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./farmeroutward-view.component */ "./src/app/farmeroutward-view/farmeroutward-view.component.ts");
/* harmony import */ var _farmeroutward_view_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./farmeroutward.view.routing.module */ "./src/app/farmeroutward-view/farmeroutward.view.routing.module.ts");








//import { DPRService } from './dpr.service';
//import { AutoCompleteModule } from 'primeng';






var FarmeroutwardModule = /** @class */ (function () {
    function FarmeroutwardModule() {
    }
    FarmeroutwardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_8__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _farmeroutward_view_routing_module__WEBPACK_IMPORTED_MODULE_13__["FarmeroutwardviewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border__WEBPACK_IMPORTED_MODULE_9__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_farmeroutward_view_component__WEBPACK_IMPORTED_MODULE_12__["FarmeroutwardViewComponent"], _farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_11__["FarmerOutwardComponent"]],
            providers: [_farmeroutward_service__WEBPACK_IMPORTED_MODULE_10__["FarmeroutwardService"]]
        })
    ], FarmeroutwardModule);
    return FarmeroutwardModule;
}());



/***/ }),

/***/ "./src/app/farmeroutward-view/farmeroutward.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/farmeroutward-view/farmeroutward.service.ts ***!
  \*************************************************************/
/*! exports provided: FarmeroutwardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmeroutwardService", function() { return FarmeroutwardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




var FarmeroutwardService = /** @class */ (function () {
    function FarmeroutwardService(http) {
        this.http = http;
    }
    FarmeroutwardService.prototype.loadFarmerOutwardMaster = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].PRODUCT_FARMER_OUTWARDS_API.GETALLFARMEROUTWARDMASTERS);
    };
    FarmeroutwardService.prototype.getCustomerByID = function (id) {
        //    return this.http.post(APP_CONSTANT.GETALLFARMERINWARDMASTERS.GETByID,id);
    };
    FarmeroutwardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FarmeroutwardService);
    return FarmeroutwardService;
}());



/***/ }),

/***/ "./src/app/farmeroutward-view/farmeroutward.view.routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/farmeroutward-view/farmeroutward.view.routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: FarmeroutwardviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmeroutwardviewRoutingModule", function() { return FarmeroutwardviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../farmer-outward/farmer-outward.component */ "./src/app/farmer-outward/farmer-outward.component.ts");
/* harmony import */ var _farmeroutward_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./farmeroutward-view.component */ "./src/app/farmeroutward-view/farmeroutward-view.component.ts");





var routes = [
    {
        path: '',
        component: _farmeroutward_view_component__WEBPACK_IMPORTED_MODULE_4__["FarmeroutwardViewComponent"],
        data: {
            title: 'Farmer Outward view'
        }
    },
    {
        path: 'farmeroutward',
        component: _farmer_outward_farmer_outward_component__WEBPACK_IMPORTED_MODULE_3__["FarmerOutwardComponent"],
        data: {
            title: 'Farmer Outward Master'
        }
    }
];
var FarmeroutwardviewRoutingModule = /** @class */ (function () {
    function FarmeroutwardviewRoutingModule() {
    }
    FarmeroutwardviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FarmeroutwardviewRoutingModule);
    return FarmeroutwardviewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=farmeroutward-view-farmeroutward-module.js.map