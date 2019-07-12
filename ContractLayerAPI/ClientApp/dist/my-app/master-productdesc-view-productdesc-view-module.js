(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-productdesc-view-productdesc-view-module"],{

/***/ "./src/app/master/productdesc-master/productdesc-master.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/master/productdesc-master/productdesc-master.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wcm9kdWN0ZGVzYy1tYXN0ZXIvcHJvZHVjdGRlc2MtbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/productdesc-master/productdesc-master.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/master/productdesc-master/productdesc-master.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Product Description Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"productdescmasterForm\" (ngSubmit)=\"saveProductdescMaster()\">\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group\">\r\n          <label for=\"textarea-input\"><strong>Product Name:</strong></label>\r\n          <div>\r\n            <span class=\"ui-float-label\">\r\n              <input formControlName=\"ProductName\" type=\"text\" pInputText id=\"productname\" name=\"productname\" class=\"form-control\" rows=\"3\">\r\n              <!--<label for=\"float-input\">Please Enter Product Name </label>-->\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/productdesc-master/productdesc-master.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/master/productdesc-master/productdesc-master.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductdescMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdescMasterComponent", function() { return ProductdescMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var ProductdescMasterComponent = /** @class */ (function () {
    function ProductdescMasterComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.productdescmasterForm.setValue(_this.config.data);
        };
    }
    ProductdescMasterComponent.prototype.ngOnInit = function () {
        this.productdescmasterForm = this.formBuilder.group({
            ProductId: [0],
            ProductName: []
            //IsDeleted    : [false]
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    ProductdescMasterComponent.prototype.saveProductdescMaster = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var productdescmaster = this.productdescmasterForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCTDESC_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCTDESC_API.ADD, productdescmaster, httpOptions)
            .subscribe(function (productdescmaster) {
            // login successful if there's a jwt token in the response
            if (productdescmaster) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(productdescmaster);
            }
            return productdescmaster;
        });
    };
    ProductdescMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdesc-master',
            template: __webpack_require__(/*! ./productdesc-master.component.html */ "./src/app/master/productdesc-master/productdesc-master.component.html"),
            styles: [__webpack_require__(/*! ./productdesc-master.component.css */ "./src/app/master/productdesc-master/productdesc-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], ProductdescMasterComponent);
    return ProductdescMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/productdesc-view/productdesc-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/master/productdesc-view/productdesc-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wcm9kdWN0ZGVzYy12aWV3L3Byb2R1Y3RkZXNjLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/productdesc-view/productdesc-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/master/productdesc-view/productdesc-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/productdesc-view/productdesc-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/productdesc-view/productdesc-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductdescViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdescViewComponent", function() { return ProductdescViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _productdesc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productdesc.service */ "./src/app/master/productdesc-view/productdesc.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../productdesc-master/productdesc-master.component */ "./src/app/master/productdesc-master/productdesc-master.component.ts");








var ProductdescViewComponent = /** @class */ (function () {
    function ProductdescViewComponent(router, http, productdescService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.productdescService = productdescService;
        this.dialog = dialog;
        this.onBtnClick1 = function (param) {
            alert('i am clicked');
            console.log(param);
        };
        this.columnDefs = [
            {
                headerName: 'Button Col 1', 'width': 100,
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                    onClick: this.onBtnClick1.bind(this),
                    label: 'Click 1'
                }
            },
            {
                headerName: 'ProductId', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'ProductId', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'widht': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_7__["ProductdescMasterComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Product Description Master' } });
                        ref.afterClosed.subscribe(function (result) {
                            _this.RefreshGrid();
                        });
                    };
                    return newTH;
                },
            },
            {
                headerName: 'Delete', 'width': 150,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = 'Delete';
                    newTH.className = "pi pi-times";
                    newTH.onclick = function () {
                        _this.delete(params.data);
                    };
                    return newTH;
                },
            },
            { headerName: 'ProductName ', field: 'ProductName', 'width': 150 }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCTDESC_API.GETALL, httpOptions)
                .subscribe(function (productdesc) {
                _this.rowData = productdesc;
            });
        };
    }
    ProductdescViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCTDESC_API.GETALL, httpOptions)
            .subscribe(function (productdesc) {
            _this.rowData = productdesc;
        });
    };
    ProductdescViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_7__["ProductdescMasterComponent"], { modalConfig: { title: 'Add/Edit Product Description Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    ProductdescViewComponent.prototype.delete = function (productdesc) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCTDESC_API.DELETE, productdesc, httpOptions)
            .subscribe(function (productdesc) {
            _this.RefreshGrid();
        });
    };
    ProductdescViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdesc-view',
            template: __webpack_require__(/*! ./productdesc-view.component.html */ "./src/app/master/productdesc-view/productdesc-view.component.html"),
            styles: [__webpack_require__(/*! ./productdesc-view.component.css */ "./src/app/master/productdesc-view/productdesc-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _productdesc_service__WEBPACK_IMPORTED_MODULE_5__["ProductdescService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], ProductdescViewComponent);
    return ProductdescViewComponent;
}());



