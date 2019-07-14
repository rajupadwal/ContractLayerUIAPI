(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-profile-view-profile-view-module"],{

/***/ "./src/app/master/profile-master/profile-master.component.css":
/*!********************************************************************!*\
  !*** ./src/app/master/profile-master/profile-master.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wcm9maWxlLW1hc3Rlci9wcm9maWxlLW1hc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/master/profile-master/profile-master.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/master/profile-master/profile-master.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Profile Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"profilemasterForm\" (ngSubmit)=\"saveProfileMaster()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Company Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"CompanyName\" type=\"text\" pInputText id=\"companyname\" name=\"companyname\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Company Name </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Email ID:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EmailId\" type=\"text\" pInputText id=\"emailid\" name=\"emailid\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Email ID </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>PhoneNo :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PhoneNo\" type=\"text\" pInputText id=\"phoneno\" name=\"phoneno\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Enter Phone No </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Mobile No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"MobileNo\" type=\"text\" pInputText id=\"mobileno\" name=\"mobileno\" class=\"form-control\">\r\n                  <!--<label for=\"float-input\">Please Mobile No </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Address :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Address\" type=\"text\" pInputText id=\"address\" name=\"address \" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Address </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Thanks Note :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"ThankYouNote\" type=\"text\" pInputText id=\"thankyounote\" name=\"thankyounote\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Thanks Note </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>GST No :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"GstNo\" type=\"text\" pInputText id=\"gstno\" name=\"gstno\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter GST No </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Company Logo:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"CompanyLogo\" type=\"text\" pInputText id=\"companylogo\" name=\"companylogo\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter GST No </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/profile-master/profile-master.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/master/profile-master/profile-master.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMasterComponent", function() { return ProfileMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");








var ProfileMasterComponent = /** @class */ (function () {
    function ProfileMasterComponent(router, formBuilder, http, config, dialog) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            _this.profilemasterForm.setValue(_this.config.data);
        };
    }
    ProfileMasterComponent.prototype.ngOnInit = function () {
        this.profilemasterForm = this.formBuilder.group({
            ProfileId: [0],
            CompanyName: [],
            PhoneNo: [],
            Address: [],
            GstNo: [],
            EmailId: [],
            MobileNo: [],
            ThankYouNote: [],
            CompanyLogo: []
        });
        if (this.config.data)
            this.setDataForEdit();
    };
    ProfileMasterComponent.prototype.saveProfileMaster = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var profilemaster = this.profilemasterForm.value;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PROFILE_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PROFILE_API.ADD, profilemaster, httpOptions)
            .subscribe(function (profilemaster) {
            // login successful if there's a jwt token in the response
            if (profilemaster) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(profilemaster);
            }
            return profilemaster;
        });
    };
    ProfileMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-master',
            template: __webpack_require__(/*! ./profile-master.component.html */ "./src/app/master/profile-master/profile-master.component.html"),
            styles: [__webpack_require__(/*! ./profile-master.component.css */ "./src/app/master/profile-master/profile-master.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"]])
    ], ProfileMasterComponent);
    return ProfileMasterComponent;
}());



/***/ }),

