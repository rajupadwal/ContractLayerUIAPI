(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-customer-view-customer-module"],{

/***/ "./src/app/master/customer-info/customer-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/master/customer-info/customer-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jdXN0b21lci1pbmZvL2N1c3RvbWVyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/customer-info/customer-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/customer-info/customer-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Customer Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"customerForm\" (ngSubmit)=\"saveCustomer()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Customer Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"CustmerName\" type=\"text\" pInputText id=\"customername\" name=\"customername\" class=\"form-control\" rows=\"3\">\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Customer Mobile No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"CustomerMobileNo\" type=\"text\" pInputText id=\"customermobileno\" name=\"customermobileno\" class=\"form-control\" rows=\"3\">\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group \">\r\n          <label for=\"textarea-input\"><strong>Address Details:</strong></label>\r\n          <div>\r\n            <span class=\"ui-float-label\">\r\n              <textarea formControlName=\"Address\" id=\"textarea-input\" name=\"textarea-input\" rows=\"2\" class=\"form-control\"></textarea>\r\n              \r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>State :</strong></label>\r\n              <select formControlName=\"State\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Option #1</option>\r\n                <option value=\"2\">Option #2</option>\r\n                <option value=\"3\">Option #3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>District :</strong></label>\r\n              <select formControlName=\"District\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Option #1</option>\r\n                <option value=\"2\">Option #2</option>\r\n                <option value=\"3\">Option #3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Taluka :</strong></label>\r\n              <select formControlName=\"Taluka\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Option #1</option>\r\n                <option value=\"2\">Option #2</option>\r\n                <option value=\"3\">Option #3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>City :</strong></label>\r\n              <select formControlName=\"City\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Option #1</option>\r\n                <option value=\"2\">Option #2</option>\r\n                <option value=\"3\">Option #3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>PIN Code:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Pincode\" type=\"text\" pInputText id=\"pincode\" name=\"pincode\" class=\"form-control\">\r\n                  \r\n                </span>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n              <select formControlName=\"Taluka\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Option #1</option>\r\n                <option value=\"2\">Option #2</option>\r\n                <option value=\"3\">Option #3</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>GST No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"GstNo\" type=\"text\" pInputText id=\"gstno\" name=\"gstno\" class=\"form-control\">\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>PAN No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PanNo\" type=\"text\" pInputText id=\"panno\" name=\"panno\" class=\"form-control\" rows=\"3\">\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Contact Person Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ContactPerson\" id=\"ContactPerson\" name=\"ContactPerson\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Contact No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ConatctPersonNo\" id=\"ConatctPersonNo\" name=\"ConatctPersonNo\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Designation:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Designation\" id=\"designation\" name=\"designation\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>AccountHolderName:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AccountHolderName\" id=\"accountholdername\" name=\"accountholdername\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>IFSC Code:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"IfscCode\" id=\"ifsccode\" name=\"ifsccode\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>BankName:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"BankName\" id=\"bankname\" name=\"bankname\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Account No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AccountNo\" id=\"accountno\" name=\"accountno\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>AccountType:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AccountType\" id=\"accounttype\" name=\"accounttype\" class=\"form-control\" />\r\n                  \r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/customer-info/customer-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/customer-info/customer-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function() { return CustomerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var CustomerInfoComponent = /** @class */ (function () {
    function CustomerInfoComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.customerForm.setValue(_this.config.data);
        };
    }
    CustomerInfoComponent.prototype.ngOnInit = function () {
        this.customerForm = this.formBuilder.group({
            AccountType: [],
            Address: [],
            BankName: [],
            City: [],
            ConatctPersonNo: [],
            ContactPerson: ["this is sample"],
            CustmerName: [],
            CustomerId: [0],
            CustomerMobileNo: [],
            Designation: [],
            District: [],
            GstNo: [],
            IfscCode: [],
            IsDeleted: [false],
            Location: [],
            PanNo: [],
            Pincode: [],
            State: [],
            Taluka: [],
            AccountNo: [],
            PlantAddress: [],
            MicrCode: [],
            BranchName: [],
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    CustomerInfoComponent.prototype.saveCustomer = function () {
        var _this = this;
        var customer = this.customerForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].CUSOTMER_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].CUSOTMER_API.ADD, customer)
            .subscribe(function (customer) {
            // login successful if there's a jwt token in the response
            if (customer) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(customer);
            }
            return customer;
        });
    };
    CustomerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-info',
            template: __webpack_require__(/*! ./customer-info.component.html */ "./src/app/master/customer-info/customer-info.component.html"),
            styles: [__webpack_require__(/*! ./customer-info.component.css */ "./src/app/master/customer-info/customer-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
}());



/***/ }),

/***/ "./src/app/master/customer-view/cusotmer.view.routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/master/customer-view/cusotmer.view.routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CusotomerviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusotomerviewRoutingModule", function() { return CusotomerviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-view.component */ "./src/app/master/customer-view/customer-view.component.ts");
/* harmony import */ var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-info/customer-info.component */ "./src/app/master/customer-info/customer-info.component.ts");





