(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bookingmaster/booking-view/booking.view.module": [
		"./src/app/bookingmaster/booking-view/booking.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"bookingmaster-booking-view-booking-view-module"
	],
	"./bookingmaster/bookingcancel-view/bookingcancel.view.module": [
		"./src/app/bookingmaster/bookingcancel-view/bookingcancel.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"bookingmaster-bookingcancel-view-bookingcancel-view-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./farmer-inward/farmer-inward.module": [
		"./src/app/farmer-inward/farmer-inward.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"farmer-inward-farmer-inward-module"
	],
	"./master/customer-view/customer.module": [
		"./src/app/master/customer-view/customer.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-customer-view-customer-module"
	],
	"./master/employee-view/employee.view.module": [
		"./src/app/master/employee-view/employee.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-employee-view-employee-view-module"
	],
	"./master/enquiry-view/enquiry.view.module": [
		"./src/app/master/enquiry-view/enquiry.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-enquiry-view-enquiry-view-module"
	],
	"./master/location-view/location.view.module": [
		"./src/app/master/location-view/location.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-location-view-location-view-module"
	],
	"./master/plan-view/plan.view.module": [
		"./src/app/master/plan-view/plan.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-plan-view-plan-view-module"
	],
	"./master/product-view/product.view.module": [
		"./src/app/master/product-view/product.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-product-view-product-view-module"
	],
	"./master/productdesc-view/productdesc.view.module": [
		"./src/app/master/productdesc-view/productdesc.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-productdesc-view-productdesc-view-module"
	],
	"./master/profile-view/profile.view.module": [
		"./src/app/master/profile-view/profile.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-profile-view-profile-view-module"
	],
	"./master/supplier-view/supplier.view.module": [
		"./src/app/master/supplier-view/supplier.view.module.ts",
		"default~bookingmaster-booking-view-booking-view-module~bookingmaster-bookingcancel-view-bookingcance~5729e473",
		"common",
		"master-supplier-view-supplier-view-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"common",
		"pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _shared_nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/nav-dropdown.directive */ "./src/app/shared/nav-dropdown.directive.ts");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/sidebar.directive */ "./src/app/shared/sidebar.directive.ts");
/* harmony import */ var _shared_aside_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/aside.directive */ "./src/app/shared/aside.directive.ts");
/* harmony import */ var _shared_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/breadcrumb.component */ "./src/app/shared/breadcrumb.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/full-layout.component */ "./src/app/layouts/full-layout.component.ts");
/* harmony import */ var _layouts_simple_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/simple-layout.component */ "./src/app/layouts/simple-layout.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _directives_error_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/error-directive */ "./src/app/directives/error-directive.ts");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/token.interceptor */ "./src/app/services/token.interceptor.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _validation_border__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./validation-border */ "./src/app/validation-border/index.ts");














// Routing Module

// Layouts







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["NoopAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _validation_border__WEBPACK_IMPORTED_MODULE_21__["ValidationBorderModule"].forRoot({
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    colors: {
                        VALID: 'green',
                        INVALID: 'red',
                        PENDING: 'yellow',
                        DISABLED: 'silver'
                    }
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_15__["FullLayoutComponent"],
                _layouts_simple_layout_component__WEBPACK_IMPORTED_MODULE_16__["SimpleLayoutComponent"],
                _shared_nav_dropdown_directive__WEBPACK_IMPORTED_MODULE_9__["NAV_DROPDOWN_DIRECTIVES"],
                _shared_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsComponent"],
                _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_11__["SIDEBAR_TOGGLE_DIRECTIVES"],
                _shared_aside_directive__WEBPACK_IMPORTED_MODULE_12__["AsideToggleDirective"],
                _directives_error_directive__WEBPACK_IMPORTED_MODULE_18__["ErrorDirective"],
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"],
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_19__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full-layout.component */ "./src/app/layouts/full-layout.component.ts");
/* harmony import */ var _layouts_simple_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/simple-layout.component */ "./src/app/layouts/simple-layout.component.ts");



// Layouts


