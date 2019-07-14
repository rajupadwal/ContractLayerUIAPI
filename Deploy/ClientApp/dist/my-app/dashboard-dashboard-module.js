(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-primary\">\r\n        <div class=\"card-block pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Cases</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart1Data\"\r\n          [labels]=\"lineChart1Labels\"\r\n          [options]=\"lineChart1Options\"\r\n          [colors]=\"lineChart1Colours\"\r\n          [legend]=\"lineChart1Legend\"\r\n          [chartType]=\"lineChart1Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-info\">\r\n        <div class=\"card-block pb-0\">\r\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\r\n            <i class=\"icon-location-pin\"></i>\r\n          </button>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Clients</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart2Data\"\r\n          [labels]=\"lineChart2Labels\"\r\n          [options]=\"lineChart2Options\"\r\n          [colors]=\"lineChart2Colours\"\r\n          [legend]=\"lineChart2Legend\"\r\n          [chartType]=\"lineChart2Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-warning\">\r\n        <div class=\"card-block pb-0\">\r\n          <div class=\"btn-group float-right\">\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Documents</p>\r\n        </div>\r\n        <div class=\"chart-wrapper\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"lineChart3Data\"\r\n          [labels]=\"lineChart3Labels\"\r\n          [options]=\"lineChart3Options\"\r\n          [colors]=\"lineChart3Colours\"\r\n          [legend]=\"lineChart3Legend\"\r\n          [chartType]=\"lineChart3Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"card card-inverse card-danger\">\r\n        <div class=\"card-block pb-0\">\r\n          <div class=\"btn-group float-right\" dropdown>\r\n            <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\r\n              <i class=\"icon-settings\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </div>\r\n          <h4 class=\"mb-0\">9.823</h4>\r\n          <p>Members online</p>\r\n        </div>\r\n        <div class=\"chart-wrapper px-3\" style=\"height:70px;\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"barChart1Data\"\r\n          [labels]=\"barChart1Labels\"\r\n          [options]=\"barChart1Options\"\r\n          [colors]=\"barChart1Colours\"\r\n          [legend]=\"barChart1Legend\"\r\n          [chartType]=\"barChart1Type\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\">\r\n          <h4 class=\"card-title mb-0\">Traffic</h4>\r\n          <div class=\"small text-muted\">November 2015</div>\r\n        </div><!--/.col-->\r\n        <div class=\"col-sm-7 hidden-sm-down\">\r\n          <button type=\"button\" class=\"btn btn-primary float-right\"><i class=\"icon-cloud-download\"></i></button>\r\n          <div class=\"btn-toolbar float-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n            <div class=\"btn-group mr-3\" data-toggle=\"buttons\" aria-label=\"First group\">\r\n              <label class=\"btn btn-outline-secondary\">\r\n                <input type=\"radio\" name=\"options\" id=\"option1\"> Day\r\n              </label>\r\n              <label class=\"btn btn-outline-secondary active\">\r\n                <input type=\"radio\" name=\"options\" id=\"option2\" checked> Month\r\n              </label>\r\n              <label class=\"btn btn-outline-secondary\">\r\n                <input type=\"radio\" name=\"options\" id=\"option3\"> Year\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div><!--/.col-->\r\n      </div><!--/.row-->\r\n      <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\r\n        <canvas baseChart class=\"chart\"\r\n        [datasets]=\"mainChartData\"\r\n        [labels]=\"mainChartLabels\"\r\n        [options]=\"mainChartOptions\"\r\n        [colors]=\"mainChartColours\"\r\n        [legend]=\"mainChartLegend\"\r\n        [chartType]=\"mainChartType\"\r\n        (chartHover)=\"chartHovered($event)\"\r\n        (chartClick)=\"chartClicked($event)\"></canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <ul>\r\n        <li>\r\n          <div class=\"text-muted\">Visits</div>\r\n          <strong>29.703 Users (40%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">Unique</div>\r\n          <strong>24.093 Users (20%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <div class=\"text-muted\">Pageviews</div>\r\n          <strong>78.706 Views (60%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">New Users</div>\r\n          <strong>22.123 Users (80%)</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n        <li class=\"hidden-sm-down\">\r\n          <div class=\"text-muted\">Bounce Rate</div>\r\n          <strong>40.15%</strong>\r\n          <div class=\"progress progress-xs mt-2\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!--/.card-->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box facebook\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData1\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>89k</strong>\r\n            <span>friends</span>\r\n          </li>\r\n          <li>\r\n            <strong>459</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box twitter\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData2\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>973k</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>1.792</strong>\r\n            <span>tweets</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box linkedin\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData3\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>500+</strong>\r\n            <span>contacts</span>\r\n          </li>\r\n          <li>\r\n            <strong>292</strong>\r\n            <span>feeds</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div><!--/.col-->\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n      <div class=\"social-box google-plus\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas baseChart class=\"chart\"\r\n          [datasets]=\"socialChartData4\"\r\n          [labels]=\"socialChartLabels\"\r\n          [options]=\"socialChartOptions\"\r\n          [colors]=\"socialChartColours\"\r\n          [legend]=\"socialChartLegend\"\r\n          [chartType]=\"socialChartType\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\"></canvas>\r\n        </div>\r\n        <ul>\r\n          <li>\r\n            <strong>894</strong>\r\n            <span>followers</span>\r\n          </li>\r\n          <li>\r\n            <strong>92</strong>\r\n            <span>circles</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.social-box-->\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Traffic &amp; Sales\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-info\">\r\n                    <small class=\"text-muted\">New Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">9,123</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData1\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartInfo\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-danger\">\r\n                    <small class=\"text-muted\">Recuring Clients</small>\r\n                    <br>\r\n                    <strong class=\"h4\">22,643</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData2\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartDanger\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <ul class=\"horizontal-bars\">\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Monday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 34%\" aria-valuenow=\"34\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Tuesday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 94%\" aria-valuenow=\"94\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Wednesday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 12%\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 67%\" aria-valuenow=\"67\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Thursday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 91%\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Friday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 73%\" aria-valuenow=\"73\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Saturday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 53%\" aria-valuenow=\"53\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 82%\" aria-valuenow=\"82\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"title\">\r\n                    Sunday\r\n                  </div>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 9%\" aria-valuenow=\"9\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 69%\" aria-valuenow=\"69\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"legend\">\r\n                  <span class=\"badge badge-pill badge-info\"></span> <small>New clients</small> &nbsp; <span class=\"badge badge-pill badge-danger\"></span> <small>Recurring clients</small>\r\n                </li>\r\n              </ul>\r\n            </div><!--/.col-->\r\n            <div class=\"col-sm-6 col-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-warning\">\r\n                    <small class=\"text-muted\">Pageviews</small>\r\n                    <br>\r\n                    <strong class=\"h4\">78,623</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData1\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartWarning\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-success\">\r\n                    <small class=\"text-muted\">Organic</small>\r\n                    <br>\r\n                    <strong class=\"h4\">49,123</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData2\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartSuccess\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <ul class=\"horizontal-bars type-2\">\r\n                <li>\r\n                  <i class=\"icon-user\"></i>\r\n                  <span class=\"title\">Male</span>\r\n                  <span class=\"value\">43%</span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-user-female\"></i>\r\n                  <span class=\"title\">Female</span>\r\n                  <span class=\"value\">37%</span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 37%\" aria-valuenow=\"37\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <i class=\"icon-globe\"></i>\r\n                  <span class=\"title\">Organic Search</span>\r\n                  <span class=\"value\">191,235 <span class=\"text-muted small\">(56%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 56%\" aria-valuenow=\"56\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-facebook\"></i>\r\n                  <span class=\"title\">Facebook</span>\r\n                  <span class=\"value\">51,223 <span class=\"text-muted small\">(15%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-twitter\"></i>\r\n                  <span class=\"title\">Twitter</span>\r\n                  <span class=\"value\">37,564 <span class=\"text-muted small\">(11%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 11%\" aria-valuenow=\"11\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-linkedin\"></i>\r\n                  <span class=\"title\">LinkedIn</span>\r\n                  <span class=\"value\">27,319 <span class=\"text-muted small\">(8%)</span></span>\r\n                  <div class=\"bars\">\r\n                    <div class=\"progress progress-xs\">\r\n                      <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 8%\" aria-valuenow=\"8\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"divider text-center\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"show more\"><i class=\"icon-options\"></i></button>\r\n                </li>\r\n              </ul>\r\n            </div><!--/.col-->\r\n            <div class=\"col-sm-6 col-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout\">\r\n                    <small class=\"text-muted\">CTR</small>\r\n                    <br>\r\n                    <strong class=\"h4\">23%</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData1\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartDefault\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"callout callout-primary\">\r\n                    <small class=\"text-muted\">Bounce Rate</small>\r\n                    <br>\r\n                    <strong class=\"h4\">5%</strong>\r\n                    <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\r\n                      <canvas baseChart class=\"chart\"\r\n                      [datasets]=\"sparklineChartData2\"\r\n                      [labels]=\"sparklineChartLabels\"\r\n                      [options]=\"sparklineChartOptions\"\r\n                      [colors]=\"sparklineChartPrimary\"\r\n                      [legend]=\"sparklineChartLegend\"\r\n                      [chartType]=\"sparklineChartType\"\r\n                      (chartHover)=\"chartHovered($event)\"\r\n                      (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                  </div>\r\n                </div><!--/.col-->\r\n              </div><!--/.row-->\r\n              <hr class=\"mt-0\">\r\n              <ul class=\"icons-list\">\r\n                <li>\r\n                  <i class=\"icon-screen-desktop bg-primary\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">iMac 4k</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>1.924</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-screen-smartphone bg-info\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Samsung Galaxy Edge</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>1.224</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-screen-smartphone bg-warning\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">iPhone 6S</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>1.163</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-user bg-danger\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Premium accounts</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>928</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-social-spotify bg-success\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Spotify Subscriptions</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Sold this week</div>\r\n                    <strong>893</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-cloud-download bg-danger\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Ebook</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Downloads</div>\r\n                    <strong>121.924</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <i class=\"icon-camera bg-warning\"></i>\r\n                  <div class=\"desc\">\r\n                    <div class=\"title\">Photos</div>\r\n                    <small>Lorem ipsum dolor sit amet</small>\r\n                  </div>\r\n                  <div class=\"value\">\r\n                    <div class=\"small text-muted\">Uploaded</div>\r\n                    <strong>12.125</strong>\r\n                  </div>\r\n                  <div class=\"actions\">\r\n                    <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i></button>\r\n                  </div>\r\n                </li>\r\n                <li class=\"divider text-center\">\r\n                  <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"show more\"><i class=\"icon-options\"></i></button>\r\n                </li>\r\n              </ul>\r\n            </div><!--/.col-->\r\n          </div><!--/.row-->\r\n          <br>\r\n          <div class=\"table-responsive\"></div>\r\n          <table class=\"table table-responsive table-hover table-outline mb-0\">\r\n            <thead class=\"thead-default\">\r\n              <tr>\r\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\r\n                <th>User</th>\r\n                <th class=\"text-center\">Country</th>\r\n                <th>Usage</th>\r\n                <th class=\"text-center\">Payment Method</th>\r\n                <th>Activity</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/1.jpg\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Yiorgos Avraamu</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/USA.png\" alt=\"USA\" style=\"height:24px;\" src=\"assets/img/flags/USA.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>50%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>10 sec ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/2.jpg\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Avram Tarasios</div>\r\n                  <div class=\"small text-muted\">\r\n\r\n                    <span>Recurring</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/Brazil.png\" alt=\"Brazil\" style=\"height:24px;\" src=\"assets/img/flags/Brazil.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>10%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>5 minutes ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/3.jpg\">\r\n                    <span class=\"avatar-status badge-warning\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Quintin Ed</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/India.png\" alt=\"India\" style=\"height:24px;\" src=\"assets/img/flags/India.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>74%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 74%\" aria-valuenow=\"74\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>1 hour ago</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/4.jpg\">\r\n                    <span class=\"avatar-status badge-default\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Enéas Kwadwo</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/France.png\" alt=\"France\" style=\"height:24px;\" src=\"assets/img/flags/France.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>98%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 98%\" aria-valuenow=\"98\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last month</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/5.jpg\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Agapetus Tadeáš</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/Spain.png\" alt=\"Spain\" style=\"height:24px;\" src=\"assets/img/flags/Spain.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>22%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 22%\" aria-valuenow=\"22\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Last week</strong>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" src=\"assets/img/avatars/6.jpg\">\r\n                    <span class=\"avatar-status badge-danger\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>Friderik Dávid</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <img src=\"assets/img/flags/Poland.png\" alt=\"Poland\" style=\"height:24px;\" src=\"assets/img/flags/Poland.png\">\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>43%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>Yesterday</strong>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        // constructor( ) { }
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // dropdown buttons
        this.status = { isopen: false };
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: this.brandInfo,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        /* tslint:disable:max-line-length */
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        /* tslint:enable:max-line-length */
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    DashboardComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // convert Hex to RGBA
    DashboardComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
        return rgba;
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // mainChart
    DashboardComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        // generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map