(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-location-view-location-view-module"],{

/***/ "./src/app/master/location-info/location-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/master/location-info/location-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-addon, .input-group-btn {\r\n  min-width: 40px;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2xvY2F0aW9uLWluZm8vbG9jYXRpb24taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2xvY2F0aW9uLWluZm8vbG9jYXRpb24taW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwLWFkZG9uLCAuaW5wdXQtZ3JvdXAtYnRuIHtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/master/location-info/location-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/location-info/location-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Location Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"locationForm\" (ngSubmit)=\"savelocation()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Location Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"LocationName\" type=\"text\" pInputText id=\"LocationName\" name=\"LocationName\" class=\"form-control\" rows=\"3\">\r\n                  <label for=\"float-input\">Please Enter Location Name </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location Code :</strong></label>\r\n              <select formControlName=\"LocationCode\" id=\"locationcode\" name=\"locationcode\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Satara</option>\r\n                <option value=\"2\">Sangali </option>\r\n                <option value=\"3\">Kolhapur </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Address Details:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <textarea formControlName=\"Address\" id=\"textarea-input\" name=\"textarea-input\" rows=\"2\" class=\"form-control\"></textarea>\r\n                  <label for=\"float-input\">Enter  Address Details.. </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Location Pin Code:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PinCode\" type=\"text\" pInputText id=\"pincode\" name=\"pincode\" class=\"form-control\" rows=\"3\">\r\n                  <label for=\"float-input\">Please Enter Location Pin Code </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n\r\n              <label for=\"textarea-input\"><strong>Remarks:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Remarks\" type=\"text\" pInputText id=\"remarks\" name=\"remarks\" class=\"form-control\" rows=\"3\">\r\n                  <label for=\"float-input\">Please Enter Remarks  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n\r\n              <label for=\"textarea-input\"><strong>Contact No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ContactNo\" type=\"text\" pInputText id=\"contactno\" name=\"contactno\" class=\"form-control\" rows=\"3\">\r\n                  <label for=\"float-input\">Please Enter Contact No  </label>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\" style=\"float\">&nbsp; SAVE </button>\r\n      </div>\r\n    </form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/location-info/location-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/location-info/location-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationInfoComponent", function() { return LocationInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var LocationInfoComponent = /** @class */ (function () {
    function LocationInfoComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.locationForm.setValue(_this.config.data);
        };
    }
    LocationInfoComponent.prototype.ngOnInit = function () {
        this.locationForm = this.formBuilder.group({
            LocationId: [0],
            LocationName: [],
            LocationCode: [],
            PinCode: [],
            Address: [],
            Remarks: [],
            ContactNo: [],
            VoucherType: [],
            Prefix: [],
            BillinigSeriesfrom: [],
            BillingSeriesTo: [],
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    LocationInfoComponent.prototype.savelocation = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        //let customer = this.customerForm.value;
        var location = this.locationForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].LOCATION_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].LOCATION_API.ADD, location, httpOptions)
            .subscribe(function (location) {
            // login successful if there's a jwt token in the response
            if (location) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(location);
            }
            return location;
        });
    };
    LocationInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-info',
            template: __webpack_require__(/*! ./location-info.component.html */ "./src/app/master/location-info/location-info.component.html"),
            styles: [__webpack_require__(/*! ./location-info.component.css */ "./src/app/master/location-info/location-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], LocationInfoComponent);
    return LocationInfoComponent;
}());



/***/ }),

/***/ "./src/app/master/location-view/location-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/master/location-view/location-view.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9sb2NhdGlvbi12aWV3L2xvY2F0aW9uLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/location-view/location-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/location-view/location-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\"></div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\"></div>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                 class=\"ag-theme-balham\"\r\n                 [rowData]=\"rowData\"\r\n                 [columnDefs]=\"columnDefs\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/location-view/location-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/location-view/location-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationViewComponent", function() { return LocationViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../location-info/location-info.component */ "./src/app/master/location-info/location-info.component.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");










