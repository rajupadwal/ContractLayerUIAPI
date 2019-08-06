(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-employeeadvance-view-employeeadvance-view-module"],{

/***/ "./src/app/master/employeeadvance-details/employeeadvance-details.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/master/employeeadvance-details/employeeadvance-details.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9lbXBsb3llZWFkdmFuY2UtZGV0YWlscy9lbXBsb3llZWFkdmFuY2UtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/employeeadvance-details/employeeadvance-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/master/employeeadvance-details/employeeadvance-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Employee Details</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"employeeadvanceForm\" (ngSubmit)=\"saveEmployeeAdvance()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Record No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"RecordNo\" id=\"recordno\" name=\"recordno\" class=\"form-control\" disabled/>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Record Date:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <p-calendar formControlName=\"RecordDate\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n              <p-autoComplete formControlName=\"Location\" [suggestions]=\"locationList\" (completeMethod)=\"searchLocation($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"LocationName\"></p-autoComplete>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Advance :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Advance\" id=\"advance\" name=\"advance\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Pan Card No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Narration :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Narration\" id=\"narration\" name=\"narration\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Pan Card No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Employee :</strong></label>\r\n              <p-autoComplete formControlName=\"Employee\" [suggestions]=\"employeeList\" (completeMethod)=\"searchEmployee($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"EmployeeName\"></p-autoComplete>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/employeeadvance-details/employeeadvance-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/master/employeeadvance-details/employeeadvance-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmployeeadvanceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeadvanceDetailsComponent", function() { return EmployeeadvanceDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _location_view_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../location-view/location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var _employee_view_employee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../employee-view/employee.service */ "./src/app/master/employee-view/employee.service.ts");
/* harmony import */ var _employeeadvance_view_employeeadvance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../employeeadvance-view/employeeadvance.service */ "./src/app/master/employeeadvance-view/employeeadvance.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












var EmployeeadvanceDetailsComponent = /** @class */ (function () {
    function EmployeeadvanceDetailsComponent(router, formBuilder, http, config, dialog, locationService, employeeService, employeeadvanceService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.locationService = locationService;
        this.employeeService = employeeService;
        this.employeeadvanceService = employeeadvanceService;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            var employeeadvanceForm = _this.config.data;
            employeeadvanceForm.RecordDate = moment__WEBPACK_IMPORTED_MODULE_11__(_this.config.data.RecordDate).toDate();
            _this.employeeadvanceForm.setValue(_this.config.data);
        };
    }
    EmployeeadvanceDetailsComponent.prototype.ngOnInit = function () {
        this.employeeadvanceForm = this.formBuilder.group({
            RecordNo: [0],
            RecordDate: [],
            Location: [{}],
            Advance: [],
            Narration: [],
            Employee: [{}],
            LocationId: [],
            EmployeeId: []
        });
        if (this.config.data)
            this.getLocation(this.config.data.LocationId);
        this.getEmployee(this.config.data.EmployeeId);
        this.setDataForEdit();
    };
    EmployeeadvanceDetailsComponent.prototype.getLocation = function (id) {
        var _this = this;
        this.locationService.getLocationByID(id).subscribe(function (location) {
            _this.employeeadvanceForm.patchValue({ Location: location });
        });
    };
    EmployeeadvanceDetailsComponent.prototype.searchLocation = function (event) {
        var _this = this;
        this.locationService.searchLocation(event.query).subscribe(function (data) {
            _this.locationList = data;
        });
    };
    EmployeeadvanceDetailsComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.employeeService.getEmployeeByID(id).subscribe(function (employee) {
            _this.employeeadvanceForm.patchValue({ Employee: employee });
        });
    };
    EmployeeadvanceDetailsComponent.prototype.searchEmployee = function (event) {
        var _this = this;
        this.employeeService.searchEmployee(event.query).subscribe(function (data) {
            _this.employeeList = data;
        });
    };
    EmployeeadvanceDetailsComponent.prototype.saveEmployeeAdvance = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var employeeadvance = this.employeeadvanceForm.value;
        //Object.assign(employeeadvance, this.employeeadvanceForm.value);
        employeeadvance.EmployeeId = employeeadvance.Employee.EmployeeId;
        employeeadvance.LocationId = employeeadvance.Location.LocationId;
        delete employeeadvance.Location;
        delete employeeadvance.Employee;
        //this.employeeadvanceService.saveEmployeeAdvance(employeeadvance, this.isEditable).subscribe((employeeadvance) => {
        //  // login successful if there's a jwt token in the response
        //  if (employeeadvance) {
        //    // store user details and jwt token in local storage to keep user logged in between page refreshes
        //    this.dialog.close(employeeadvance);
        //  }
        //  return employeeadvance;
        //});
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEEADVANCE_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEEADVANCE_API.ADD, employeeadvance, httpOptions)
            .subscribe(function (employeeadvance) {
            // login successful if there's a jwt token in the response
            if (employeeadvance) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(employeeadvance);
            }
            return employeeadvance;
        });
    };
    EmployeeadvanceDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeeadvance-details',
            template: __webpack_require__(/*! ./employeeadvance-details.component.html */ "./src/app/master/employeeadvance-details/employeeadvance-details.component.html"),
            styles: [__webpack_require__(/*! ./employeeadvance-details.component.css */ "./src/app/master/employeeadvance-details/employeeadvance-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"], _location_view_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _employee_view_employee_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeService"], _employeeadvance_view_employeeadvance_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeadvanceService"]])
    ], EmployeeadvanceDetailsComponent);
    return EmployeeadvanceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/master/employeeadvance-view/employeeadvance-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/master/employeeadvance-view/employeeadvance-view.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9lbXBsb3llZWFkdmFuY2Utdmlldy9lbXBsb3llZWFkdmFuY2Utdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/employeeadvance-view/employeeadvance-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/master/employeeadvance-view/employeeadvance-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/employeeadvance-view/employeeadvance-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/master/employeeadvance-view/employeeadvance-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeadvanceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeadvanceViewComponent", function() { return EmployeeadvanceViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employeeadvance-details/employeeadvance-details.component */ "./src/app/master/employeeadvance-details/employeeadvance-details.component.ts");
