(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["farmerinward-view-farmerinward-module"],{

/***/ "./src/app/farmer-inward/farmer-inward.component.css":
/*!***********************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci1pbndhcmQvZmFybWVyLWlud2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/farmer-inward/farmer-inward.component.html":
/*!************************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Booking Order</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <!--<form [formGroup]=\"bookingdetailsForm\" (ngSubmit)=\"saveBookingDetails()\">-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Record No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input [(ngModel)]=\"FarmerInwardMaster.RecordNo\" readonly=\"readonly\" type=\"text\" pInputText id=\"recordno\" name=\"recordno\" class=\"form-control\" rows=\"3\" disabled>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       \r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Date :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <p-calendar [(ngModel)]=\"FarmerInwardMaster.Date\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n       \r\n      </div>\r\n\r\n      <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n\r\n              <p-autoComplete [(ngModel)]=\"FarmerInwardMaster.Location\" [suggestions]=\"locationList\" (completeMethod)=\"searchLocation($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectLocations($event)\" [forceSelection]=\"true\" field=\"LocationName\"></p-autoComplete>\r\n\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Customer Name :</strong></label>\r\n              <p-autoComplete [(ngModel)]=\"FarmerInwardMaster.Customer\" [suggestions]=\"customerList\" (completeMethod)=\"searchCustomer($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectCustomers($event)\" [forceSelection]=\"true\" field=\"CustmerName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Plan :</strong></label>\r\n              <p-autoComplete [(ngModel)]=\"FarmerInwardMaster.Plan\" [suggestions]=\"planList\" (completeMethod)=\"searchPlan($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectPlans($event)\" [forceSelection]=\"true\" field=\"PlanName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Product Details</strong>\r\n            <div style=\"width:10px\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"card-block \">\r\n                <div class=\"form-group\">\r\n                  Product Name\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  standard Pack\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n\r\n                    Quantity\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  Action\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngFor=\"let item of FarmerInwardDetailsList\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <p-autoComplete [(ngModel)]=\"item.Product\" [suggestions]=\"productlist\" (completeMethod)=\"searchProduct($event)\"\r\n                                    [dropdown]=\"true\" (onSelect)=\"onSelectProducts($event,item)\" [forceSelection]=\"true\" field=\"ProductName\"></p-autoComplete>\r\n\r\n                    <label for=\"float-input\"></label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <p-autoComplete [(ngModel)]=\"item.Units\" [suggestions]=\"unitLists\" (completeMethod)=\"searchUnits($event)\"\r\n                                    [dropdown]=\"true\" (onSelect)=\"onSelectUnits($event,item)\" [forceSelection]=\"true\" field=\"UnitDescription\"></p-autoComplete>\r\n                    <label for=\"float-input\">Standard Pack </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <input type=\"text\"  [(ngModel)]=\"item.Quantity\" pInputText id=\"ref_by\" name=\"ref_by\" class=\"form-control\" rows=\"3\">\r\n                    <label for=\"float-input\">Quantity </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" (click)=\"removeItem(item)\">Delete</button>\r\n                  <i class=\"fa icon-trash\" style=\"height:25px;width:20px;padding-top:10px;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-10\"></div>\r\n            <div class=\"col-sm-2\">\r\n              <button type=\"button\"(click)=\"addNewItem()\">Add new</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <button type=\"button\" (click)=\"saveItems()\">save</button>\r\n        </div>\r\n      </div>\r\n    <!--</form>-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/farmer-inward/farmer-inward.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.component.ts ***!
  \**********************************************************/
/*! exports provided: FarmerInwardComponent, FarmerInwardDetail, FarmerInwardMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerInwardComponent", function() { return FarmerInwardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerInwardDetail", function() { return FarmerInwardDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerInwardMaster", function() { return FarmerInwardMaster; });
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











var FarmerInwardComponent = /** @class */ (function () {
    function FarmerInwardComponent(formBuilder, cusotmerService, productService, planService, locationService, productdescService, dialog, config) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.cusotmerService = cusotmerService;
        this.productService = productService;
        this.planService = planService;
        this.locationService = locationService;
        this.productdescService = productdescService;
        this.dialog = dialog;
        this.config = config;
        this.FarmerInwardDetailsList = [];
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.FarmerInwardMaster = _this.config.data;
            _this.FarmerInwardMaster.Date = moment__WEBPACK_IMPORTED_MODULE_9__(_this.config.data.Date).toDate();
            _this.getAllFarmerinwardmastedetails();
        };
        this.loadCustomers = function () {
            _this.cusotmerService.loadCustomers()
                .subscribe(function (customer) {
                _this.customerList = customer;
            });
        };
        this.loadProducts = function () {
            _this.productdescService.loadProducts()
                .subscribe(function (products) {
                _this.productlist = products;
                if (_this.isEditable == true && _this.FarmerInwardDetailsList) {
                    _this.FarmerInwardDetailsList.forEach(function (key, value) {
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
                if (_this.isEditable == true && _this.FarmerInwardDetailsList) {
                    _this.FarmerInwardDetailsList.forEach(function (key, value) {
                        key.Units = _this.unitLists.find(function (p) { return p.UnitDescription == key.Unit; });
                    });
                }
            });
        };
        this.addNewItem = function () {
            var newDetails = new FarmerInwardDetail();
            newDetails.RecordNo = _this.FarmerInwardMaster.RecordNo;
            newDetails.Date = new Date();
            _this.FarmerInwardDetailsList.push(newDetails);
        };
        this.removeItem = function (item) {
            _this.FarmerInwardDetailsList = _this.FarmerInwardDetailsList.filter(function (p) { return p.PkId != item.PkId; });
        };
        this.saveItems = function () {
            delete _this.FarmerInwardMaster.Location;
            delete _this.FarmerInwardMaster.Plan;
            delete _this.FarmerInwardMaster.Customer;
            _this.FarmerInwardMaster.TblFarmerInwardDt = _this.FarmerInwardDetailsList;
            _this.productService.saveFarmerInwards(_this.FarmerInwardMaster);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            _this.dialog.close();
        };
        this.onSelectPlans = function (value) {
            _this.FarmerInwardMaster.PlanId = _this.FarmerInwardMaster.Plan.PlanId;
        };
        this.onSelectCustomers = function (value) {
            _this.FarmerInwardMaster.CustomerId = _this.FarmerInwardMaster.Customer.CustomerId;
        };
        this.onSelectLocations = function (value) {
            _this.FarmerInwardMaster.LocationId = _this.FarmerInwardMaster.Location.LocationId;
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
    FarmerInwardComponent.prototype.ngOnInit = function () {
        var detail = new FarmerInwardDetail();
        this.FarmerInwardDetailsList = [detail];
        this.FarmerInwardMaster = new FarmerInwardMaster();
        this.loadCustomers();
        this.loadLocations();
        this.loadPlans();
        if (this.config.data)
            this.setDataForEdit();
    };
    FarmerInwardComponent.prototype.getAllFarmerinwardmastedetails = function () {
        var _this = this;
        this.productService.getAllFarmerinwardmastedetails(this.config.data).subscribe(function (response) {
            _this.FarmerInwardDetailsList = response;
            _this.loadProducts();
            _this.loadUnits();
        });
    };
    FarmerInwardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmer-inward',
            template: __webpack_require__(/*! ./farmer-inward.component.html */ "./src/app/farmer-inward/farmer-inward.component.html"),
            styles: [__webpack_require__(/*! ./farmer-inward.component.css */ "./src/app/farmer-inward/farmer-inward.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_3__["CusotmerService"],
            _master_product_view_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _master_plan_view_plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"], _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _master_productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_10__["ProductdescService"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"], _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_8__["DialogConfig"]])
    ], FarmerInwardComponent);
    return FarmerInwardComponent;
}());

var FarmerInwardDetail = /** @class */ (function () {
    function FarmerInwardDetail() {
        this.RecordNo = 0;
        this.Date = new Date();
        this.ProductId = 0;
        this.Unit = '';
    }
    ;
    return FarmerInwardDetail;
}());

var FarmerInwardMaster = /** @class */ (function () {
    function FarmerInwardMaster() {
        this.RecordNo = 0;
        this.Date = new Date();
        this.LocationId = 0;
        this.CustomerId = 0;
        this.PlanId = 0;
    }
    return FarmerInwardMaster;
}());



/***/ }),

