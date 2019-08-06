(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-salesreceipt-view-salesreceipt-view-module"],{

/***/ "./src/app/account/salesreceipt-details/salesreceipt-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/account/salesreceipt-details/salesreceipt-details.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2FsZXNyZWNlaXB0LWRldGFpbHMvc2FsZXNyZWNlaXB0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/salesreceipt-details/salesreceipt-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/account/salesreceipt-details/salesreceipt-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Sales Receipt</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"salereceiptdetailsForm\" (ngSubmit)=\"saveSalereceipt()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Receipt No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ReceiptNo\" type=\"text\" pInputText id=\"receiptno\" name=\"receiptno\" class=\"form-control\" rows=\"3\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Date :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <p-calendar formControlName=\"Date\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n              <p-autoComplete formControlName=\"Location\" [suggestions]=\"locationList\" (completeMethod)=\"searchLocation($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"LocationName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Customer Name :</strong></label>\r\n              <p-autoComplete formControlName=\"Customer\" [suggestions]=\"customerList\" (completeMethod)=\"searchCustomer($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"CustmerName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Payment Type :</strong></label>\r\n              <select formControlName=\"PaymentType\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"Please select\">Please select</option>\r\n                <option value=\"Against Bill\">Against Bill</option>\r\n                <option value=\"Against Advance\">Against Advance</option>\r\n                <option value=\"Aganist Sale Return\">Aganist Sale Return</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Bill Reference No :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"BillRefNo\" type=\"text\" pInputText id=\"billrefno\" name=\"billrefno\" class=\"form-control\" rows=\"3\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-header\">\r\n        <strong>Payment Details</strong>\r\n        <!--<small>Form</small>-->\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Payment Method :</strong></label>\r\n              <select formControlName=\"PaymentMethod\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"Please select\">Please select</option>\r\n                <option value=\"Cash\">Cash</option>\r\n                <option value=\"Cheque\">Cheque</option>\r\n                <option value=\"Card\">Card</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Cheque No :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ChequeNo\" type=\"text\" pInputText id=\"chequeno\" name=\"chequeno\" class=\"form-control\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Cheque Amount :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ChequeAmount\" type=\"text\" pInputText id=\"chequeamount\" name=\"chequeamount\" class=\"form-control\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Cash Amount :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"CashAmount\" type=\"text\" pInputText id=\"cashamount\" name=\"cashamount\" class=\"form-control\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Narration :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Narration\" type=\"text\" pInputText id=\"narration\" name=\"narration\" class=\"form-control\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/salesreceipt-details/salesreceipt-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/account/salesreceipt-details/salesreceipt-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: SalesReceiptDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReceiptDetailsComponent", function() { return SalesReceiptDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _salesreceipt_view_salesreceipt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../salesreceipt-view/salesreceipt.service */ "./src/app/account/salesreceipt-view/salesreceipt.service.ts");
/* harmony import */ var _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../master/customer-view/customer.service */ "./src/app/master/customer-view/customer.service.ts");
/* harmony import */ var _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../master/location-view/location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var SalesReceiptDetailsComponent = /** @class */ (function () {
    function SalesReceiptDetailsComponent(router, formBuilder, http, salesreceiptservice, config, dialog, cusotmerService, locationService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.salesreceiptservice = salesreceiptservice;
        this.config = config;
        this.dialog = dialog;
        this.cusotmerService = cusotmerService;
        this.locationService = locationService;
        this.isEditable = false;
        this.customerList = [];
        this.setDataForEdit = function () {
            _this.isEditable = true;
            var salereceiptdetails = _this.config.data;
            salereceiptdetails.Date = (moment__WEBPACK_IMPORTED_MODULE_10__(_this.config.data.Date).toDate());
            _this.salereceiptdetailsForm.setValue(_this.config.data);
        };
    }
    SalesReceiptDetailsComponent.prototype.ngOnInit = function () {
        this.salereceiptdetailsForm = this.formBuilder.group({
            ReceiptNo: [0],
            Date: [],
            Location: [{}],
            Customer: [{}],
            PaymentType: [],
            BillRefNo: [],
            PaymentMethod: [],
            ChequeNo: [],
            ChequeAmount: [],
            CashAmount: [],
            Narration: [],
            IsDeleted: [false],
            LocationId: [],
            CustomerId: []
        });
        if (this.config.data) {
            this.getCstomer(this.config.data.CustomerId);
            this.getLocation(this.config.data.LocationId);
            this.setDataForEdit();
        }
    };
    SalesReceiptDetailsComponent.prototype.getCstomer = function (id) {
        var _this = this;
        this.cusotmerService.getCustomerByID(id).subscribe(function (customer) {
            _this.salereceiptdetailsForm.patchValue({ Customer: customer });
        });
    };
    SalesReceiptDetailsComponent.prototype.getLocation = function (id) {
        var _this = this;
        this.locationService.getLocationByID(id).subscribe(function (location) {
            _this.salereceiptdetailsForm.patchValue({ Location: location });
        });
    };
    SalesReceiptDetailsComponent.prototype.searchCustomer = function (event) {
        var _this = this;
        this.salesreceiptservice.searchCustomer(event.query).subscribe(function (data) {
            _this.customerList = data;
        });
    };
    SalesReceiptDetailsComponent.prototype.searchLocation = function (event) {
        var _this = this;
        this.salesreceiptservice.searchLocation(event.query).subscribe(function (data) {
            _this.locationList = data;
        });
    };
    SalesReceiptDetailsComponent.prototype.saveSalereceipt = function () {
        var _this = this;
        var salereceiptdetails = this.salereceiptdetailsForm.value;
        salereceiptdetails.LocationId = salereceiptdetails.Location.LocationId;
        salereceiptdetails.CustomerId = salereceiptdetails.Customer.CustomerId;
        delete salereceiptdetails.Location;
        delete salereceiptdetails.Customer;
        this.salesreceiptservice.saveSalereceipt(salereceiptdetails, this.isEditable).subscribe(function (salereceiptdetails) {
            // login successful if there's a jwt token in the response
            if (salereceiptdetails) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(salereceiptdetails);
            }
            return salereceiptdetails;
        });
    };
    SalesReceiptDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salesreceipt-details',
            template: __webpack_require__(/*! ./salesreceipt-details.component.html */ "./src/app/account/salesreceipt-details/salesreceipt-details.component.html"),
            styles: [__webpack_require__(/*! ./salesreceipt-details.component.css */ "./src/app/account/salesreceipt-details/salesreceipt-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _salesreceipt_view_salesreceipt_service__WEBPACK_IMPORTED_MODULE_7__["SalesReceiptService"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_6__["DialogRef"],
            _master_customer_view_customer_service__WEBPACK_IMPORTED_MODULE_8__["CusotmerService"], _master_location_view_location_service__WEBPACK_IMPORTED_MODULE_9__["LocationService"]])
    ], SalesReceiptDetailsComponent);
    return SalesReceiptDetailsComponent;
}());