var routes = [
    {
        path: '',
        component: _layouts_simple_layout_component__WEBPACK_IMPORTED_MODULE_4__["SimpleLayoutComponent"],
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule',
            }
        ]
    },
    {
        path: 'dashboard',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layouts_full_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'farmerInward',
                loadChildren: './farmer-inward/farmer-inward.module#FarmerInwardModule'
            },
            {
                path: 'master',
                component: _layouts_simple_layout_component__WEBPACK_IMPORTED_MODULE_4__["SimpleLayoutComponent"],
                data: {
                    title: 'Master'
                },
                children: [
                    {
                        path: 'Enquiryview',
                        loadChildren: './master/enquiry-view/enquiry.view.module#EnquiryViewModule'
                    },
                    {
                        path: 'Customerview',
                        loadChildren: './master/customer-view/customer.module#CusotmerModule'
                    },
                    {
                        path: 'Supplierview',
                        loadChildren: './master/supplier-view/supplier.view.module#SupplierViewModule'
                    },
                    {
                        path: 'Locationview',
                        loadChildren: './master/location-view/location.view.module#LocationViewModule'
                    },
                    {
                        path: 'Planview',
                        loadChildren: './master/plan-view/plan.view.module#PlanViewModule'
                    },
                    {
                        path: 'Productdescview',
                        loadChildren: './master/productdesc-view/productdesc.view.module#ProductdescViewModule'
                    },
                    {
                        path: 'Profileview',
                        loadChildren: './master/profile-view/profile.view.module#ProfileViewModule'
                    },
                    {
                        path: 'Employeeview',
                        loadChildren: './master/employee-view/employee.view.module#EmployeeViewModule'
                    },
                    {
                        path: 'Productview',
                        loadChildren: './master/product-view/product.view.module#ProductViewModule'
                    },
                ]
            },
            {
                path: 'bookingmaster',
                component: _layouts_simple_layout_component__WEBPACK_IMPORTED_MODULE_4__["SimpleLayoutComponent"],
                data: {
                    title: 'Booking'
                },
                children: [
                    {
                        path: 'Bookingview',
                        loadChildren: './bookingmaster/booking-view/booking.view.module#BookingViewModule'
                    },
                    {
                        path: 'Bookingcancelview',
                        loadChildren: './bookingmaster/bookingcancel-view/bookingcancel.view.module#BookingcancelViewModule'
                    },
                ]
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/directives/error-directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/error-directive.ts ***!
  \***********************************************/
/*! exports provided: ErrorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDirective", function() { return ErrorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorDirective = /** @class */ (function () {
    function ErrorDirective(el) {
        this.el = el;
    }
    ErrorDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    ErrorDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    ErrorDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ErrorDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ErrorDirective.prototype, "onMouseLeave", null);
    ErrorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHighlight]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ErrorDirective);
    return ErrorDirective;
}());



/***/ }),

