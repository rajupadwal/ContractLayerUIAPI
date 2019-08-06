(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-employee-view-employee-view-module"],{

/***/ "./src/app/master/employee-info/employee-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/master/employee-info/employee-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL2VtcGxveWVlLWluZm8vZW1wbG95ZWUtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL2VtcGxveWVlLWluZm8vZW1wbG95ZWUtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/master/employee-info/employee-info.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/employee-info/employee-info.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Employee Master</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"saveEmployee()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Employee Name:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EmployeeName\" type=\"text\" pInputText id=\"employeename\" name=\"employeename\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Employee Name </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Employee Mobile No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PersonalContactNo\" type=\"text\" pInputText id=\"personalcontactno\" name=\"personalcontactno\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Employee Mobile No </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"form-group \">\r\n          <label for=\"textarea-input\"><strong>Address Details:</strong></label>\r\n          <div>\r\n            <span class=\"ui-float-label\">\r\n              <textarea formControlName=\"Address\" id=\"textarea-input\" name=\"textarea-input\" rows=\"2\" class=\"form-control\"></textarea>\r\n              <!--<label for=\"float-input\">Enter Employee Address Details.. </label>-->\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Education Details:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EducationDetails\" type=\"text\" pInputText id=\"educationdetails\" name=\"educationdetails\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Education Details </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Past Work Experience:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PastWorkExp\" type=\"text\" pInputText id=\"pastworkexp\" name=\"pastworkexp\" class=\"form-control\" rows=\"3\">\r\n                  <!--<label for=\"float-input\">Please Enter Past Work Experience </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>District :</strong></label>\r\n              <select formControlName=\"District\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"Please select\">Please select</option>\r\n                <option value=\"Pune\">Pune</option>\r\n                <option value=\"Nashik\">Nashik</option>\r\n                <option value=\"Nagpur\">Nagpur</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Taluka :</strong></label>\r\n              <select formControlName=\"Taluka\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"\">Please select</option>\r\n                <option value=\"Maval\">Maval</option>\r\n                <option value=\"Khed\">Khed</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>City :</strong></label>\r\n              <select formControlName=\"City\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"Please select\">Please select</option>\r\n                <option value=\"Pune\">Pune</option>\r\n                <option value=\"Mumbai\">Mumbai</option>\r\n                <option value=\"Lonavala\">Lonavala</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Pan Card No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"PanCardNo\" id=\"pancardno\" name=\"pancardno\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Pan Card No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Aadhar No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AadharId\" id=\"aadharid\" name=\"aadharid\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Please Enter Aadhar Id) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Voter Id:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"VoterId\" id=\"voterid\" name=\"voterid\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Please Enter Voter Id) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Blood Group :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"BloodGroup\" id=\"bloodgroup\" name=\"bloodgroup\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Blood Group) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Maritial Status :</strong></label>\r\n              <select formControlName=\"MaritialStatus\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Married</option>\r\n                <option value=\"2\">Unmarried</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Salary :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Salary\" id=\"salary\" name=\"salary\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Please Enter Salary) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Date Of Joining :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <p-calendar formControlName=\"DateOfJoining\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Date Of Leaving :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <p-calendar formControlName=\"DateOfLeaving\" [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Role :</strong></label>\r\n              <select formControlName=\"Role\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">Admin</option>\r\n                <option value=\"2\">Accountant</option>\r\n                <option value=\"2\">Marketing</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n              <p-autoComplete formControlName=\"Location\" [suggestions]=\"locationList\" (completeMethod)=\"searchLocation($event)\"\r\n                              [dropdown]=\"true\" [forceSelection]=\"true\" field=\"LocationName\"></p-autoComplete>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>User Id :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"UserId\" id=\"userid\" name=\"userid\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter User Id) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Password :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Password\" id=\"password\" name=\"password\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Password) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Company Mobile No :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"CompanyMobileNo\" id=\"companymobileno\" name=\"companymobileno\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Company Mobile No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Post :</strong></label>\r\n              <select formControlName=\"Post\" id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">FieldIncharge</option>\r\n                <option value=\"2\">Admin&BackOffice</option>\r\n                <option value=\"3\">UnitManager</option>\r\n                <option value=\"4\">Reception</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Remarks :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Remarks\" id=\"remarks\" name=\"remarks\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Remarks) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Emergency Contact Name :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EmergencyContactName\" id=\"emergencycontactname\" name=\"emergencycontactname\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Emergency Contact Name) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Emergency Contact No :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"EmergencyNo\" id=\"emergencyno\" name=\"emergencyno\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Emergency Contact No) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Relation :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"Relation\" id=\"relation\" name=\"relation\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Relation) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Bank Name :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"BankName\" id=\"bankname\" name=\"bankname\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Bank Name) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Account No :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AccountNo\" id=\"accountno\" name=\"accountno\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter AccountNo) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>IFSC Code :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"IfscCode\" id=\"ifsccode\" name=\"ifsccode\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter IFSCCode) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>MICR Code :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"MicrCode\" id=\"micrcode\" name=\"micrcode\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter MICR Code) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Branch Name :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"BranchName\" id=\"branchname\" name=\"branchname\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Branch Name) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Account Type :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input formControlName=\"AccountType\" id=\"accounttype\" name=\"accounttype\" class=\"form-control\" />\r\n                  <!--<label for=\"float-input\">(Enter Account Type) </label>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"input-group-btn\" dropdown>\r\n        <button type=\"submit\" class=\"btn btn-outline-primary\">&nbsp; SUBMIT </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/employee-info/employee-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/employee-info/employee-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeInfoComponent", function() { return EmployeeInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog-ref */ "./src/app/dialog/dialog-ref.ts");
/* harmony import */ var _location_view_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../location-view/location.service */ "./src/app/master/location-view/location.service.ts");
/* harmony import */ var _customer_view_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer-view/customer.service */ "./src/app/master/customer-view/customer.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