/***/ }),

/***/ "./src/app/account/salesreceipt-view/salesreceipt-view.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/account/salesreceipt-view/salesreceipt-view.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvc2FsZXNyZWNlaXB0LXZpZXcvc2FsZXNyZWNlaXB0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/account/salesreceipt-view/salesreceipt-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/salesreceipt-view/salesreceipt-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\"></div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                 class=\"ag-theme-balham\"\r\n                 [rowData]=\"rowData\"\r\n                 [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/account/salesreceipt-view/salesreceipt-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/salesreceipt-view/salesreceipt-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalesreceiptViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesreceiptViewComponent", function() { return SalesreceiptViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _salesreceipt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salesreceipt.service */ "./src/app/account/salesreceipt-view/salesreceipt.service.ts");
/* harmony import */ var _salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../salesreceipt-details/salesreceipt-details.component */ "./src/app/account/salesreceipt-details/salesreceipt-details.component.ts");








var SalesreceiptViewComponent = /** @class */ (function () {
    function SalesreceiptViewComponent(router, http, salesreceiptservice, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.salesreceiptservice = salesreceiptservice;
        this.dialog = dialog;
        this.onBtnClick1 = function (param) {
            alert('i am clicked');
            console.log(param);
        };
        this.columnDefs = [
            //{
            //  headerName: 'Button Col 1', 'width': 100,
            //  cellRenderer: 'buttonRenderer',
            //  cellRendererParams: {
            //    onClick: this.onBtnClick1.bind(this),
            //    label: 'Click 1'
            //  }
            //},
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'width': 100,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_7__["SalesReceiptDetailsComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Sales Receipt' } });
                        ref.afterClosed.subscribe(function (result) {
                            _this.RefreshGrid();
                        });
                    };
                    return newTH;
                },
            },
            {
                headerName: 'Delete', 'width': 120,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    //newTH.innerHTML = 'Delete';
                    newTH.className = "pi pi-times";
                    newTH.onclick = function () {
                        _this.delete(params.data);
                    };
                    return newTH;
                },
            },
            {
                headerName: 'Receipt No', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'ReceiptNo', 'width': 130
            },
            { headerName: 'Date ', field: 'Date', 'width': 100 },
            {
                headerName: 'Location Name', field: 'Location.LocationName', ' width': 120
            },
            {
                headerName: 'Customer Name ', field: 'Customer.CustmerName', 'width': 100
            },
            {
                headerName: 'PaymentType    ', field: 'PaymentType', 'width': 100
            },
            //{ headerName: 'BillRefNo    ', field: 'BillRefNo' },
            { headerName: 'Payment Method    ', field: 'PaymentMethod' },
            { headerName: 'Cheque No    ', field: 'ChequeNo' },
            { headerName: 'Cheque Amount    ', field: 'ChequeAmount' },
            { headerName: 'Cash Amount    ', field: 'CashAmount' },
            { headerName: 'Narration    ', field: 'Narration' }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].SALERECEIPT_API.GETALL, httpOptions)
                .subscribe(function (salereceipt) {
                _this.rowData = salereceipt;
            });
        };
    }
    SalesreceiptViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].SALERECEIPT_API.GETALL, httpOptions)
            .subscribe(function (salereceipt) {
            _this.rowData = salereceipt;
        });
    };
    SalesreceiptViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_7__["SalesReceiptDetailsComponent"], { modalConfig: { title: 'Add/Edit Sale Receipt' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    SalesreceiptViewComponent.prototype.delete = function (salereceipt) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].SALERECEIPT_API.DELETE, salereceipt, httpOptions)
            .subscribe(function (salereceipt) {
            _this.RefreshGrid();
        });
    };
    SalesreceiptViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salesreceipt-view',
            template: __webpack_require__(/*! ./salesreceipt-view.component.html */ "./src/app/account/salesreceipt-view/salesreceipt-view.component.html"),
            styles: [__webpack_require__(/*! ./salesreceipt-view.component.css */ "./src/app/account/salesreceipt-view/salesreceipt-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _salesreceipt_service__WEBPACK_IMPORTED_MODULE_6__["SalesReceiptService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]])
    ], SalesreceiptViewComponent);
    return SalesreceiptViewComponent;
}());



