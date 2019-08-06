(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-eggsrange-view-eggsrange-view-module"],{

/***/ "./src/app/master/eggsrange-master/eggsrange-master.component.css":
/*!************************************************************************!*\
  !*** ./src/app/master/eggsrange-master/eggsrange-master.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9lZ2dzcmFuZ2UtbWFzdGVyL2VnZ3NyYW5nZS1tYXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/eggsrange-master/eggsrange-master.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/master/eggsrange-master/eggsrange-master.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Eggs Range Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"eggsrangemasterForm\" (ngSubmit)=\"saveEggsrangeMaster()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>No. Of Eggs From:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EggsRangeFrom\" id=\"eggsrangefrom\" name=\"eggsrangefrom\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Pan Card No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>No. Of Eggs To:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EggsRangeTo\" id=\"eggsrangeto\" name=\"eggsrangeto\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Pan Card No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Eggs Rate:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EggsRate\" id=\"eggsrate\" name=\"eggsrate\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Please Enter Voter Id) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/eggsrange-master/eggsrange-master.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/eggsrange-master/eggsrange-master.component.ts ***!
  \***********************************************************************/
/*! exports provided: EggsrangeMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggsrangeMasterComponent", function() { return EggsrangeMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var EggsrangeMasterComponent = /** @class */ (function () {
    function EggsrangeMasterComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.eggsrangemasterForm.setValue(_this.config.data);
        };
    }
    EggsrangeMasterComponent.prototype.ngOnInit = function () {
        this.eggsrangemasterForm = this.formBuilder.group({
            EggsRangeCode: [0],
            EggsRangeFrom: [],
            EggsRangeTo: [],
            EggsRate: []
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    EggsrangeMasterComponent.prototype.saveEggsrangeMaster = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var eggsrangemaster = this.eggsrangemasterForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EGGSRANGE_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EGGSRANGE_API.ADD, eggsrangemaster, httpOptions)
            .subscribe(function (eggsrangemaster) {
            // login successful if there's a jwt token in the response
            if (eggsrangemaster) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(eggsrangemaster);
            }
            return eggsrangemaster;
        });
    };
    EggsrangeMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eggsrange-master',
            template: __webpack_require__(/*! ./eggsrange-master.component.html */ "./src/app/master/eggsrange-master/eggsrange-master.component.html"),
            styles: [__webpack_require__(/*! ./eggsrange-master.component.css */ "./src/app/master/eggsrange-master/eggsrange-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], EggsrangeMasterComponent);
    return EggsrangeMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/eggsrange-view/eggsrange-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/master/eggsrange-view/eggsrange-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9lZ2dzcmFuZ2Utdmlldy9lZ2dzcmFuZ2Utdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/eggsrange-view/eggsrange-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/master/eggsrange-view/eggsrange-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/eggsrange-view/eggsrange-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/master/eggsrange-view/eggsrange-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: EggsrangeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggsrangeViewComponent", function() { return EggsrangeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../eggsrange-master/eggsrange-master.component */ "./src/app/master/eggsrange-master/eggsrange-master.component.ts");
/* harmony import */ var _eggsrange_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eggsrange.service */ "./src/app/master/eggsrange-view/eggsrange.service.ts");








var EggsrangeViewComponent = /** @class */ (function () {
    function EggsrangeViewComponent(router, http, eggsrangeService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.eggsrangeService = eggsrangeService;
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
                        var ref = _this.dialog.open(_eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_6__["EggsrangeMasterComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Eggs Range Master' } });
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
                headerName: 'Sr No', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'EggsRangeCode', 'width': 150
            },
            { headerName: 'EggsRangeFrom ', field: 'EggsRangeFrom', 'width': 150 },
            { headerName: 'EggsRangeTo ', field: 'EggsRangeTo', 'width': 150 },
            { headerName: 'EggsRate ', field: 'EggsRate', 'width': 150 },
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EGGSRANGE_API.GETALL, httpOptions)
                .subscribe(function (eggsrange) {
                _this.rowData = eggsrange;
            });
        };
    }
    EggsrangeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EGGSRANGE_API.GETALL, httpOptions)
            .subscribe(function (eggsrange) {
            _this.rowData = eggsrange;
        });
    };
    EggsrangeViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_6__["EggsrangeMasterComponent"], { modalConfig: { title: 'Add/Edit Eggs Range Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    EggsrangeViewComponent.prototype.delete = function (eggsrange) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EGGSRANGE_API.DELETE, eggsrange, httpOptions)
            .subscribe(function (eggsrange) {
            _this.RefreshGrid();
        });
    };
    EggsrangeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eggsrange-view',
            template: __webpack_require__(/*! ./eggsrange-view.component.html */ "./src/app/master/eggsrange-view/eggsrange-view.component.html"),
            styles: [__webpack_require__(/*! ./eggsrange-view.component.css */ "./src/app/master/eggsrange-view/eggsrange-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _eggsrange_service__WEBPACK_IMPORTED_MODULE_7__["EggsrangeService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]])
    ], EggsrangeViewComponent);
    return EggsrangeViewComponent;
}());



