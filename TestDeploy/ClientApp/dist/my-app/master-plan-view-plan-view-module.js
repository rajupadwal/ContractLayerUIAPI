(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-plan-view-plan-view-module"],{

/***/ "./src/app/master/plan-master/plan-master.component.css":
/*!**************************************************************!*\
  !*** ./src/app/master/plan-master/plan-master.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wbGFuLW1hc3Rlci9wbGFuLW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/plan-master/plan-master.component.html":
/*!***************************************************************!*\
  !*** ./src/app/master/plan-master/plan-master.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Plan Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"planmasterForm\" (ngSubmit)=\"savePlanMaster()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Plan Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PlanName\" type=\"text\" pInputText id=\"planname\" name=\"planname\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Plan Name </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Chicks Age In Days:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ChickAgeInDays\" type=\"text\" pInputText id=\"chickageindays\" name=\"chickageindays\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Chicks Age In Days </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Duration In Days:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"DurationInDays\" type=\"text\" pInputText id=\"durationindays\" name=\"durationindays \" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Duration In Days </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>No Of Chicks :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"NoOfChicks\" type=\"text\" pInputText id=\"noofchicks\" name=\"noofchicks\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter No Of Chicks </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Eggs Return:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EggsReturn\" type=\"text\" pInputText id=\"eggsreturn\" name=\"eggsreturn\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Eggs Return </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Chicks Return Rate :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ChicksReturnRate\" type=\"text\" pInputText id=\"chicksreturnrate\" name=\"chicksreturnrate \" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Chicks Return Rate </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Amount :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Amount\" type=\"text\" pInputText id=\"amount\" name=\"amount\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Amount </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Admin Charges:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AdminCharges\" type=\"text\" pInputText id=\"admincharges\" name=\"admincharges\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Admin Charges </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/plan-master/plan-master.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/master/plan-master/plan-master.component.ts ***!
  \*************************************************************/
/*! exports provided: PlanMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanMasterComponent", function() { return PlanMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var PlanMasterComponent = /** @class */ (function () {
    function PlanMasterComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.planmasterForm.setValue(_this.config.data);
        };
    }
    PlanMasterComponent.prototype.ngOnInit = function () {
        this.planmasterForm = this.formBuilder.group({
            PlanId: [0],
            PlanName: [],
            ChickAgeInDays: [],
            DurationInDays: [],
            NoOfChicks: [],
            EggsReturn: [],
            ChicksReturnRate: [],
            Amount: [],
            AdminCharges: []
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    PlanMasterComponent.prototype.savePlanMaster = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var planmaster = this.planmasterForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PLAN_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PLAN_API.ADD, planmaster, httpOptions)
            .subscribe(function (planmaster) {
            // login successful if there's a jwt token in the response
            if (planmaster) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(planmaster);
            }
            return planmaster;
        });
    };
    PlanMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-master',
            template: __webpack_require__(/*! ./plan-master.component.html */ "./src/app/master/plan-master/plan-master.component.html"),
            styles: [__webpack_require__(/*! ./plan-master.component.css */ "./src/app/master/plan-master/plan-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], PlanMasterComponent);
    return PlanMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/plan-view/plan-view.component.css":
/*!**********************************************************!*\
  !*** ./src/app/master/plan-view/plan-view.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wbGFuLXZpZXcvcGxhbi12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/plan-view/plan-view.component.html":
/*!***********************************************************!*\
  !*** ./src/app/master/plan-view/plan-view.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/plan-view/plan-view.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/master/plan-view/plan-view.component.ts ***!
  \*********************************************************/
/*! exports provided: PlanViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanViewComponent", function() { return PlanViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan.service */ "./src/app/master/plan-view/plan.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plan-master/plan-master.component */ "./src/app/master/plan-master/plan-master.component.ts");








var PlanViewComponent = /** @class */ (function () {
    function PlanViewComponent(router, http, planservice, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.planservice = planservice;
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
                headerName: 'PlanId', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'PlanId', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'width': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_7__["PlanMasterComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Plan Master' } });
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
            { headerName: 'PlanName ', field: 'PlanName', 'width': 150 },
            {
                headerName: 'ChickAgeInDays', field: 'ChickAgeInDays', ' width': 150
            },
            {
                headerName: 'DurationInDays ', field: 'DurationInDays', 'width': 100
            },
            {
                headerName: 'NoOfChicks    ', field: 'NoOfChicks', 'width': 100
            },
            { headerName: 'EggsReturn           ', field: 'EggsReturn', 'width': 100 },
            {
                headerName: 'ChicksReturnRate ', field: 'ChicksReturnRate', 'width': 100
            },
            {
                headerName: 'Amount    ', field: 'Amount', 'width': 100
            },
            { headerName: 'AdminCharges           ', field: 'AdminCharges', 'width': 100 }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PLAN_API.GETALL, httpOptions)
                .subscribe(function (plan) {
                _this.rowData = plan;
            });
        };
    }
    PlanViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PLAN_API.GETALL, httpOptions)
            .subscribe(function (plan) {
            _this.rowData = plan;
        });
    };
    PlanViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_7__["PlanMasterComponent"], { modalConfig: { title: 'Add/Edit Plan Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    PlanViewComponent.prototype.delete = function (plan) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        //let customer = this.customerForm.value;
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PLAN_API.DELETE, plan, httpOptions)
            .subscribe(function (plan) {
            _this.RefreshGrid();
        });
    };
    PlanViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plan-view',
            template: __webpack_require__(/*! ./plan-view.component.html */ "./src/app/master/plan-view/plan-view.component.html"),
            styles: [__webpack_require__(/*! ./plan-view.component.css */ "./src/app/master/plan-view/plan-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _plan_service__WEBPACK_IMPORTED_MODULE_5__["PlanService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], PlanViewComponent);
    return PlanViewComponent;
}());