/***/ "./src/app/layouts/full-layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/full-layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\r\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\r\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        <span class=\"d-md-down-none\">admin</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\r\n\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link navbar-toggler\" href=\"#\" appAsideMenuToggler>&#9776;</a>\r\n    </li>\r\n  </ul>\r\n</header>\r\n\r\n<div class=\"app-body\">\r\n  <div class=\"sidebar\">\r\n    <nav class=\"sidebar-nav\">\r\n      <ul class=\"nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">NEW</span></a>\r\n        </li>\r\n\r\n        <li class=\"divider\"></li>\r\n\r\n        <!-- <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/CustomerInfo']\"><i class=\"icon-puzzle\"></i> Cusotmer Info</a>\r\n  </li> -->\r\n        <!--<li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/cases']\"><i class=\"icon-puzzle\"></i> Cases</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/team']\"><i class=\"icon-puzzle\"></i> Team</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/clients']\"><i class=\"icon-puzzle\"></i> Clients</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/calendar']\"><i class=\"icon-puzzle\"></i> Calendar </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/todo']\"><i class=\"icon-puzzle\"></i> To Do</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/documents']\"><i class=\"icon-puzzle\"></i> Documents</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/invoices']\"><i class=\"icon-puzzle\"></i> Invoices </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/causelist']\"><i class=\"icon-puzzle\"></i> Cause List</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/casediary']\"><i class=\"icon-puzzle\"></i> Case Diary</a>\r\n  </li>-->\r\n        <!--<li class=\"nav-title\">\r\n    ui elements\r\n  </li>-->\r\n        <!--\r\n  <li class=\"nav-item nav-dropdown\" routerlinkactive=\"open\" appnavdropdown>\r\n    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appnavdropdowntoggle><i class=\"icon-puzzle\"></i> get my</a>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> buttons</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> social buttons</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> cards</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> forms</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/modals']\"><i class=\"icon-puzzle\"></i> modals</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> switches</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> tables</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> tabs</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class=\"nav-item nav-dropdown\" routerlinkactive=\"open\" appnavdropdown>\r\n    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appnavdropdowntoggle><i class=\"icon-star\"></i> icons</a>\r\n    <ul class=\"nav-dropdown-items\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> font awesome</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> simple line icons</a>\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> widgets <span class=\"badge badge-info\">new</span></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" routerlinkactive=\"active\" [routerlink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> charts</a>\r\n  </li>\r\n  <li class=\"divider\"></li>\r\n  <li class=\"nav-title\">\r\n    extras\r\n  </li>-->\r\n        <li class=\"nav-item nav-dropdown\" appNavDropdown>\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Master</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Enquiryview']\"><i class=\"icon-star\"></i> Enquiry Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Customerview']\"><i class=\"icon-star\"></i> Customer Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Supplierview']\"><i class=\"icon-star\"></i> Supplier Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Locationview']\"><i class=\"icon-star\"></i> Location Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Planview']\"><i class=\"icon-star\"></i> Plan Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Productdescview']\"><i class=\"icon-star\"></i> Product Desc Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Productview']\"><i class=\"icon-star\"></i> Product Master</a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Profileview']\"><i class=\"icon-star\"></i> Profile Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Expencetypeview']\"><i class=\"icon-star\"></i> Expence Type</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Expencedetailseview']\"><i class=\"icon-star\"></i> Office Expence </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Eggsrangeview']\"><i class=\"icon-star\"></i> Eggs Range Master</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Employeeadvanceview']\"><i class=\"icon-star\"></i> Employee Advance</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/master/Incomeview']\"><i class=\"icon-star\"></i> Income Details</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"nav-item nav-dropdown\" appNavDropdown>\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i>Booking</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/bookingmaster/Bookingview']\"><i class=\"icon-star\"></i> Booking Order</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/bookingmaster/Bookingcancelview']\"><i class=\"icon-star\"></i> Booking Cancel</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/farmerInward']\"><i class=\"icon-star\"></i> Farmer Inward</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"nav-item nav-dropdown\" appNavDropdown>\r\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Pages</a>\r\n          <ul class=\"nav-dropdown-items\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\r\n            </li>\r\n           \r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n\r\n    <!-- Breadcrumb -->\r\n    <ol class=\"breadcrumb\">\r\n      <app-breadcrumbs></app-breadcrumbs>\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li>\r\n    </ol>\r\n\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.conainer-fluid -->\r\n  </main>\r\n\r\n  <aside class=\"aside-menu\">\r\n    <tabset>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\r\n        <div class=\"callout m-0 py-2 text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Today</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-3 my-0\">\r\n        <div class=\"callout callout-warning m-0 py-3\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Meeting with <strong>Lucas</strong></div>\r\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-3 my-0\">\r\n        <div class=\"callout callout-info m-0 py-3\">\r\n          <div class=\"avatar float-right\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div>Skype with <strong>Megan</strong></div>\r\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\r\n        </div>\r\n        <hr class=\"transparent mx-3 my-0\">\r\n        <div class=\"callout m-0 py-2 text-muted text-center bg-faded text-uppercase\">\r\n          <small><b>Tomorrow</b></small>\r\n        </div>\r\n        <hr class=\"transparent mx-3 my-0\">\r\n        <div class=\"callout callout-danger m-0 py-3\">\r\n          <div>New UI Project - <strong>deadline</strong></div>\r\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; SM-Corporation HQ </small>\r\n          <div class=\"avatars-stack mt-2\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-3 my-0\">\r\n        <div class=\"callout callout-success m-0 py-3\">\r\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\r\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\r\n        </div>\r\n        <hr class=\"mx-3 my-0\">\r\n        <div class=\"callout callout-primary m-0 py-3\">\r\n          <div><strong>Team meeting</strong></div>\r\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; SM-Corporation HQ </small>\r\n          <div class=\"avatars-stack mt-2\">\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div class=\"avatar avatar-xs\">\r\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mx-3 my-0\">\r\n      </tab>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\r\n        <div class=\"p-3\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\r\n        <div class=\"p-3\">\r\n          <h6>Settings</h6>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-4\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n\r\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </aside>\r\n</div>\r\n\r\n<footer class=\"app-footer\">\r\n  <a href=\"http://SM-Corporation.io\">SM-Corporation</a> &copy; 2017 SM-Corporation.\r\n  <span class=\"float-right\">Powered by <a href=\"http://SM-Corporation.io\">SM-Corporation</a></span>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/layouts/full-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/full-layout.component.ts ***!
  \**************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full-layout.component.html")
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/simple-layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/simple-layout.component.ts ***!
  \****************************************************/
/*! exports provided: SimpleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleLayoutComponent", function() { return SimpleLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimpleLayoutComponent = /** @class */ (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () { };
    SimpleLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// src/app/auth/auth.service.ts

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('Token');
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return (token && token == undefined) || token == null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken(),
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/aside.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/aside.directive.ts ***!
  \*******************************************/
/*! exports provided: AsideToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideToggleDirective", function() { return AsideToggleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb.component.ts":
/*!************************************************!*\
  !*** ./src/app/shared/breadcrumb.component.ts ***!
  \************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav-dropdown.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/nav-dropdown.directive.ts ***!
  \**************************************************/
/*! exports provided: NavDropdownDirective, NavDropdownToggleDirective, NAV_DROPDOWN_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownDirective", function() { return NavDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdownToggleDirective", function() { return NavDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_DROPDOWN_DIRECTIVES", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "./src/app/shared/sidebar.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/sidebar.directive.ts ***!
  \*********************************************/
/*! exports provided: SidebarToggleDirective, SidebarMinimizeDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleDirective", function() { return SidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMinimizeDirective", function() { return SidebarMinimizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarOffCanvasCloseDirective", function() { return SidebarOffCanvasCloseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "./src/app/validation-border/index.ts":
/*!********************************************!*\
  !*** ./src/app/validation-border/index.ts ***!
  \********************************************/
/*! exports provided: VALIDATION_BORDER_CONFIG, ValidationBorderDirective, ValidationBorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./src/app/validation-border/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_BORDER_CONFIG", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VALIDATION_BORDER_CONFIG"]; });

/* harmony import */ var _validation_border_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-border.directive */ "./src/app/validation-border/validation-border.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationBorderDirective", function() { return _validation_border_directive__WEBPACK_IMPORTED_MODULE_1__["ValidationBorderDirective"]; });

