(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/models/user.info.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/user.info.model.ts ***!
  \*******************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/pages/404.component.html":
/*!******************************************!*\
  !*** ./src/app/pages/404.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/404.component.ts":
/*!****************************************!*\
  !*** ./src/app/pages/404.component.ts ***!
  \****************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./404.component.html */ "./src/app/pages/404.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/pages/500.component.html":
/*!******************************************!*\
  !*** ./src/app/pages/500.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n"

/***/ }),

/***/ "./src/app/pages/500.component.ts":
/*!****************************************!*\
  !*** ./src/app/pages/500.component.ts ***!
  \****************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./500.component.html */ "./src/app/pages/500.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());



/***/ }),

/***/ "./src/app/pages/authentication.service.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/authentication.service.ts ***!
  \*************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.ts");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (userName, userPassword) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var body = JSON.stringify({ Username: userName, Userpassword: userPassword });
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONSTANT"].USER_APIS.LOGIN, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('Token', JSON.stringify(user.Token));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/pages/login.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-group mb-0\">\r\n          <div class=\"card p-4\">\r\n            <div class=\"card-block\">\r\n              <p appHighlight>Highlight me!</p>\r\n\r\n              <h1>Login</h1>\r\n              <p class=\"text-muted\">Sign In to your account</p>\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                <input type=\"text\" [(ngModel)]=\"userName\" appHighlight class=\"form-control\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"input-group mb-4\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input type=\"password\" [(ngModel)]=\"userPassword\" appHighlight class=\"form-control\" placeholder=\"Password\">\r\n              </div>\r\n              <div *ngIf=\"errorMessage\">\r\n                {{errorMessage}};\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button type=\"button\" (click)=\"login()\" appHighlight class=\"btn btn-primary px-4\">Login</button>\r\n                </div>\r\n                <div class=\"col-6 text-right\">\r\n                  <button type=\"button\"  class=\"btn btn-link px-0\">Forgot password?</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card card-inverse card-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n            <div class=\"card-block text-center\">\r\n              <div>\r\n                <h2>Sign up</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-primary active mt-3\">Register Now!</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/pages/authentication.service.ts");
/* harmony import */ var _models_user_info_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.info.model */ "./src/app/models/user.info.model.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userName = "";
        this.userPassword = "";
        this.errorMessage = "";
        this.userInfo = new _models_user_info_model__WEBPACK_IMPORTED_MODULE_4__["UserInfo"]();
    }
    LoginComponent.prototype.registerUser = function () {
        this.router.navigateByUrl('/register');
        return true;
    };
    LoginComponent.prototype.login = function () {
        this.router.navigateByUrl('/dashboard');
        //this.authService.login(this.userName, this.userPassword).subscribe((user:any) => {
        // if (user && user.UserId > 0) {
        //   this.router.navigateByUrl('/dashboard');
        // } else {
        //  this.errorMessage = "UserName or Password is Incorrect ! Please try again";
        //}
        //},
        // (error) => {
        this.errorMessage = "UserName or Password is Incorrect ! Please try again";
        // }
        //);
        return true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./404.component */ "./src/app/pages/404.component.ts");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./500.component */ "./src/app/pages/500.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/register.component.ts");







var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        data: {
            title: 'Login Page'
        },
    },
    {
        path: '404',
        component: _404_component__WEBPACK_IMPORTED_MODULE_3__["P404Component"],
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: _500_component__WEBPACK_IMPORTED_MODULE_4__["P500Component"],
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: _register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        data: {
            title: 'Register Page'
        }
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404.component */ "./src/app/pages/404.component.ts");
/* harmony import */ var _500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./500.component */ "./src/app/pages/500.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/register.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication.service */ "./src/app/pages/authentication.service.ts");










var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PagesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: [
                _404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
                _500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
                _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/register.component.html":
/*!***********************************************!*\
  !*** ./src/app/pages/register.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card mx-4\">\r\n            <div class=\"card-block p-4\">\r\n              <h1>Register</h1>\r\n              <p class=\"text-muted\">Create your account</p>\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n              </div>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\">@</span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n              </div>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-mobile fa fa-mobile\"></i></span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Mobile\">\r\n              </div>\r\n\r\n              <div class=\"input-group mb-3\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n              </div>\r\n\r\n              <div class=\"input-group mb-4\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\">\r\n              </div>\r\n              <button type=\"button\" (click)=\"createAccount()\" class=\"btn btn-block btn-success\">Create Account</button>\r\n            </div>\r\n            <div class=\"card-footer p-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/register.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/register.component.ts ***!
  \*********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    };
    RegisterComponent.prototype.createAccount = function () {
        this.router.navigateByUrl('/login');
        return true;
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map