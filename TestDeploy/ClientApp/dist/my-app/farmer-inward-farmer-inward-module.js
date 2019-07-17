(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["farmer-inward-farmer-inward-module"],{

/***/ "./src/app/farmer-inward/farmer-inward.component.css":
/*!***********************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci1pbndhcmQvZmFybWVyLWlud2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/farmer-inward/farmer-inward.component.html":
/*!************************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <strong>Booking Order</strong>\r\n      <!--<small>Form</small>-->\r\n    </div>\r\n    <!--<form [formGroup]=\"bookingdetailsForm\" (ngSubmit)=\"saveBookingDetails()\">-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Record No:</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <input  type=\"text\" pInputText id=\"recordno\" name=\"recordno\" class=\"form-control\" rows=\"3\" disabled>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Location :</strong></label>\r\n              <select  id=\"select\" name=\"select\" class=\"form-control\">\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"1\">SANGALI</option>\r\n                <option value=\"2\">PHALTAN</option>\r\n                <option value=\"3\">KOLHAPUR</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"select\"><strong>Customer Name :</strong></label>\r\n              <p-autoComplete  [suggestions]=\"customerList\" (completeMethod)=\"searchCustomer($event)\"\r\n                              [dropdown]=\"true\" (onSelect)=\"onSelectCustomer($event)\" [forceSelection]=\"true\" field=\"CustmerName\"></p-autoComplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label for=\"textarea-input\"><strong>Date :</strong></label>\r\n              <div>\r\n                <span class=\"ui-float-label\">\r\n                  <!--<p-calendar  [showIcon]=\"true\" appValidationBorder showButtonBar=\"true\"></p-calendar>-->\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>Product Details</strong>\r\n            <div style=\"width:10px\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"card-block \">\r\n                <div class=\"form-group\">\r\n                  Product Name\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  standard Pack\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n\r\n                    Quantity\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  Action\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngFor=\"let item of inwardItem\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"item.product\"  class=\"form-control\" rows=\"3\">\r\n                    <label for=\"float-input\"></label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <input type=\"text\" pInputText id=\"ref_by\" name=\"ref_by\" class=\"form-control\" rows=\"3\">\r\n                    <label for=\"float-input\">Standard Pack </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"ui-float-label\">\r\n                    <input type=\"text\" pInputText id=\"ref_by\" name=\"ref_by\" class=\"form-control\" rows=\"3\">\r\n                    <label for=\"float-input\">Quantity </label>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"card-block\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" click=\"removeItem(item)\"></button>\r\n                  <i class=\"fa icon-trash\" style=\"height:25px;width:20px;padding-top:10px;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-10\"></div>\r\n            <div class=\"col-sm-2\">\r\n              <button type=\"button\"(click)=\"addNewItem()\">Add new</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <button type=\"button\" (click)=\"saveItems()\">save</button>\r\n        </div>\r\n      </div>\r\n    <!--</form>-->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/farmer-inward/farmer-inward.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.component.ts ***!
  \**********************************************************/
/*! exports provided: FarmerInwardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerInwardComponent", function() { return FarmerInwardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FarmerInwardComponent = /** @class */ (function () {
    function FarmerInwardComponent(formBuilder) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.inwardItem = [];
        this.addNewItem = function () {
            if (_this.inwardItem.length > 2)
                _this.inwardItem.push({ product: '3rd Item', standardPack: '', quantity: 0 });
            _this.inwardItem.push({ product: '', standardPack: '', quantity: 0 });
        };
        this.removeItem = function () {
            //delete
            //this.inwardItem
        };
        this.saveItems = function () {
            _this.inwardItem.forEach(function (obj) {
                console.log(obj.product);
            });
        };
    }
    FarmerInwardComponent.prototype.ngOnInit = function () {
        this.customerForm = this.formBuilder.group({
            firstName: []
        });
    };
    FarmerInwardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-farmer-inward',
            template: __webpack_require__(/*! ./farmer-inward.component.html */ "./src/app/farmer-inward/farmer-inward.component.html"),
            styles: [__webpack_require__(/*! ./farmer-inward.component.css */ "./src/app/farmer-inward/farmer-inward.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FarmerInwardComponent);
    return FarmerInwardComponent;
}());



/***/ }),

/***/ "./src/app/farmer-inward/farmer-inward.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.module.ts ***!
  \*******************************************************/
/*! exports provided: FarmerInwardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerInwardModule", function() { return FarmerInwardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _farmer_inward_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farmer-inward.component */ "./src/app/farmer-inward/farmer-inward.component.ts");
/* harmony import */ var _farmer_inward_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./farmer-inward.routing */ "./src/app/farmer-inward/farmer-inward.routing.ts");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation-border/validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony import */ var _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/dialog.module */ "./src/app/dialog/dialog.module.ts");












//import { AutoCompleteModule } from 'primeng';
var FarmerInwardModule = /** @class */ (function () {
    function FarmerInwardModule() {
    }
    FarmerInwardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dialog_dialog_module__WEBPACK_IMPORTED_MODULE_11__["DialogModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([]),
                primeng_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _validation_border_validation_border_module__WEBPACK_IMPORTED_MODULE_10__["ValidationBorderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _farmer_inward_routing__WEBPACK_IMPORTED_MODULE_7__["FarmerInwardRoutingModule"]
            ],
            declarations: [_farmer_inward_component__WEBPACK_IMPORTED_MODULE_6__["FarmerInwardComponent"]]
        })
    ], FarmerInwardModule);
    return FarmerInwardModule;
}());



/***/ }),

/***/ "./src/app/farmer-inward/farmer-inward.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/farmer-inward/farmer-inward.routing.ts ***!
  \********************************************************/
/*! exports provided: FarmerInwardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerInwardRoutingModule", function() { return FarmerInwardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _farmer_inward_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmer-inward.component */ "./src/app/farmer-inward/farmer-inward.component.ts");




var routes = [
    {
        path: '',
        component: _farmer_inward_component__WEBPACK_IMPORTED_MODULE_3__["FarmerInwardComponent"],
        data: {
            title: 'Farmer inward view'
        }
    },
];
var FarmerInwardRoutingModule = /** @class */ (function () {
    function FarmerInwardRoutingModule() {
    }
    FarmerInwardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FarmerInwardRoutingModule);
    return FarmerInwardRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=farmer-inward-farmer-inward-module.js.map