/* harmony import */ var _employeeadvance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeeadvance.service */ "./src/app/master/employeeadvance-view/employeeadvance.service.ts");








var EmployeeadvanceViewComponent = /** @class */ (function () {
    function EmployeeadvanceViewComponent(router, http, employeeadvanceService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.employeeadvanceService = employeeadvanceService;
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
                        var ref = _this.dialog.open(_employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeadvanceDetailsComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Employee Advance' } });
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
                headerName: 'Record No', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'RecordNo', 'width': 150
            },
            { headerName: 'Record Date ', field: 'RecordDate', 'width': 150 },
            { headerName: 'LocationName ', field: 'Location.LocationName', 'width': 150 },
            { headerName: 'Advance ', field: 'Advance', 'width': 150 },
            { headerName: 'Narration ', field: 'Narration', 'width': 150 },
            { headerName: 'EmployeeName ', field: 'Employee.EmployeeName', 'width': 150 },
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEEADVANCE_API.GETALL, httpOptions)
                .subscribe(function (employeeadvance) {
                _this.rowData = employeeadvance;
            });
        };
    }
    EmployeeadvanceViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEEADVANCE_API.GETALL, httpOptions)
            .subscribe(function (employeeadvance) {
            _this.rowData = employeeadvance;
        });
    };
    EmployeeadvanceViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeadvanceDetailsComponent"], { modalConfig: { title: 'Add/Edit Employee Advance' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    EmployeeadvanceViewComponent.prototype.delete = function (employeeadvance) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEEADVANCE_API.DELETE, employeeadvance, httpOptions)
            .subscribe(function (employeeadvance) {
            _this.RefreshGrid();
        });
    };
    EmployeeadvanceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeeadvance-view',
            template: __webpack_require__(/*! ./employeeadvance-view.component.html */ "./src/app/master/employeeadvance-view/employeeadvance-view.component.html"),
            styles: [__webpack_require__(/*! ./employeeadvance-view.component.css */ "./src/app/master/employeeadvance-view/employeeadvance-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _employeeadvance_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeadvanceService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]])
    ], EmployeeadvanceViewComponent);
    return EmployeeadvanceViewComponent;
}());