var routes = [
    {
        path: '',
        component: _customer_view_component__WEBPACK_IMPORTED_MODULE_3__["CustomerViewComponent"],
        data: {
            title: 'Customer view'
        }
    },
    {
        path: 'customerinfo',
        component: _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_4__["CustomerInfoComponent"],
        data: {
            title: 'customerinfo'
        }
    }
];
var CusotomerviewRoutingModule = /** @class */ (function () {
    function CusotomerviewRoutingModule() {
    }
    CusotomerviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CusotomerviewRoutingModule);
    return CusotomerviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/master/customer-view/customer-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/master/customer-view/customer-view.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1 1 auto;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2N1c3RvbWVyLXZpZXcvY3VzdG9tZXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9jdXN0b21lci12aWV3L2N1c3RvbWVyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/master/customer-view/customer-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/customer-view/customer-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/customer-view/customer-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/customer-view/customer-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function() { return CustomerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.service */ "./src/app/master/customer-view/customer.service.ts");
/* harmony import */ var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-info/customer-info.component */ "./src/app/master/customer-info/customer-info.component.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");








var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent(router, http, cusotmerService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.cusotmerService = cusotmerService;
        this.dialog = dialog;
        this.onBtnClick1 = function (param) {
            alert('i am clicked');
            console.log(param);
        };
        this.columnDefs = [
            {
                headerName: 'Button Col 1', 'width': 100,
                cellRenderer: 'buttonRenderer',
            },
            {
                headerName: 'CustomerId', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'CustomerId', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'width': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_6__["CustomerInfoComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Customer' } });
                        ref.afterClosed.subscribe(function (result) {
                            _this.RefreshGrid();
                        });
                    };
                    return newTH;
                },
            },
            //{ headerName: 'CustomerId', field: 'CustomerId' },
            { headerName: 'CustmerName ', field: 'CustmerName', 'width': 150 },
            {
                headerName: 'CustomerMobileNo', field: 'CustomerMobileNo', ' width': 150
            },
            {
                headerName: 'Address ', field: 'Address', 'width': 100
            },
            {
                headerName: 'PlantAddress    ', field: 'PlantAddress', 'width': 100
            },
            { headerName: 'State           ', field: 'State' }
        ];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].CUSOTMER_API.GETALL, httpOptions)
                .subscribe(function (customer) {
                _this.rowData = customer;
            });
        };
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        //let customer = this.customerForm.value;
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].CUSOTMER_API.GETALL, httpOptions)
            .subscribe(function (customer) {
            _this.rowData = customer;
        });
    };
    CustomerViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_6__["CustomerInfoComponent"], { modalConfig: { title: 'Add/Edit Customer' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    CustomerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-view',
            template: __webpack_require__(/*! ./customer-view.component.html */ "./src/app/master/customer-view/customer-view.component.html"),
            styles: [__webpack_require__(/*! ./customer-view.component.css */ "./src/app/master/customer-view/customer-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _customer_service__WEBPACK_IMPORTED_MODULE_5__["CusotmerService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/master/customer-view/customer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/master/customer-view/customer.module.ts ***!
  \*********************************************************/
/*! exports provided: CusotmerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusotmerModule", function() { return CusotmerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _customer_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-view.component */ "./src/app/master/customer-view/customer-view.component.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _cusotmer_view_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cusotmer.view.routing.module */ "./src/app/master/customer-view/cusotmer.view.routing.module.ts");
/* harmony import */ var _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation-border/validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony import */ var _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../customer-info/customer-info.component */ "./src/app/master/customer-info/customer-info.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer.service */ "./src/app/master/customer-view/customer.service.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");










//import { DPRService } from './dpr.service';



//import { AutoCompleteModule } from 'primeng';

var CusotmerModule = /** @class */ (function () {
    function CusotmerModule() {
    }
    CusotmerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _cusotmer_view_routing_module__WEBPACK_IMPORTED_MODULE_9__["CusotomerviewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_customer_view_component__WEBPACK_IMPORTED_MODULE_6__["CustomerViewComponent"], _customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_11__["CustomerInfoComponent"]],
            providers: [_customer_service__WEBPACK_IMPORTED_MODULE_12__["CusotmerService"]]
        })
    ], CusotmerModule);
    return CusotmerModule;
}());



/***/ }),

/***/ "./src/app/master/customer-view/customer.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/master/customer-view/customer.service.ts ***!
  \**********************************************************/
/*! exports provided: CusotmerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusotmerService", function() { return CusotmerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CusotmerService = /** @class */ (function () {
    function CusotmerService() {
    }
    CusotmerService.prototype.setData = function (customerData) {
        this.customerData = customerData;
    };
    CusotmerService.prototype.getData = function () {
        return this.customerData;
    };
    CusotmerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CusotmerService);
    return CusotmerService;
}());



/***/ })

}]);
//# sourceMappingURL=master-customer-view-customer-module.js.map