/***/ "./src/app/farmerinward-view/farmerinward-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/farmerinward-view/farmerinward-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lcmlud2FyZC12aWV3L2Zhcm1lcmlud2FyZC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/farmerinward-view/farmerinward-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/farmerinward-view/farmerinward-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\"></div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                 class=\"ag-theme-balham\"\r\n                 [rowData]=\"rowData\"\r\n                 [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/farmerinward-view/farmerinward-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/farmerinward-view/farmerinward-view.component.ts ***!
  \******************************************************************/
/*! exports provided: FarmerinwardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerinwardViewComponent", function() { return FarmerinwardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../farmer-inward/farmer-inward.component */ "./src/app/farmer-inward/farmer-inward.component.ts");
/* harmony import */ var _farmerinward_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farmerinward.service */ "./src/app/farmerinward-view/farmerinward.service.ts");







var FarmerinwardViewComponent = /** @class */ (function () {
    function FarmerinwardViewComponent(router, http, farmerinwardService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.farmerinwardService = farmerinwardService;
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
                        var ref = _this.dialog.open(_farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_5__["FarmerInwardComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Farmer Inward' } });
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
            _this.farmerinwardService.loadFarmerInwardMaster().subscribe(function (response) {
                _this.rowData = response;
            }, function (error) {
                console.log(error);
            });
        };
    }
    FarmerinwardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.farmerinwardService.loadFarmerInwardMaster().subscribe(function (response) {
            _this.rowData = response;
        }, function (error) {
            console.log(error);
        });
    };
    FarmerinwardViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_5__["FarmerInwardComponent"], { modalConfig: { title: 'Add/Edit Farmer Inward Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    FarmerinwardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmerinward-view',
            template: __webpack_require__(/*! ./farmerinward-view.component.html */ "./src/app/farmerinward-view/farmerinward-view.component.html"),
            styles: [__webpack_require__(/*! ./farmerinward-view.component.css */ "./src/app/farmerinward-view/farmerinward-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _farmerinward_service__WEBPACK_IMPORTED_MODULE_6__["FarmerinwardService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], FarmerinwardViewComponent);
    return FarmerinwardViewComponent;
}());



/***/ }),

