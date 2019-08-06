(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-product-view-product-view-module"],{

/***/ "./src/app/master/product-master/product-master.component.css":
/*!********************************************************************!*\
  !*** ./src/app/master/product-master/product-master.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wcm9kdWN0LW1hc3Rlci9wcm9kdWN0LW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/product-master/product-master.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/master/product-master/product-master.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Product Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"productForm\" (ngSubmit)=\"saveProduct()\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Product Name :</strong></label>\r\n              <p-autoComplete formControlName=\"Product\" [suggestions]=\"productList\" (completeMethod)=\"searchProduct($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"ProductName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Product Type :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ProductType\" type=\"text\" pInputText id=\"producttype\" name=\"producttype\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter Product Type  </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>HSNSAC Code :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Hsnsac\" type=\"text\" pInputText id=\"hsnsac\" name=\"hsnsac\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter HSNSAC Code</label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Unit :</strong></label>\r\n              <p-autoComplete formControlName=\"Unit\" [suggestions]=\"unitList\" (completeMethod)=\"searchUnit($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"UnitDescription\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Purchase Price:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PurchasePrice\" type=\"text\" pInputText id=\"purchaseprice\" name=\"purchaseprice\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter Purchase Price  </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Selling Price:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"SellingPrice\" type=\"text\" pInputText id=\"sellingprice\" name=\"sellingprice\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter Selling Price  </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>CGST :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Cgst\" type=\"text\" pInputText id=\"cgst\" name=\"cgst\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter CGST  </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>SGST :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Sgst\" type=\"text\" pInputText id=\"sgst\" name=\"sgst\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter SGST  </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>IGST :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Igst\" type=\"text\" pInputText id=\"igst\" name=\"igst\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter IGST  </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Minimum Quantity:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"MinimumQty\" id=\"minimumqty\" name=\"minimumqty\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Minimum Qty) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Opening Stock :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"OpeningStock\" id=\"openingstock\" name=\"openingstock\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Please Enter OpeningStock) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/product-master/product-master.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/master/product-master/product-master.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMasterComponent", function() { return ProductMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _product_view_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-view/product.service */ "./src/app/master/product-view/product.service.ts");
/* harmony import */ var _productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../productdesc-view/productdesc.service */ "./src/app/master/productdesc-view/productdesc.service.ts");










var ProductMasterComponent = /** @class */ (function () {
    function ProductMasterComponent(router, formBuilder, http, config, dialog, productdescservice, productservice) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.productdescservice = productdescservice;
        this.productservice = productservice;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.productForm.setValue(_this.config.data);
        };
    }
    ProductMasterComponent.prototype.ngOnInit = function () {
        this.productForm = this.formBuilder.group({
            PkId: [0],
            Product: [{}],
            ProductType: [],
            Hsnsac: [],
            Unit: [{}],
            PurchasePrice: [],
            SellingPrice: [],
            Cgst: [],
            Sgst: [],
            Igst: [],
            MinimumQty: [],
            OpeningStock: [],
            ProductId: [],
            UnitId: []
        });
        if (this.config.data)
            this.getProduct(this.config.data.ProductId);
        this.getUnit(this.config.data.UnitId);
        this.setDataForEdit();
    };
    ProductMasterComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productdescservice.getProductByID(id).subscribe(function (product) {
            _this.productForm.patchValue({ Product: product });
        });
    };
    ProductMasterComponent.prototype.searchProduct = function (event) {
        var _this = this;
        this.productdescservice.searchProduct(event.query).subscribe(function (data) {
            _this.productList = data;
        });
    };
    ProductMasterComponent.prototype.getUnit = function (id) {
        var _this = this;
        this.productservice.getUnitByID(id).subscribe(function (unit) {
            _this.productForm.patchValue({ Unit: unit });
        });
    };
    ProductMasterComponent.prototype.searchUnit = function (event) {
        var _this = this;
        this.productservice.searchUnit(event.query).subscribe(function (data) {
            _this.unitList = data;
        });
    };
    ProductMasterComponent.prototype.saveProduct = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var product = this.productForm.value;
        // customer.LocationId = customer.Location.LocationId;
        //product.ProductId = product.ProductName.ProductId;
        product.ProductId = product.Product.ProductId;
        product.UnitId = product.Unit.UnitId;
        delete product.Product;
        delete product.Unit;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCT_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCT_API.ADD, product, httpOptions)
            .subscribe(function (product) {
            // login successful if there's a jwt token in the response
            if (product) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(product);
            }
            return product;
        });
    };
    ProductMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-master',
            template: __webpack_require__(/*! ./product-master.component.html */ "./src/app/master/product-master/product-master.component.html"),
            styles: [__webpack_require__(/*! ./product-master.component.css */ "./src/app/master/product-master/product-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"], _productdesc_view_productdesc_service__WEBPACK_IMPORTED_MODULE_9__["ProductdescService"], _product_view_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], ProductMasterComponent);
    return ProductMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/product-view/product-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/master/product-view/product-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wcm9kdWN0LXZpZXcvcHJvZHVjdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/product-view/product-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/master/product-view/product-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/product-view/product-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/master/product-view/product-view.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewComponent", function() { return ProductViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.service */ "./src/app/master/product-view/product.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _product_master_product_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-master/product-master.component */ "./src/app/master/product-master/product-master.component.ts");








