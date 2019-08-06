(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-expencetype-view-expencetype-view-module"],{

/***/ "./src/app/master/expencetype-master/expencetype-master.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/master/expencetype-master/expencetype-master.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9leHBlbmNldHlwZS1tYXN0ZXIvZXhwZW5jZXR5cGUtbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/expencetype-master/expencetype-master.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/master/expencetype-master/expencetype-master.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Expence Type Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"expencetypeForm\" (ngSubmit)=\"saveExpenceType()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>ExpenceType No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ExpenceId\" type=\"text\" pInputText id=\"expenceid\" name=\"expenceid\" class=\"form-control\" rows=\"3\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>ExpenceType Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ExpenceType\" type=\"text\" pInputText id=\"expencetype\" name=\"expencetype\" class=\"form-control\" rows=\"3\">\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/expencetype-master/expencetype-master.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/master/expencetype-master/expencetype-master.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExpencetypeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpencetypeMasterComponent", function() { return ExpencetypeMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var ExpencetypeMasterComponent = /** @class */ (function () {
    function ExpencetypeMasterComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.expencetypeForm.setValue(_this.config.data);
        };
    }
    ExpencetypeMasterComponent.prototype.ngOnInit = function () {
        this.expencetypeForm = this.formBuilder.group({
            ExpenceId: [0],
            ExpenceType: [],
            IsDeleted: [false]
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    ExpencetypeMasterComponent.prototype.saveExpenceType = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var expencetype = this.expencetypeForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EXPENCETYPE_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EXPENCETYPE_API.ADD, expencetype, httpOptions)
            .subscribe(function (expencetype) {
            // login successful if there's a jwt token in the response
            if (expencetype) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(expencetype);
            }
            return expencetype;
        });
    };
    ExpencetypeMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expencetype-master',
            template: __webpack_require__(/*! ./expencetype-master.component.html */ "./src/app/master/expencetype-master/expencetype-master.component.html"),
            styles: [__webpack_require__(/*! ./expencetype-master.component.css */ "./src/app/master/expencetype-master/expencetype-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], ExpencetypeMasterComponent);
    return ExpencetypeMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/expencetype-view/expencetype-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/master/expencetype-view/expencetype-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9leHBlbmNldHlwZS12aWV3L2V4cGVuY2V0eXBlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/expencetype-view/expencetype-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/master/expencetype-view/expencetype-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\"></div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                 class=\"ag-theme-balham\"\r\n                 [rowData]=\"rowData\"\r\n                 [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/expencetype-view/expencetype-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/expencetype-view/expencetype-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExpencetypeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpencetypeViewComponent", function() { return ExpencetypeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../expencetype-master/expencetype-master.component */ "./src/app/master/expencetype-master/expencetype-master.component.ts");
/* harmony import */ var _expencetype_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expencetype.service */ "./src/app/master/expencetype-view/expencetype.service.ts");








var ExpencetypeViewComponent = /** @class */ (function () {
    function ExpencetypeViewComponent(router, http, expencetypeservice, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.expencetypeservice = expencetypeservice;
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
                        var ref = _this.dialog.open(_expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_6__["ExpencetypeMasterComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Expence TYpe Master' } });
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
                headerName: 'Sr.No', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'ExpenceId', 'width': 150
            },
            { headerName: 'Expence Type ', field: 'ExpenceType', 'width': 400 }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EXPENCETYPE_API.GETALL, httpOptions)
                .subscribe(function (expencetype) {
                _this.rowData = expencetype;
            });
        };
    }
    ExpencetypeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EXPENCETYPE_API.GETALL, httpOptions)
            .subscribe(function (expencetype) {
            _this.rowData = expencetype;
        });
    };
    ExpencetypeViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_6__["ExpencetypeMasterComponent"], { modalConfig: { title: 'Add/Edit Expence TYpe Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    ExpencetypeViewComponent.prototype.delete = function (expencetype) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        //let customer = this.customerForm.value;
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EXPENCETYPE_API.DELETE, expencetype, httpOptions)
            .subscribe(function (expencetype) {
            _this.RefreshGrid();
        });
    };
    ExpencetypeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expencetype-view',
            template: __webpack_require__(/*! ./expencetype-view.component.html */ "./src/app/master/expencetype-view/expencetype-view.component.html"),
            styles: [__webpack_require__(/*! ./expencetype-view.component.css */ "./src/app/master/expencetype-view/expencetype-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _expencetype_service__WEBPACK_IMPORTED_MODULE_7__["ExpencetypeService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]])
    ], ExpencetypeViewComponent);
    return ExpencetypeViewComponent;
}());



/***/ }),

/***/ "./src/app/master/expencetype-view/expencetype.view.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/master/expencetype-view/expencetype.view.module.ts ***!
  \********************************************************************/
/*! exports provided: ExpencetypeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpencetypeViewModule", function() { return ExpencetypeViewModule; });
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
/* harmony import */ var _expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../expencetype-master/expencetype-master.component */ "./src/app/master/expencetype-master/expencetype-master.component.ts");
/* harmony import */ var _expencetype_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expencetype-view.component */ "./src/app/master/expencetype-view/expencetype-view.component.ts");
/* harmony import */ var _expencetype_view_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./expencetype.view.routing.module */ "./src/app/master/expencetype-view/expencetype.view.routing.module.ts");
/* harmony import */ var _expencetype_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./expencetype.service */ "./src/app/master/expencetype-view/expencetype.service.ts");









//import { AutoCompleteModule } from 'primeng';





var ExpencetypeViewModule = /** @class */ (function () {
    function ExpencetypeViewModule() {
    }
    ExpencetypeViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _expencetype_view_routing_module__WEBPACK_IMPORTED_MODULE_12__["ExpencetypeViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_expencetype_view_component__WEBPACK_IMPORTED_MODULE_11__["ExpencetypeViewComponent"], _expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_10__["ExpencetypeMasterComponent"]],
            providers: [_expencetype_service__WEBPACK_IMPORTED_MODULE_13__["ExpencetypeService"]]
        })
    ], ExpencetypeViewModule);
    return ExpencetypeViewModule;
}());



/***/ }),

/***/ "./src/app/master/expencetype-view/expencetype.view.routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/master/expencetype-view/expencetype.view.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExpencetypeViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpencetypeViewRoutingModule", function() { return ExpencetypeViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expencetype-master/expencetype-master.component */ "./src/app/master/expencetype-master/expencetype-master.component.ts");
/* harmony import */ var _expencetype_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expencetype-view.component */ "./src/app/master/expencetype-view/expencetype-view.component.ts");





var routes = [
    {
        path: '',
        component: _expencetype_view_component__WEBPACK_IMPORTED_MODULE_4__["ExpencetypeViewComponent"],
        data: {
            title: 'Expencetye View'
        }
    },
    {
        path: 'expencetypemaster',
        component: _expencetype_master_expencetype_master_component__WEBPACK_IMPORTED_MODULE_3__["ExpencetypeMasterComponent"],
        data: {
            title: 'Expence Type'
        }
    }
];
var ExpencetypeViewRoutingModule = /** @class */ (function () {
    function ExpencetypeViewRoutingModule() {
    }
    ExpencetypeViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExpencetypeViewRoutingModule);
    return ExpencetypeViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-expencetype-view-expencetype-view-module.js.map