/***/ }),

/***/ "./src/app/master/plan-view/plan.service.ts":
/*!**************************************************!*\
  !*** ./src/app/master/plan-view/plan.service.ts ***!
  \**************************************************/
/*! exports provided: PlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanService", function() { return PlanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlanService = /** @class */ (function () {
    function PlanService() {
    }
    PlanService.prototype.setData = function (planData) {
        this.planData = planData;
    };
    PlanService.prototype.getData = function () {
        return this.planData;
    };
    PlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlanService);
    return PlanService;
}());



/***/ }),

/***/ "./src/app/master/plan-view/plan.view.module.ts":
/*!******************************************************!*\
  !*** ./src/app/master/plan-view/plan.view.module.ts ***!
  \******************************************************/
/*! exports provided: PlanViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanViewModule", function() { return PlanViewModule; });
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
/* harmony import */ var _plan_view_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan.view.routing.module */ "./src/app/master/plan-view/plan.view.routing.module.ts");
/* harmony import */ var _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../validation-border/validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plan.service */ "./src/app/master/plan-view/plan.service.ts");
/* harmony import */ var _plan_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plan-view.component */ "./src/app/master/plan-view/plan-view.component.ts");
/* harmony import */ var _plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../plan-master/plan-master.component */ "./src/app/master/plan-master/plan-master.component.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");









//import { DPRService } from './dpr.service';




//import { AutoCompleteModule } from 'primeng';

var PlanViewModule = /** @class */ (function () {
    function PlanViewModule() {
    }
    PlanViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _plan_view_routing_module__WEBPACK_IMPORTED_MODULE_8__["PlanViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_9__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_plan_view_component__WEBPACK_IMPORTED_MODULE_11__["PlanViewComponent"], _plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_12__["PlanMasterComponent"]],
            providers: [_plan_service__WEBPACK_IMPORTED_MODULE_10__["PlanService"]]
        })
    ], PlanViewModule);
    return PlanViewModule;
}());

//providers: [DPRService]


/***/ }),

/***/ "./src/app/master/plan-view/plan.view.routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/master/plan-view/plan.view.routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PlanViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanViewRoutingModule", function() { return PlanViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plan_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-view.component */ "./src/app/master/plan-view/plan-view.component.ts");
/* harmony import */ var _plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plan-master/plan-master.component */ "./src/app/master/plan-master/plan-master.component.ts");





var routes = [
    {
        path: '',
        component: _plan_view_component__WEBPACK_IMPORTED_MODULE_3__["PlanViewComponent"],
        data: {
            title: 'Plan View'
        }
    },
    {
        path: 'planmaster',
        component: _plan_master_plan_master_component__WEBPACK_IMPORTED_MODULE_4__["PlanMasterComponent"],
        data: {
            title: 'planmaster'
        }
    }
];
var PlanViewRoutingModule = /** @class */ (function () {
    function PlanViewRoutingModule() {
    }
    PlanViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PlanViewRoutingModule);
    return PlanViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-plan-view-plan-view-module.js.map