/***/ "./src/app/farmerinward-view/farmerinward.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/farmerinward-view/farmerinward.module.ts ***!
  \**********************************************************/
/*! exports provided: FarmerinwardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerinwardModule", function() { return FarmerinwardModule; });
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
/* harmony import */ var _farmerinward_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./farmerinward-view.component */ "./src/app/farmerinward-view/farmerinward-view.component.ts");
/* harmony import */ var _farmerinward_view_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./farmerinward.view.routing.module */ "./src/app/farmerinward-view/farmerinward.view.routing.module.ts");
/* harmony import */ var _farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../farmer-inward/farmer-inward.component */ "./src/app/farmer-inward/farmer-inward.component.ts");
/* harmony import */ var _farmerinward_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./farmerinward.service */ "./src/app/farmerinward-view/farmerinward.service.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");
/* harmony import */ var _validation_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../validation-border */ "./src/app/validation-border/index.ts");








//import { DPRService } from './dpr.service';
//import { AutoCompleteModule } from 'primeng';






var FarmerinwardModule = /** @class */ (function () {
    function FarmerinwardModule() {
    }
    FarmerinwardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_12__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _farmerinward_view_routing_module__WEBPACK_IMPORTED_MODULE_9__["FarmerinwardviewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border__WEBPACK_IMPORTED_MODULE_13__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_farmerinward_view_component__WEBPACK_IMPORTED_MODULE_8__["FarmerinwardViewComponent"], _farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_10__["FarmerInwardComponent"]],
            providers: [_farmerinward_service__WEBPACK_IMPORTED_MODULE_11__["FarmerinwardService"]]
        })
    ], FarmerinwardModule);
    return FarmerinwardModule;
}());



/***/ }),

/***/ "./src/app/farmerinward-view/farmerinward.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/farmerinward-view/farmerinward.service.ts ***!
  \***********************************************************/
/*! exports provided: FarmerinwardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerinwardService", function() { return FarmerinwardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.ts");




var FarmerinwardService = /** @class */ (function () {
    function FarmerinwardService(http) {
        this.http = http;
    }
    FarmerinwardService.prototype.loadFarmerInwardMaster = function () {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].PRODUCT_FARMER_INWARDS_API.GETALLFARMERINWARDMASTERS);
    };
    FarmerinwardService.prototype.getCustomerByID = function (id) {
        //    return this.http.post(APP_CONSTANT.GETALLFARMERINWARDMASTERS.GETByID,id);
    };
    FarmerinwardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FarmerinwardService);
    return FarmerinwardService;
}());



/***/ }),

/***/ "./src/app/farmerinward-view/farmerinward.view.routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/farmerinward-view/farmerinward.view.routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FarmerinwardviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerinwardviewRoutingModule", function() { return FarmerinwardviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _farmerinward_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmerinward-view.component */ "./src/app/farmerinward-view/farmerinward-view.component.ts");
/* harmony import */ var _farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../farmer-inward/farmer-inward.component */ "./src/app/farmer-inward/farmer-inward.component.ts");





var routes = [
    {
        path: '',
        component: _farmerinward_view_component__WEBPACK_IMPORTED_MODULE_3__["FarmerinwardViewComponent"],
        data: {
            title: 'Farmer Inward view'
        }
    },
    {
        path: 'farmerinward',
        component: _farmer_inward_farmer_inward_component__WEBPACK_IMPORTED_MODULE_4__["FarmerInwardComponent"],
        data: {
            title: 'Farmer Inward Master'
        }
    }
];
var FarmerinwardviewRoutingModule = /** @class */ (function () {
    function FarmerinwardviewRoutingModule() {
    }
    FarmerinwardviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FarmerinwardviewRoutingModule);
    return FarmerinwardviewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=farmerinward-view-farmerinward-module.js.map