/***/ }),

/***/ "./src/app/master/employeeadvance-view/employeeadvance.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/master/employeeadvance-view/employeeadvance.service.ts ***!
  \************************************************************************/
/*! exports provided: EmployeeadvanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeadvanceService", function() { return EmployeeadvanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeadvanceService = /** @class */ (function () {
    function EmployeeadvanceService(http) {
        this.http = http;
    }
    EmployeeadvanceService.prototype.setData = function (employeeadvanceData) {
        this.employeeadvanceData = employeeadvanceData;
    };
    EmployeeadvanceService.prototype.getData = function () {
        return this.employeeadvanceData;
    };
    EmployeeadvanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeadvanceService);
    return EmployeeadvanceService;
}());



/***/ }),

/***/ "./src/app/master/employeeadvance-view/employeeadvance.view.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/master/employeeadvance-view/employeeadvance.view.module.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeadvanceViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeadvanceViewModule", function() { return EmployeeadvanceViewModule; });
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
/* harmony import */ var _employeeadvance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employeeadvance.service */ "./src/app/master/employeeadvance-view/employeeadvance.service.ts");
/* harmony import */ var _employeeadvance_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employeeadvance-view.component */ "./src/app/master/employeeadvance-view/employeeadvance-view.component.ts");
/* harmony import */ var _employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../employeeadvance-details/employeeadvance-details.component */ "./src/app/master/employeeadvance-details/employeeadvance-details.component.ts");
/* harmony import */ var _employeeadvance_view_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employeeadvance.view.routing.module */ "./src/app/master/employeeadvance-view/employeeadvance.view.routing.module.ts");









//import { AutoCompleteModule } from 'primeng';





var EmployeeadvanceViewModule = /** @class */ (function () {
    function EmployeeadvanceViewModule() {
    }
    EmployeeadvanceViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_9__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _employeeadvance_view_routing_module__WEBPACK_IMPORTED_MODULE_13__["EmployeeadvanceViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_employeeadvance_view_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeadvanceViewComponent"], _employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeadvanceDetailsComponent"]],
            providers: [_employeeadvance_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeadvanceService"]]
        })
    ], EmployeeadvanceViewModule);
    return EmployeeadvanceViewModule;
}());



/***/ }),

/***/ "./src/app/master/employeeadvance-view/employeeadvance.view.routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/master/employeeadvance-view/employeeadvance.view.routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: EmployeeadvanceViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeadvanceViewRoutingModule", function() { return EmployeeadvanceViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employeeadvance-details/employeeadvance-details.component */ "./src/app/master/employeeadvance-details/employeeadvance-details.component.ts");
/* harmony import */ var _employeeadvance_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employeeadvance-view.component */ "./src/app/master/employeeadvance-view/employeeadvance-view.component.ts");





var routes = [
    {
        path: '',
        component: _employeeadvance_view_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeadvanceViewComponent"],
        data: {
            title: 'Employee Advance View'
        }
    },
    {
        path: 'employeeadvancedetails',
        component: _employeeadvance_details_employeeadvance_details_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeadvanceDetailsComponent"],
        data: {
            title: 'Employee Advance'
        }
    }
];
var EmployeeadvanceViewRoutingModule = /** @class */ (function () {
    function EmployeeadvanceViewRoutingModule() {
    }
    EmployeeadvanceViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeadvanceViewRoutingModule);
    return EmployeeadvanceViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-employeeadvance-view-employeeadvance-view-module.js.map