var LocationViewComponent = /** @class */ (function () {
    function LocationViewComponent(router, http, LocationService, dialog, config, dialogref) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.LocationService = LocationService;
        this.dialog = dialog;
        this.config = config;
        this.dialogref = dialogref;
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
                headerName: 'LocationId', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'LocationId', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'width': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = 'EDIT';
                    newTH.className = 'pi pi - pencil';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_location_info_location_info_component__WEBPACK_IMPORTED_MODULE_8__["LocationInfoComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Location' } });
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
            //{ headerName: 'CustomerId', field: 'CustomerId' },
            { headerName: 'LocationName', field: 'LocationName', 'width': 150 },
            {
                headerName: 'LocationCode', field: 'LocationCode', ' width': 150
            },
            {
                headerName: 'PinCode ', field: 'PinCode', 'width': 100
            },
            {
                headerName: 'Address    ', field: 'Address', 'width': 100
            },
            { headerName: 'Remarks           ', field: 'Remarks', 'width': 100 },
            { headerName: 'ContactNo           ', field: 'ContactNo', 'width': 100 }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].LOCATION_API.GETALL, httpOptions)
                .subscribe(function (location) {
                _this.rowData = location;
            });
        };
    }
    LocationViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        //let customer = this.customerForm.value;
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].LOCATION_API.GETALL, httpOptions)
            .subscribe(function (location) {
            _this.rowData = location;
        });
    };
    LocationViewComponent.prototype.delete = function (location) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        //let customer = this.customerForm.value;
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].LOCATION_API.DELETE, location, httpOptions)
            .subscribe(function (location) {
            _this.RefreshGrid();
        });
    };
    LocationViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_location_info_location_info_component__WEBPACK_IMPORTED_MODULE_8__["LocationInfoComponent"], { modalConfig: { title: 'Add/Edit Location' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    LocationViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-view',
            template: __webpack_require__(/*! ./location-view.component.html */ "./src/app/master/location-view/location-view.component.html"),
            styles: [__webpack_require__(/*! ./location-view.component.css */ "./src/app/master/location-view/location-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_7__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_9__["DialogRef"]])
    ], LocationViewComponent);
    return LocationViewComponent;
}());



/***/ }),

/***/ "./src/app/master/location-view/location.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/master/location-view/location.service.ts ***!
  \**********************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService.prototype.setData = function (locationData) {
        this.locationData = locationData;
    };
    LocationService.prototype.getData = function () {
        return this.locationData;
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/master/location-view/location.view.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/master/location-view/location.view.module.ts ***!
  \**************************************************************/
/*! exports provided: LocationViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationViewModule", function() { return LocationViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _location_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-view.component */ "./src/app/master/location-view/location-view.component.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _location_view_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location.view.routing.module */ "./src/app/master/location-view/location.view.routing.module.ts");
/* harmony import */ var _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation-border/validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony import */ var _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../location-info/location-info.component */ "./src/app/master/location-info/location-info.component.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");










//import { DPRService } from './dpr.service';







//import { AutoCompleteModule } from 'primeng';
var LocationViewModule = /** @class */ (function () {
    function LocationViewModule() {
    }
    LocationViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _location_view_routing_module__WEBPACK_IMPORTED_MODULE_9__["LocationviewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_location_view_component__WEBPACK_IMPORTED_MODULE_6__["LocationViewComponent"], _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_11__["LocationInfoComponent"]],
            providers: [_location_service__WEBPACK_IMPORTED_MODULE_12__["LocationService"], _dialog_dialog_config__WEBPACK_IMPORTED_MODULE_13__["DialogConfig"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogService"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_15__["DialogRef"]]
        })
    ], LocationViewModule);
    return LocationViewModule;
}());

//providers: [DPRService]


/***/ }),

/***/ "./src/app/master/location-view/location.view.routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/master/location-view/location.view.routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LocationviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationviewRoutingModule", function() { return LocationviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _location_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-view.component */ "./src/app/master/location-view/location-view.component.ts");
/* harmony import */ var _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../location-info/location-info.component */ "./src/app/master/location-info/location-info.component.ts");





var routes = [
    {
        path: '',
        component: _location_view_component__WEBPACK_IMPORTED_MODULE_3__["LocationViewComponent"],
        data: {
            title: 'Location view'
        }
    },
    {
        path: 'locationinfo',
        component: _location_info_location_info_component__WEBPACK_IMPORTED_MODULE_4__["LocationInfoComponent"],
        data: {
            title: 'locationinfo'
        }
    }
];
var LocationviewRoutingModule = /** @class */ (function () {
    function LocationviewRoutingModule() {
    }
    LocationviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LocationviewRoutingModule);
    return LocationviewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-location-view-location-view-module.js.map