/* harmony import */ var _validation_border_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-border.module */ "./src/app/validation-border/validation-border.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationBorderModule", function() { return _validation_border_module__WEBPACK_IMPORTED_MODULE_2__["ValidationBorderModule"]; });






/***/ }),

/***/ "./src/app/validation-border/public_api.ts":
/*!*************************************************!*\
  !*** ./src/app/validation-border/public_api.ts ***!
  \*************************************************/
/*! exports provided: VALIDATION_BORDER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_BORDER_CONFIG", function() { return VALIDATION_BORDER_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var VALIDATION_BORDER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Validation Border Config');


/***/ }),

/***/ "./src/app/validation-border/validation-border.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/validation-border/validation-border.directive.ts ***!
  \******************************************************************/
/*! exports provided: ValidationBorderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationBorderDirective", function() { return ValidationBorderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public_api */ "./src/app/validation-border/public_api.ts");




var ValidationBorderDirective = /** @class */ (function () {
    function ValidationBorderDirective(ngControl, config) {
        this.ngControl = ngControl;
        this.colors = config.colors;
        this.borderWidth = config.borderWidth;
        this.borderStyle = config.borderStyle;
    }
    Object.defineProperty(ValidationBorderDirective.prototype, "borderStyleCss", {
        get: function () {
            return this.showBorder ? this.borderStyle : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationBorderDirective.prototype, "changeClass", {
        get: function () {
            return this.showBorder ? 'ui-calendar-bordered' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationBorderDirective.prototype, "borderWidthCss", {
        get: function () {
            return this.showBorder ? this.borderWidth : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationBorderDirective.prototype, "borderColorCss", {
        get: function () {
            return this.showBorder ? this.colors[this.ngControl.status] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationBorderDirective.prototype, "showBorder", {
        get: function () {
            return this.ngControl.dirty || this.ngControl.touched;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appValidationBorderWidth'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ValidationBorderDirective.prototype, "borderWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appValidationBorderStyle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ValidationBorderDirective.prototype, "borderStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-style'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationBorderDirective.prototype, "borderStyleCss", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.ui-calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationBorderDirective.prototype, "changeClass", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationBorderDirective.prototype, "borderWidthCss", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.border-color'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationBorderDirective.prototype, "borderColorCss", null);
    ValidationBorderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appValidationBorder]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_public_api__WEBPACK_IMPORTED_MODULE_3__["VALIDATION_BORDER_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], Object])
    ], ValidationBorderDirective);
    return ValidationBorderDirective;
}());



/***/ }),

/***/ "./src/app/validation-border/validation-border.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/validation-border/validation-border.module.ts ***!
  \***************************************************************/
/*! exports provided: ValidationBorderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationBorderModule", function() { return ValidationBorderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_border_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validation-border.directive */ "./src/app/validation-border/validation-border.directive.ts");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public_api */ "./src/app/validation-border/public_api.ts");






var ValidationBorderModule = /** @class */ (function () {
    function ValidationBorderModule() {
    }
    ValidationBorderModule_1 = ValidationBorderModule;
    ValidationBorderModule.forRoot = function (config) {
        return {
            ngModule: ValidationBorderModule_1,
            providers: [{ provide: _public_api__WEBPACK_IMPORTED_MODULE_5__["VALIDATION_BORDER_CONFIG"], useValue: config }]
        };
    };
    var ValidationBorderModule_1;
    ValidationBorderModule = ValidationBorderModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            declarations: [_validation_border_directive__WEBPACK_IMPORTED_MODULE_4__["ValidationBorderDirective"]],
            exports: [_validation_border_directive__WEBPACK_IMPORTED_MODULE_4__["ValidationBorderDirective"]]
        })
    ], ValidationBorderModule);
    return ValidationBorderModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\KTCon\Contract_Layerfarm\WebAPI\ContractLayerUIAPI\ContractLayerAPI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map