/***/ }),

/***/ "./src/app/account/salesreceipt-view/salesreceipt.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/account/salesreceipt-view/salesreceipt.service.ts ***!
  \*******************************************************************/
/*! exports provided: SalesReceiptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReceiptService", function() { return SalesReceiptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");




var SalesReceiptService = /** @class */ (function () {
    function SalesReceiptService(http) {
        this.http = http;
    }
    SalesReceiptService.prototype.setData = function (salesreceiptData) {
        this.salesreceiptData = salesreceiptData;
    };
    SalesReceiptService.prototype.getData = function () {
        return this.salesreceiptData;
    };
    //searchCustomer(searchString) {
    //  return this.http.post(APP_CONSTANT.CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
    //}
    //searchPlan(searchString) {
    //  return this.http.post(APP_CONSTANT.PLAN_API.SEARCH_PLAN, JSON.stringify(searchString));
    //}
    SalesReceiptService.prototype.searchCustomer = function (searchString) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].CUSOTMER_API.SEARCH_CUSTOMER, JSON.stringify(searchString));
    };
    SalesReceiptService.prototype.searchLocation = function (searchString) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].LOCATION_API.SEARCH_LOCATION, JSON.stringify(searchString));
    };
    SalesReceiptService.prototype.saveSalereceipt = function (formValues, isEditable) {
        return this.http.post(isEditable ? _config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].SALERECEIPT_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_3__["APP_CONSTANT"].SALERECEIPT_API.ADD, formValues);
    };
    SalesReceiptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SalesReceiptService);
    return SalesReceiptService;
}());