var EmployeeInfoComponent = /** @class */ (function () {
    function EmployeeInfoComponent(router, formBuilder, http, config, dialog, locationService, cusotmerService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.config = config;
        this.dialog = dialog;
        this.locationService = locationService;
        this.cusotmerService = cusotmerService;
        this.isEditable = false;
        this.setDataForEdit = function () {
            _this.isEditable = true;
            var employeeForm = _this.config.data;
            employeeForm.DateOfJoining = moment__WEBPACK_IMPORTED_MODULE_10__(_this.config.data.DateOfJoining).toDate();
            employeeForm.DateOfLeaving = moment__WEBPACK_IMPORTED_MODULE_10__(_this.config.data.DateOfLeaving).toDate();
            _this.employeeForm.setValue(_this.config.data);
        };
    }
    EmployeeInfoComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.formBuilder.group({
            EmployeeId: [0],
            EmployeeName: [],
            PersonalContactNo: [],
            Address: [],
            EducationDetails: [],
            PastWorkExp: [],
            PanCardNo: [],
            AadharId: [],
            VoterId: [],
            BloodGroup: [],
            MaritialStatus: [],
            Salary: [],
            DateOfJoining: [],
            DateOfLeaving: [],
            Role: [],
            Location: [{}],
            UserId: [],
            Password: [],
            CompanyMobileNo: [],
            Post: [],
            Remarks: [],
            District: [],
            Taluka: [],
            City: [],
            EmergencyContactName: [],
            EmergencyNo: [],
            Relation: [],
            BankName: [],
            AccountNo: [],
            IfscCode: [],
            MicrCode: [],
            BranchName: [],
            AccountType: [],
            LocationId: []
        });
        if (this.config.data)
            this.getLocation(this.config.data.LocationId);
        this.setDataForEdit();
    };
    EmployeeInfoComponent.prototype.getLocation = function (id) {
        var _this = this;
        this.locationService.getLocationByID(id).subscribe(function (location) {
            _this.employeeForm.patchValue({ Location: location });
        });
    };
    EmployeeInfoComponent.prototype.searchLocation = function (event) {
        var _this = this;
        this.locationService.searchLocation(event.query).subscribe(function (data) {
            _this.locationList = data;
        });
    };
    EmployeeInfoComponent.prototype.saveEmployee = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var employee = this.employeeForm.value;
        employee.LocationId = employee.Location.LocationId;
        delete employee.Location;
        return this.http.post(this.isEditable ? _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEE_API.EDIT : _config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEE_API.ADD, employee, httpOptions)
            .subscribe(function (employee) {
            // login successful if there's a jwt token in the response
            if (employee) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                _this.dialog.close(employee);
            }
            return employee;
        });
    };
    EmployeeInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-info',
            template: __webpack_require__(/*! ./employee-info.component.html */ "./src/app/master/employee-info/employee-info.component.html"),
            styles: [__webpack_require__(/*! ./employee-info.component.css */ "./src/app/master/employee-info/employee-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_dialog_dialog_config__WEBPACK_IMPORTED_MODULE_6__["DialogConfig"], _dialog_dialog_ref__WEBPACK_IMPORTED_MODULE_7__["DialogRef"], _location_view_location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _customer_view_customer_service__WEBPACK_IMPORTED_MODULE_9__["CusotmerService"]])
    ], EmployeeInfoComponent);
    return EmployeeInfoComponent;
}());



/***/ }),

