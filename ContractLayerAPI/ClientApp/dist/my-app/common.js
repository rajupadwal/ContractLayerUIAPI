(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/dialog/dialog-injector.ts":
/*!*******************************************!*\
  !*** ./src/app/dialog/dialog-injector.ts ***!
  \*******************************************/
/*! exports provided: DialogInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInjector", function() { return DialogInjector; });
var DialogInjector = /** @class */ (function () {
    function DialogInjector(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    DialogInjector.prototype.get = function (token, notFoundValue, flags) {
        var value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    };
    return DialogInjector;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.service.ts":
/*!******************************************!*\
  !*** ./src/app/dialog/dialog.service.ts ***!
  \******************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.module */ "./src/app/dialog/dialog.module.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _dialog_injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-injector */ "./src/app/dialog/dialog-injector.ts");
/* harmony import */ var _dialog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-config */ "./src/app/dialog/dialog-config.ts");
/* harmony import */ var _dialog_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-ref */ "./src/app/dialog/dialog-ref.ts");







var DialogService = /** @class */ (function () {
    function DialogService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DialogService.prototype.open = function (componentType, config) {
        var dialogRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = componentType;
        return dialogRef;
    };
    DialogService.prototype.appendDialogComponentToBody = function (config) {
        var _this = this;
        var map = new WeakMap();
        map.set(_dialog_config__WEBPACK_IMPORTED_MODULE_5__["DialogConfig"], config);
        var dialogRef = new _dialog_ref__WEBPACK_IMPORTED_MODULE_6__["DialogRef"]();
        map.set(_dialog_ref__WEBPACK_IMPORTED_MODULE_6__["DialogRef"], dialogRef);
        var sub = dialogRef.afterClosed.subscribe(function () {
            _this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]);
        var componentRef = componentFactory.create(new _dialog_injector__WEBPACK_IMPORTED_MODULE_4__["DialogInjector"](this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        this.dialogComponentRef.instance.onClose.subscribe(function () {
            _this.removeDialogComponentFromBody();
        });
        return dialogRef;
    };
    DialogService.prototype.removeDialogComponentFromBody = function () {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: _dialog_module__WEBPACK_IMPORTED_MODULE_2__["DialogModule"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: API_URL, APP_CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONSTANT", function() { return APP_CONSTANT; });
var API_URL = window.location.origin + "/api/";
var APP_CONSTANT = {
    USER_APIS: {
        LOGIN: API_URL + "user/login"
    },
    DPR_APIS: {
        GETALL_ITEMGROUP_DETAILS: API_URL + "DPR/GetAllItemGroupDetails",
        SAVE_DPR_DETAILS: API_URL + "DPR/SaveDPRDetails",
        GET_ALL_DPRS: API_URL + "DPR/GetAllDPRDetails"
    },
    ENQUIRY_API: {
        ADD: API_URL + 'Enquiry/Add',
        GETALL: API_URL + 'Enquiry/GetAll',
        GETByID: API_URL + 'Enquiry/GetAll',
        EDIT: API_URL + 'Enquiry/Update',
        DELETE: API_URL + 'Enquiry/Delete'
    },
    CUSOTMER_API: {
        ADD: API_URL + 'Customer/Add',
        GETALL: API_URL + 'Customer/GetAll',
        GETByID: API_URL + 'Customer/GetAll',
        EDIT: API_URL + 'Customer/Update',
        SEARCH_CUSTOMER: API_URL + 'Customer/SearchCustomer',
    },
    LOCATION_API: {
        ADD: API_URL + 'Location/Add',
        GETALL: API_URL + 'Location/GetAll',
        GETByID: API_URL + 'Location/GetAll',
        EDIT: API_URL + 'Location/Update',
        DELETE: API_URL + 'Location/Delete'
    },
    SUPPLIER_API: {
        ADD: API_URL + 'Supplier/Add',
        GETALL: API_URL + 'Supplier/GetAll',
        GETByID: API_URL + 'Supplier/GetAll',
        EDIT: API_URL + 'Supplier/Update',
        DELETE: API_URL + 'Supplier/Delete'
    },
    PLAN_API: {
        ADD: API_URL + 'Plan/Add',
        GETALL: API_URL + 'Plan/GetAll',
        GETByID: API_URL + 'Plan/GetAll',
        EDIT: API_URL + 'Plan/Update',
        DELETE: API_URL + 'Plan/Delete',
        SEARCH_PLAN: API_URL + 'Plan/SearchPlan'
    },
    PRODUCTDESC_API: {
        ADD: API_URL + 'Productdesc/Add',
        GETALL: API_URL + 'Productdesc/GetAll',
        GETByID: API_URL + 'Productdesc/GetAll',
        EDIT: API_URL + 'Productdesc/Update',
        DELETE: API_URL + 'Productdesc/Delete'
    },
    PRODUCT_API: {
        ADD: API_URL + 'Product/Add',
        GETALL: API_URL + 'Product/GetAll',
        GETByID: API_URL + 'Product/GetAll',
        EDIT: API_URL + 'Product/Update',
        DELETE: API_URL + 'Product/Delete'
    },
    PROFILE_API: {
        ADD: API_URL + 'Profile/Add',
        GETALL: API_URL + 'Profile/GetAll',
        GETByID: API_URL + 'Profile/GetAll',
        EDIT: API_URL + 'Profile/Update',
        DELETE: API_URL + 'Profile/Delete'
    },
    EMPLOYEE_API: {
        ADD: API_URL + 'Employee/Add',
        GETALL: API_URL + 'Employee/GetAll',
        GETByID: API_URL + 'Employee/GetAll',
        EDIT: API_URL + 'Employee/Update',
        DELETE: API_URL + 'Employee/Delete'
    },
    EGGSRANGE_API: {
        ADD: API_URL + 'Eggsrange/Add',
        GETALL: API_URL + 'Eggsrange/GetAll',
        GETByID: API_URL + 'Eggsrange/GetAll',
        EDIT: API_URL + 'Eggsrange/Update',
        DELETE: API_URL + 'Eggsrange/Delete'
    },
    BOOKING_API: {
        ADD: API_URL + 'Booking/Add',
        GETALL: API_URL + 'Booking/GetAll',
        GETByID: API_URL + 'Booking/GetAll',
        EDIT: API_URL + 'Booking/Update',
        DELETE: API_URL + 'Booking/Delete'
    },
    BOOKINGCANCEL_API: {
        ADD: API_URL + 'Bookingcancel/Add',
        GETALL: API_URL + 'Bookingcancel/GetAll',
        GETByID: API_URL + 'Bookingcancel/GetAll',
        EDIT: API_URL + 'Bookingcancel/Update',
        DELETE: API_URL + 'Bookingcancel/Delete'
    },
    EMPLOYEEADVANCE_API: {
        ADD: API_URL + 'Employeeadvance/Add',
        GETALL: API_URL + 'Employeeadvance/GetAll',
        GETByID: API_URL + 'Employeeadvance/GetAll',
        EDIT: API_URL + 'Employeeadvance/Update',
        DELETE: API_URL + 'Employeeadvance/Delete'
    },
    INCOME_API: {
        ADD: API_URL + 'Income/Add',
        GETALL: API_URL + 'Income/GetAll',
        GETByID: API_URL + 'Income/GetAll',
        EDIT: API_URL + 'Income/Update',
        DELETE: API_URL + 'Income/Delete'
    },
    EXPENCETYPE_API: {
        ADD: API_URL + 'Expencetype/Add',
        GETALL: API_URL + 'Expencetype/GetAll',
        GETByID: API_URL + 'Expencetype/GetAll',
        EDIT: API_URL + 'Expencetype/Update',
        DELETE: API_URL + 'Expencetype/Delete'
    },
    EXPENCEDETAILS_API: {
        ADD: API_URL + 'Expencedetails/Add',
        GETALL: API_URL + 'Expencedetails/GetAll',
        GETByID: API_URL + 'Expencedetails/GetAll',
        EDIT: API_URL + 'Expencedetails/Update',
        DELETE: API_URL + 'Expencedetails/Delete'
    },
};


/***/ })

}]);
//# sourceMappingURL=common.js.map