/***/ "./src/app/master/profile-view/profile-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/master/profile-view/profile-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/master/profile-view/profile-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/master/profile-view/profile-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/profile-view/profile-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/master/profile-view/profile-view.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewComponent", function() { return ProfileViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.service */ "./src/app/master/profile-view/profile.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile-master/profile-master.component */ "./src/app/master/profile-master/profile-master.component.ts");








var ProfileViewComponent = /** @class */ (function () {
    function ProfileViewComponent(router, http, profileService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.profileService = profileService;
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
                headerName: 'ProfileId', headerCheckboxSelection: true,
                headerCheckboxSelectionFilteredOnly: true,
                checkboxSelection: true,
                field: 'ProfileId', 'width': 150
            },
            {
                headerName: 'Edit', valueFormatter: function () { return 'Edit'; }, 'widht': 50,
                cellRenderer: function (params) {
                    var newTH = document.createElement('div');
                    newTH.innerHTML = '<i class="pi pi-pencil"></i>';
                    newTH.onclick = function () {
                        var ref = _this.dialog.open(_profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_7__["ProfileMasterComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Profile Master' } });
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
            { headerName: 'CompanyName ', field: 'CompanyName', 'width': 150 },
            {
                headerName: 'PhoneNo', field: 'PhoneNo', ' width': 150
            },
            {
                headerName: 'Address ', field: 'Address', 'width': 100
            },
            {
                headerName: 'GSTNo    ', field: 'GstNo', 'width': 100
            },
            { headerName: 'EmailId           ', field: 'EmailId', 'width': 100 },
            {
                headerName: 'MobileNo ', field: 'MobileNo', 'width': 100
            },
            {
                headerName: 'ThankYouNote    ', field: 'ThankYouNote', 'width': 100
            }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PROFILE_API.GETALL, httpOptions)
                .subscribe(function (profile) {
                _this.rowData = profile;
            });
        };
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PROFILE_API.GETALL, httpOptions)
            .subscribe(function (profile) {
            _this.rowData = profile;
        });
    };
    ProfileViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_7__["ProfileMasterComponent"], { modalConfig: { title: 'Add/Edit Profile Master' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    ProfileViewComponent.prototype.delete = function (profile) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].PROFILE_API.DELETE, profile, httpOptions)
            .subscribe(function (profile) {
            _this.RefreshGrid();
        });
    };
    ProfileViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-view',
            template: __webpack_require__(/*! ./profile-view.component.html */ "./src/app/master/profile-view/profile-view.component.html"),
            styles: [__webpack_require__(/*! ./profile-view.component.css */ "./src/app/master/profile-view/profile-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());



/***/ }),

/***/ "./src/app/master/profile-view/profile.service.ts":
/*!********************************************************!*\
  !*** ./src/app/master/profile-view/profile.service.ts ***!
  \********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileService = /** @class */ (function () {
    function ProfileService() {
    }
    ProfileService.prototype.setData = function (profileData) {
        this.profileData = profileData;
    };
    ProfileService.prototype.getData = function () {
        return this.profileData;
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/master/profile-view/profile.view.module.ts":
/*!************************************************************!*\
  !*** ./src/app/master/profile-view/profile.view.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewModule", function() { return ProfileViewModule; });
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
/* harmony import */ var _profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../profile-master/profile-master.component */ "./src/app/master/profile-master/profile-master.component.ts");
/* harmony import */ var _profile_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-view.component */ "./src/app/master/profile-view/profile-view.component.ts");
/* harmony import */ var _profile_view_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile.view.routing.module */ "./src/app/master/profile-view/profile.view.routing.module.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile.service */ "./src/app/master/profile-view/profile.service.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");













//import { AutoCompleteModule } from 'primeng';

var ProfileViewModule = /** @class */ (function () {
    function ProfileViewModule() {
    }
    ProfileViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _profile_view_routing_module__WEBPACK_IMPORTED_MODULE_11__["ProfileViewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_8__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_profile_view_component__WEBPACK_IMPORTED_MODULE_10__["ProfileViewComponent"], _profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_9__["ProfileMasterComponent"]],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"]]
        })
    ], ProfileViewModule);
    return ProfileViewModule;
}());



/***/ }),

/***/ "./src/app/master/profile-view/profile.view.routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/master/profile-view/profile.view.routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProfileViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewRoutingModule", function() { return ProfileViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile-master/profile-master.component */ "./src/app/master/profile-master/profile-master.component.ts");
/* harmony import */ var _profile_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-view.component */ "./src/app/master/profile-view/profile-view.component.ts");





var routes = [
    {
        path: '',
        component: _profile_view_component__WEBPACK_IMPORTED_MODULE_4__["ProfileViewComponent"],
        data: {
            title: 'Profile View'
        }
    },
    {
        path: 'profilemaster',
        component: _profile_master_profile_master_component__WEBPACK_IMPORTED_MODULE_3__["ProfileMasterComponent"],
        data: {
            title: 'profilenmaster'
        }
    }
];
var ProfileViewRoutingModule = /** @class */ (function () {
    function ProfileViewRoutingModule() {
    }
    ProfileViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileViewRoutingModule);
    return ProfileViewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-profile-view-profile-view-module.js.map