var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(router, http, productService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.productService = productService;
        this.dialog = dialog;
        this.onBtnClick1 = function (param) {
            alert('i am clicked');
            console.log(param);
        };
        this.columnDefs = [
            //{
            //  headerName: 'Button Col 1', 'width':100,
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
                        var ref = _this.dialog.open(_product_master_product_master_component__WEBPACK_IMPORTED_MODULE_7__["ProductMasterComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Product Details Master' } });
                        ref.afterClosed.subscribe(function (result) {
                            _this.RefreshGrid();
                        });
                    };
                    return newTH;
                },
            },
            {
                headerName: 'Delete', 'width': 100,
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
            {
                headerName: 'SrNo', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'PkId', 'width': 50
            },
            { headerName: 'Product Name ', field: 'Product.ProductName', 'width': 100 },
            {
                headerName: 'ProductType', field: 'ProductType', ' width': 100
            },
            {
                headerName: 'HSNSAC ', field: 'Hsnsac', 'width': 100
            },
            {
                headerName: 'Unit ', field: 'Unit.UnitDescription', 'width': 100
            },
            { headerName: 'PurchasePrice', field: 'PurchasePrice', 'width': 100 },
            {
                headerName: 'SellingPrice ', field: 'SellingPrice', 'width': 100
            },
            {
                headerName: 'CGST ', field: 'Cgst', 'width': 100
            },
            { headerName: 'SGST', field: 'Sgst', 'width': 100 },
            {
                headerName: 'IGST ', field: 'Igst', 'width': 100
            },
            {
                headerName: 'MinimumQty ', field: 'MinimumQty', 'width': 100
            },
            { headerName: 'OpeningStock', field: 'OpeningStock', 'width': 100 },
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCT_API.GETALL, httpOptions)
                .subscribe(function (product) {
                _this.rowData = product;
            });
        };
    }
    ProductViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCT_API.GETALL, httpOptions)
            .subscribe(function (product) {
            _this.rowData = product;
        });
    };
    ProductViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_product_master_product_master_component__WEBPACK_IMPORTED_MODULE_7__["ProductMasterComponent"], { modalConfig: { title: 'Add/Edit Product Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    ProductViewComponent.prototype.delete = function (product) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PRODUCT_API.DELETE, product, httpOptions)
            .subscribe(function (product) {
            _this.RefreshGrid();
        });
    };
    ProductViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__(/*! ./product-view.component.html */ "./src/app/master/product-view/product-view.component.html"),
            styles: [__webpack_require__(/*! ./product-view.component.css */ "./src/app/master/product-view/product-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "./src/app/master/product-view/product.view.module.ts":
/*!************************************************************!*\
  !*** ./src/app/master/product-view/product.view.module.ts ***!
  \************************************************************/
/*! exports provided: ProductViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewModule", function() { return ProductViewModule; });
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
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product.service */ "./src/app/master/product-view/product.service.ts");
/* harmony import */ var _product_master_product_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-master/product-master.component */ "./src/app/master/product-master/product-master.component.ts");
/* harmony import */ var _product_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-view.component */ "./src/app/master/product-view/product-view.component.ts");
/* harmony import */ var _product_view_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product.view.routing.module */ "./src/app/master/product-view/product.view.routing.module.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");













//import { AutoCompleteModule } from 'primeng';

var ProductViewModule = /** @class */ (function () {
    function ProductViewModule() {
    }
    ProductViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _product_view_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProductViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_product_view_component__WEBPACK_IMPORTED_MODULE_11__["ProductViewComponent"], _product_master_product_master_component__WEBPACK_IMPORTED_MODULE_10__["ProductMasterComponent"]],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]]
        })
    ], ProductViewModule);
    return ProductViewModule;
}());



/***/ }),

/***/ "./src/app/master/product-view/product.view.routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/master/product-view/product.view.routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewRoutingModule", function() { return ProductViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_master_product_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-master/product-master.component */ "./src/app/master/product-master/product-master.component.ts");
/* harmony import */ var _product_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-view.component */ "./src/app/master/product-view/product-view.component.ts");





var routes = [
    {
        path: '',
        component: _product_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductViewComponent"],
        data: {
            title: 'Product view'
        }
    },
    {
        path: 'productmaster',
        component: _product_master_product_master_component__WEBPACK_IMPORTED_MODULE_3__["ProductMasterComponent"],
        data: {
            title: 'Product Master'
        }
    }
];
var ProductViewRoutingModule = /** @class */ (function () {
    function ProductViewRoutingModule() {
    }
    ProductViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductViewRoutingModule);
    return ProductViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-product-view-product-view-module.js.map