/***/ "./src/app/master/employee-view/employee-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/master/employee-view/employee-view.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3Rlci9lbXBsb3llZS12aWV3L2VtcGxveWVlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/master/employee-view/employee-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/employee-view/employee-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"></div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"redirectToAddNew()\"><i class=\"fa fa-plus-circle\"></i>&nbsp; Add New </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n        <ag-grid-angular style=\"width: 750px; height: 500px;\"\r\n                         class=\"ag-theme-balham\"\r\n                         [rowData]=\"rowData\"\r\n                         [columnDefs]=\"columnDefs\">\r\n        </ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/master/employee-view/employee-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/employee-view/employee-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewComponent", function() { return EmployeeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./src/config.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.service */ "./src/app/master/employee-view/employee.service.ts");
/* harmony import */ var _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog/dialog.service */ "./src/app/dialog/dialog.service.ts");
/* harmony import */ var _employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../employee-info/employee-info.component */ "./src/app/master/employee-info/employee-info.component.ts");








var EmployeeViewComponent = /** @class */ (function () {
    function EmployeeViewComponent(router, http, employeeService, dialog) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.employeeService = employeeService;
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
                        var ref = _this.dialog.open(_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeInfoComponent"], { data: params.data, modalConfig: { title: 'Add/Edit Employee' } });
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
                field: 'EmployeeId', 'width': 100
            },
            { headerName: 'Employee Name ', field: 'EmployeeName', 'width': 150 },
            {
                headerName: 'Mobile No', field: 'PersonalContactNo', ' width': 150
            },
            {
                headerName: 'Address ', field: 'Address', 'width': 100
            },
            {
                headerName: 'Education Details    ', field: 'EducationDetails', 'width': 100
            },
            { headerName: 'Past Work Exp           ', field: 'PastWorkExp' },
            { headerName: 'Location           ', field: 'Location.LocationName' }
        ];
        this.rowData = [];
        this.RefreshGrid = function () {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            };
            return _this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEE_API.GETALL, httpOptions)
                .subscribe(function (employee) {
                _this.rowData = employee;
            });
        };
    }
    EmployeeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEE_API.GETALL, httpOptions)
            .subscribe(function (employee) {
            _this.rowData = employee;
        });
    };
    EmployeeViewComponent.prototype.redirectToAddNew = function () {
        var _this = this;
        var ref = this.dialog.open(_employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeInfoComponent"], { modalConfig: { title: 'Add/Edit Employee' } });
        ref.afterClosed.subscribe(function (result) {
            // this.rowData.push(result); //TODO this should be implemented like this
            _this.RefreshGrid();
        });
    };
    EmployeeViewComponent.prototype.delete = function (employee) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].EMPLOYEE_API.DELETE, employee, httpOptions)
            .subscribe(function (employee) {
            _this.RefreshGrid();
        });
    };
    EmployeeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-view',
            template: __webpack_require__(/*! ./employee-view.component.html */ "./src/app/master/employee-view/employee-view.component.html"),
            styles: [__webpack_require__(/*! ./employee-view.component.css */ "./src/app/master/employee-view/employee-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"], _dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]])
    ], EmployeeViewComponent);
    return EmployeeViewComponent;
}());



/***/ }),

/***/ "./src/app/master/employee-view/employee.view.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/master/employee-view/employee.view.module.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewModule", function() { return EmployeeViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _employee_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-view.component */ "./src/app/master/employee-view/employee-view.component.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _employee_view_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee.view.routing.module */ "./src/app/master/employee-view/employee.view.routing.module.ts");
/* harmony import */ var _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../validation-border/validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony import */ var _employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../employee-info/employee-info.component */ "./src/app/master/employee-info/employee-info.component.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee.service */ "./src/app/master/employee-view/employee.service.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");













//import { AutoCompleteModule } from 'primeng';

var EmployeeViewModule = /** @class */ (function () {
    function EmployeeViewModule() {
    }
    EmployeeViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                _employee_view_routing_module__WEBPACK_IMPORTED_MODULE_9__["EmployeeviewRoutingModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [_employee_view_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeViewComponent"], _employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeInfoComponent"]],
            providers: [_employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeService"]]
        })
    ], EmployeeViewModule);
    return EmployeeViewModule;
}());



/***/ }),

/***/ "./src/app/master/employee-view/employee.view.routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/master/employee-view/employee.view.routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeviewRoutingModule", function() { return EmployeeviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-view.component */ "./src/app/master/employee-view/employee-view.component.ts");
/* harmony import */ var _employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee-info/employee-info.component */ "./src/app/master/employee-info/employee-info.component.ts");





var routes = [
    {
        path: '',
        component: _employee_view_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeViewComponent"],
        data: {
            title: 'Employee view'
        }
    },
    {
        path: 'employeeinfo',
        component: _employee_info_employee_info_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeInfoComponent"],
        data: {
            title: 'employeeinfo'
        }
    }
];
var EmployeeviewRoutingModule = /** @class */ (function () {
    function EmployeeviewRoutingModule() {
    }
    EmployeeviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeviewRoutingModule);
    return EmployeeviewRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-employee-view-employee-view-module.js.map