/***/ }),

/***/ "./src/app/master/eggsrange-view/eggsrange.service.ts":
/*!************************************************************!*\
  !*** ./src/app/master/eggsrange-view/eggsrange.service.ts ***!
  \************************************************************/
/*! exports provided: EggsrangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggsrangeService", function() { return EggsrangeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EggsrangeService = /** @class */ (function () {
    function EggsrangeService() {
    }
    EggsrangeService.prototype.setData = function (eggsrangeData) {
        this.eggsrangeData = eggsrangeData;
    };
    EggsrangeService.prototype.getData = function () {
        return this.eggsrangeData;
    };
    EggsrangeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EggsrangeService);
    return EggsrangeService;
}());



/***/ }),

/***/ "./src/app/master/eggsrange-view/eggsrange.view.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/master/eggsrange-view/eggsrange.view.module.ts ***!
  \****************************************************************/
/*! exports provided: EggsrangeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggsrangeViewModule", function() { return EggsrangeViewModule; });
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
/* harmony import */ var _eggsrange_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eggsrange-view.component */ "./src/app/master/eggsrange-view/eggsrange-view.component.ts");
/* harmony import */ var _eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../eggsrange-master/eggsrange-master.component */ "./src/app/master/eggsrange-master/eggsrange-master.component.ts");
/* harmony import */ var _eggsrange_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./eggsrange.service */ "./src/app/master/eggsrange-view/eggsrange.service.ts");
/* harmony import */ var _eggsrange_view_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eggsrange.view.routing.module */ "./src/app/master/eggsrange-view/eggsrange.view.routing.module.ts");









//import { AutoCompleteModule } from 'primeng';





var EggsrangeViewModule = /** @class */ (function () {
    function EggsrangeViewModule() {
    }
    EggsrangeViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _eggsrange_view_routing_module__WEBPACK_IMPORTED_MODULE_13__["EggsrangeViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_eggsrange_view_component__WEBPACK_IMPORTED_MODULE_10__["EggsrangeViewComponent"], _eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_11__["EggsrangeMasterComponent"]],
            providers: [_eggsrange_service__WEBPACK_IMPORTED_MODULE_12__["EggsrangeService"]]
        })
    ], EggsrangeViewModule);
    return EggsrangeViewModule;
}());



/***/ }),

/***/ "./src/app/master/eggsrange-view/eggsrange.view.routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/master/eggsrange-view/eggsrange.view.routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EggsrangeViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggsrangeViewRoutingModule", function() { return EggsrangeViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eggsrange-master/eggsrange-master.component */ "./src/app/master/eggsrange-master/eggsrange-master.component.ts");
/* harmony import */ var _eggsrange_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eggsrange-view.component */ "./src/app/master/eggsrange-view/eggsrange-view.component.ts");





var routes = [
    {
        path: '',
        component: _eggsrange_view_component__WEBPACK_IMPORTED_MODULE_4__["EggsrangeViewComponent"],
        data: {
            title: 'Eggs Range View'
        }
    },
    {
        path: 'eggsrangemaster',
        component: _eggsrange_master_eggsrange_master_component__WEBPACK_IMPORTED_MODULE_3__["EggsrangeMasterComponent"],
        data: {
            title: 'Eggs Range Master'
        }
    }
];
var EggsrangeViewRoutingModule = /** @class */ (function () {
    function EggsrangeViewRoutingModule() {
    }
    EggsrangeViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EggsrangeViewRoutingModule);
    return EggsrangeViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-eggsrange-view-eggsrange-view-module.js.map