/***/ }),

/***/ "./src/app/account/salesreceipt-view/salesreceipt.view.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/account/salesreceipt-view/salesreceipt.view.module.ts ***!
  \***********************************************************************/
/*! exports provided: SalesReceiptViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReceiptViewModule", function() { return SalesReceiptViewModule; });
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
/* harmony import */ var _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../validation-border/validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");
/* harmony import */ var _salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../salesreceipt-details/salesreceipt-details.component */ "./src/app/account/salesreceipt-details/salesreceipt-details.component.ts");
/* harmony import */ var _salesreceipt_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./salesreceipt.service */ "./src/app/account/salesreceipt-view/salesreceipt.service.ts");
/* harmony import */ var _salesreceipt_view_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./salesreceipt.view.routing.module */ "./src/app/account/salesreceipt-view/salesreceipt.view.routing.module.ts");
/* harmony import */ var _salesreceipt_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./salesreceipt-view.component */ "./src/app/account/salesreceipt-view/salesreceipt-view.component.ts");














//import { AutoCompleteModule } from 'primeng';
var SalesReceiptViewModule = /** @class */ (function () {
    function SalesReceiptViewModule() {
    }
    SalesReceiptViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _salesreceipt_view_routing_module__WEBPACK_IMPORTED_MODULE_12__["SalesReceiptViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_salesreceipt_view_component__WEBPACK_IMPORTED_MODULE_13__["SalesreceiptViewComponent"], _salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_10__["SalesReceiptDetailsComponent"]],
            providers: [_salesreceipt_service__WEBPACK_IMPORTED_MODULE_11__["SalesReceiptService"]]
        })
    ], SalesReceiptViewModule);
    return SalesReceiptViewModule;
}());



/***/ }),

/***/ "./src/app/account/salesreceipt-view/salesreceipt.view.routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/account/salesreceipt-view/salesreceipt.view.routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SalesReceiptViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReceiptViewRoutingModule", function() { return SalesReceiptViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _salesreceipt_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salesreceipt-view.component */ "./src/app/account/salesreceipt-view/salesreceipt-view.component.ts");
/* harmony import */ var _salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../salesreceipt-details/salesreceipt-details.component */ "./src/app/account/salesreceipt-details/salesreceipt-details.component.ts");





var routes = [
    {
        path: '',
        component: _salesreceipt_view_component__WEBPACK_IMPORTED_MODULE_3__["SalesreceiptViewComponent"],
        data: {
            title: 'Sales View'
        }
    },
    {
        path: 'salereceipt',
        component: _salesreceipt_details_salesreceipt_details_component__WEBPACK_IMPORTED_MODULE_4__["SalesReceiptDetailsComponent"],
        data: {
            title: 'salereceipt'
        }
    }
];
var SalesReceiptViewRoutingModule = /** @class */ (function () {
    function SalesReceiptViewRoutingModule() {
    }
    SalesReceiptViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SalesReceiptViewRoutingModule);
    return SalesReceiptViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=account-salesreceipt-view-salesreceipt-view-module.js.map