/***/ }),

/***/ "./src/app/master/productdesc-view/productdesc.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/master/productdesc-view/productdesc.service.ts ***!
  \****************************************************************/
/*! exports provided: ProductdescService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdescService", function() { return ProductdescService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductdescService = /** @class */ (function () {
    function ProductdescService() {
    }
    ProductdescService.prototype.setData = function (productdescData) {
        this.productdescData = productdescData;
    };
    ProductdescService.prototype.getData = function () {
        return this.productdescData;
    };
    ProductdescService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductdescService);
    return ProductdescService;
}());



/***/ }),

/***/ "./src/app/master/productdesc-view/productdesc.view.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/master/productdesc-view/productdesc.view.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductdescViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdescViewModule", function() { return ProductdescViewModule; });
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
/* harmony import */ var _productdesc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productdesc.service */ "./src/app/master/productdesc-view/productdesc.service.ts");
/* harmony import */ var _productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../productdesc-master/productdesc-master.component */ "./src/app/master/productdesc-master/productdesc-master.component.ts");
/* harmony import */ var _productdesc_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productdesc-view.component */ "./src/app/master/productdesc-view/productdesc-view.component.ts");
/* harmony import */ var _productdesc_view_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./productdesc.view.routing.module */ "./src/app/master/productdesc-view/productdesc.view.routing.module.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");













//import { AutoCompleteModule } from 'primeng';

var ProductdescViewModule = /** @class */ (function () {
    function ProductdescViewModule() {
    }
    ProductdescViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _productdesc_view_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProductdescViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_productdesc_view_component__WEBPACK_IMPORTED_MODULE_11__["ProductdescViewComponent"], _productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_10__["ProductdescMasterComponent"]],
            providers: [_productdesc_service__WEBPACK_IMPORTED_MODULE_9__["ProductdescService"]]
        })
    ], ProductdescViewModule);
    return ProductdescViewModule;
}());



/***/ }),

/***/ "./src/app/master/productdesc-view/productdesc.view.routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/master/productdesc-view/productdesc.view.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductdescViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdescViewRoutingModule", function() { return ProductdescViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productdesc-master/productdesc-master.component */ "./src/app/master/productdesc-master/productdesc-master.component.ts");
/* harmony import */ var _productdesc_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productdesc-view.component */ "./src/app/master/productdesc-view/productdesc-view.component.ts");





var routes = [
    {
        path: '',
        component: _productdesc_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductdescViewComponent"],
        data: {
            title: 'Product Desc View'
        }
    },
    {
        path: 'productdescmaster',
        component: _productdesc_master_productdesc_master_component__WEBPACK_IMPORTED_MODULE_3__["ProductdescMasterComponent"],
        data: {
            title: 'Product Desc Master'
        }
    }
];
var ProductdescViewRoutingModule = /** @class */ (function () {
    function ProductdescViewRoutingModule() {
    }
    ProductdescViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductdescViewRoutingModule);
    return ProductdescViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-productdesc-view-productdesc-view-module.js.map