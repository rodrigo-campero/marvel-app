(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_comics_comics_list_comics_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comics/comics-list/comics-list.component */ "./src/app/modules/comics/comics-list/comics-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _modules_comics_comics_list_comics_list_component__WEBPACK_IMPORTED_MODULE_3__["ComicsListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"section\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</section>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'marvel-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_comics_comics_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comics/comics.module */ "./src/app/modules/comics/comics.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/cart/cart.module */ "./src/app/modules/cart/cart.module.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _modules_comics_comics_module__WEBPACK_IMPORTED_MODULE_5__["ComicsModule"],
                _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_9__["CartModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/marvel-app/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/api-prefix.interceptor */ "./src/app/core/interceptors/api-prefix.interceptor.ts");
/* harmony import */ var _interceptors_fake_backend_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/fake-backend.interceptor */ "./src/app/core/interceptors/fake-backend.interceptor.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"]);
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
            ],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__["ApiPrefix"],
                    multi: true
                },
                _interceptors_fake_backend_interceptor__WEBPACK_IMPORTED_MODULE_7__["fakeBackendProvider"]
            ],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-marvel {\r\n  background-color: #ec1d24;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n  line-height: 16px;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n  /* background-image: linear-gradient(to right, #ec1d24 0%, #22262a); */\r\n  box-shadow: 0px 0px 7px 1px rgb(34, 38, 42, 0.55);\r\n}\r\n.navbar-item,\r\n.navbar-link {\r\n  color: #ffffff;\r\n}\r\n.navbar-marvel .navbar-link.is-active,\r\n.navbar-marvel .navbar-link:hover,\r\n.navbar-marvel a.navbar-item.is-active,\r\n.navbar-marvel a.navbar-item:hover {\r\n  background-color: #fafafa;\r\n  color: #22262a;\r\n}\r\n@media (min-width: 1025px) {\r\n  .navbar-marvel {\r\n    height: 75px;\r\n  }\r\n}\r\n.navbar-menu {\r\n  background-color: #ec1d24;\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-marvel\" role=\"navigation\" aria-label=\"main navigation\">\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\" href=\"https://www.marvel.com/\">\r\n      MARVEL\r\n    </a>\r\n\r\n    <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\"\r\n      data-target=\"navbarBasicExample\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"navbarBasicExample\" class=\"navbar-menu\">\r\n    <div class=\"navbar-start\">\r\n      <a class=\"navbar-item\" [routerLink]=\"['']\">\r\n        COMICS\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-end\">\r\n      <a [routerLink]=\"['/cart']\" class=\"navbar-item badge\" style=\"padding: 25px\" [attr.data-badge]=\"count\">\r\n        <span class=\"icon\">\r\n          <fa-icon icon=\"shopping-cart\" size=\"lg\"></fa-icon>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/checkout.service */ "./src/app/core/services/checkout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(checkoutService) {
        this.checkoutService = checkoutService;
        this.count = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.count = this.checkoutService.getCount();
        this.checkoutService.countEventBus().subscribe(function (res) {
            _this.count = res;
        });
        document.addEventListener('DOMContentLoaded', function () {
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            if ($navbarBurgers.length > 0) {
                $navbarBurgers.forEach(function (el) {
                    el.addEventListener('click', function () {
                        var target = el.dataset.target;
                        var $target = document.getElementById(target);
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                });
            }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_checkout_service__WEBPACK_IMPORTED_MODULE_1__["CheckoutService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/interceptors/api-prefix.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/api-prefix.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ApiPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefix", function() { return ApiPrefix; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ApiPrefix = /** @class */ (function () {
    function ApiPrefix() {
    }
    ApiPrefix.prototype.intercept = function (request, next) {
        request = request.clone({
            // tslint:disable-next-line:max-line-length
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/" + request.url + (request.url.includes('?') ? '&' : '?') + "apikey=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apikey + "&ts=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ts + "&hash=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].hash
        });
        return next.handle(request);
    };
    ApiPrefix = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ApiPrefix);
    return ApiPrefix;
}());



/***/ }),

/***/ "./src/app/core/interceptors/fake-backend.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/fake-backend.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mocks_discount_coupon_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mocks/discount-coupon.mock */ "./src/app/core/mocks/discount-coupon.mock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var discountCoupons = new _mocks_discount_coupon_mock__WEBPACK_IMPORTED_MODULE_4__["DiscountCoupon"]().createDb();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            if (request.url.includes('/coupon/validate') && request.method === 'POST') {
                var filteredCoupons = discountCoupons.filter(function (coupon) {
                    return coupon.number === parseInt(request.body.coupon, 10);
                });
                if (filteredCoupons.length) {
                    var coupon = filteredCoupons[0];
                    var body = {
                        number: coupon.number,
                        percentage: coupon.percentage,
                        isRare: coupon.isRare,
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Discount coupon not found' } });
                }
            }
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/core/mocks/discount-coupon.mock.ts":
/*!****************************************************!*\
  !*** ./src/app/core/mocks/discount-coupon.mock.ts ***!
  \****************************************************/
/*! exports provided: DiscountCoupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountCoupon", function() { return DiscountCoupon; });
var DiscountCoupon = /** @class */ (function () {
    function DiscountCoupon() {
    }
    DiscountCoupon.prototype.createDb = function () {
        var discountCoupons = [
            { number: 812646, percentage: 10, isRare: true },
            { number: 919387, percentage: 15, isRare: false },
            { number: 818373, percentage: 20, isRare: false },
            { number: 948483, percentage: 25, isRare: true },
            { number: 101929, percentage: 30, isRare: false },
            { number: 797879, percentage: 27, isRare: false },
            { number: 939383, percentage: 22, isRare: false },
            { number: 921219, percentage: 16, isRare: true },
            { number: 333992, percentage: 13, isRare: false },
            { number: 494884, percentage: 5, isRare: true },
            { number: 559853, percentage: 100, isRare: false }
        ];
        return discountCoupons;
    };
    return DiscountCoupon;
}());



/***/ }),

/***/ "./src/app/core/services/checkout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/checkout.service.ts ***!
  \***************************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutService = /** @class */ (function () {
    function CheckoutService() {
        this.storageName = 'cart';
        this.countCar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CheckoutService.prototype.getStorage = function () {
        var comics = JSON.parse(localStorage.getItem(this.storageName));
        if (comics === null || comics === undefined) {
            comics = {};
        }
        return comics;
    };
    CheckoutService.prototype.clearStorage = function () {
        localStorage.removeItem(this.storageName);
    };
    CheckoutService.prototype.add = function (comic) {
        this.comics = this.getStorage();
        this.comics[comic.id] = { comic: comic, count: 1 };
        localStorage.setItem(this.storageName, JSON.stringify(this.comics));
        this.setCount();
    };
    CheckoutService.prototype.changeCount = function (id, count) {
        this.comics = this.getStorage();
        console.log(count);
        if (count == 0) {
            delete this.comics[id];
        }
        else if (this.comics[id]) {
            this.comics[id].count = count;
        }
        localStorage.setItem(this.storageName, JSON.stringify(this.comics));
        this.setCount();
    };
    CheckoutService.prototype.remove = function (id) {
        this.comics = this.getStorage();
        if (this.comics[id]) {
            delete this.comics[id];
        }
        localStorage.setItem(this.storageName, JSON.stringify(this.comics));
        this.setCount();
    };
    CheckoutService.prototype.countEventBus = function () {
        return this.countCar;
    };
    CheckoutService.prototype.getCount = function () {
        this.comics = this.getStorage();
        return Object.keys(this.comics).length;
    };
    CheckoutService.prototype.setCount = function () {
        this.countCar.emit(this.getCount());
    };
    CheckoutService.prototype.isInTheCart = function (id) {
        var comics = this.getStorage();
        return comics[id] !== undefined && comics[id] !== null;
    };
    CheckoutService.prototype.getCart = function () {
        var comics = this.getStorage();
        return comics;
    };
    CheckoutService.prototype.closeOrder = function () {
        this.clearStorage();
        this.setCount();
    };
    CheckoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/core/services/comics.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/comics.service.ts ***!
  \*************************************************/
/*! exports provided: ComicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsService", function() { return ComicsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicsService = /** @class */ (function () {
    function ComicsService(http) {
        this.http = http;
    }
    ComicsService.prototype.getAll = function (searchText, limit, offset) {
        return this.http.get("comics?" + (searchText ? "titleStartsWith=" + searchText + "&" : '') + "limit=" + limit + "&offset=" + offset * limit);
    };
    ComicsService.prototype.getById = function (id) {
        return this.http.get("comics/" + id);
    };
    ComicsService.prototype.getCharacters = function (id) {
        return this.http.get("comics/" + id + "/characters");
    };
    ComicsService.prototype.getCreators = function (id) {
        return this.http.get("comics/" + id + "/creators");
    };
    ComicsService.prototype.getEvents = function (id) {
        return this.http.get("comics/" + id + "/events");
    };
    ComicsService.prototype.getStories = function (id) {
        return this.http.get("comics/" + id + "/stories");
    };
    ComicsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ComicsService);
    return ComicsService;
}());



/***/ }),

/***/ "./src/app/core/services/discount-coupon.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/discount-coupon.service.ts ***!
  \**********************************************************/
/*! exports provided: DiscountCouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountCouponService", function() { return DiscountCouponService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscountCouponService = /** @class */ (function () {
    function DiscountCouponService(http) {
        this.http = http;
    }
    DiscountCouponService.prototype.validateCoupon = function (couponNumber) {
        return this.http.post('coupon/validate', { coupon: couponNumber });
    };
    DiscountCouponService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DiscountCouponService);
    return DiscountCouponService;
}());



/***/ }),

/***/ "./src/app/modules/cart/cart-details/cart-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/cart/cart-details/cart-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/cart/cart-details/cart-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/cart/cart-details/cart-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\">\r\n  <div class=\"column is-full\">\r\n    <h6 class=\"title is-4\">My Cart</h6>\r\n  </div>\r\n  <div class=\"column is-three-quarters\">\r\n    <div class=\"columns border-bottom-marvel\">\r\n      <div class=\"column is-two-thirds\">\r\n        <p class=\"title is-6\">Products</p>\r\n      </div>\r\n      <div class=\"column\">\r\n        <p class=\"title is-6\">Quantity</p>\r\n      </div>\r\n      <div class=\"column\">\r\n        <p class=\"title is-6\">Price</p>\r\n      </div>\r\n      <div class=\"column\">\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"columns border-bottom-marvel\" style=\"border-bottom-color: white; margin: 0;\"\r\n      *ngFor=\"let product of products | keyvalue\">\r\n      <div class=\"column is-two-thirds\">{{product.value.comic.title}}</div>\r\n      <div class=\"column\"><input class=\"input\" type=\"text\" [value]=\"product.value.count\" (change)=\"changeQuantity(product.key, $event.target.value)\"></div>\r\n      <div class=\"column\">{{product.value.comic.prices[0].price * product.value.count}}</div>\r\n      <div class=\"column\">\r\n        <a class=\"button\" (click)=\"remove(product.key)\">\r\n          <span class=\"icon\">\r\n            <fa-icon icon=\"trash\" size=\"lg\"></fa-icon>\r\n          </span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column\">\r\n    <div class=\"columns is-multiline\">\r\n      <div class=\"column is-full border-bottom-marvel\">\r\n        <h6 class=\"title is-6\">Resume</h6>\r\n      </div>\r\n      <div class=\"column is-full\">\r\n        <input class=\"input\" type=\"text\" placeholder=\"Discount Coupon\" [(ngModel)]=\"discountCoupon\">\r\n        <a class=\"button is-small is-fullwidth\" (click)=\"getDiscount()\">Add</a>\r\n      </div>\r\n      <div class=\"column is-half\" *ngIf=\"discountPercentage\">Discount</div>\r\n      <div class=\"column\" *ngIf=\"discountPercentage\">{{discountPercentage}}%</div>\r\n      <div class=\"column is-half\">Total</div>\r\n      <div class=\"column\">${{total}}</div>\r\n      <div class=\"column is-full\">\r\n        <button class=\"button is-fullwidth\" (click)=\"closeOrder()\">\r\n          Close Order\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/cart/cart-details/cart-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cart/cart-details/cart-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/checkout.service */ "./src/app/core/services/checkout.service.ts");
/* harmony import */ var src_app_core_services_discount_coupon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/discount-coupon.service */ "./src/app/core/services/discount-coupon.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(checkoutService, discountCouponService, toastr, router) {
        this.checkoutService = checkoutService;
        this.discountCouponService = discountCouponService;
        this.toastr = toastr;
        this.router = router;
        this.total = 0;
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        this.products = this.checkoutService.getCart();
        this.getTotal();
    };
    CartDetailsComponent.prototype.getTotal = function () {
        if (this.products && Object.keys(this.products).length > 0) {
            var money = 0;
            for (var key in this.products) {
                if (this.products.hasOwnProperty(key)) {
                    money += this.products[key].comic.prices[0].price * this.products[key].count;
                }
            }
            this.total = money;
            this.total = parseFloat(this.total.toFixed(2));
        }
        else {
            this.total = 0;
        }
    };
    CartDetailsComponent.prototype.getDiscount = function () {
        var _this = this;
        if (!this.discounted && this.discountCoupon) {
            this.discountCouponService.validateCoupon(this.discountCoupon).subscribe(function (coupon) {
                if (coupon) {
                    _this.discountPercentage = coupon.percentage;
                    _this.total = _this.total - ((_this.total * _this.discountPercentage) / 100);
                    _this.total = parseFloat(_this.total.toFixed(2));
                    _this.discountCoupon = null;
                    _this.discounted = true;
                }
            }, function (error) {
                _this.toastr.errorToastr(error.error.message, 'Oops!', { position: 'bottom-right' });
                _this.discountCoupon = null;
            });
        }
    };
    CartDetailsComponent.prototype.closeOrder = function () {
        if (this.products && Object.keys(this.products).length > 0) {
            this.checkoutService.closeOrder();
            this.toastr.successToastr('Order completed, thank you!', 'Success!', { position: 'bottom-right' });
            this.router.navigate(['']);
        }
    };
    CartDetailsComponent.prototype.remove = function (id) {
        this.checkoutService.remove(id);
        this.products = this.checkoutService.getCart();
        this.getTotal();
        this.toastr.successToastr('Item removed!', 'Success!', { position: 'bottom-right' });
    };
    CartDetailsComponent.prototype.changeQuantity = function (id, count) {
        this.checkoutService.changeCount(id, count);
        this.products = this.checkoutService.getCart();
        this.getTotal();
    };
    CartDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-details',
            template: __webpack_require__(/*! ./cart-details.component.html */ "./src/app/modules/cart/cart-details/cart-details.component.html"),
            styles: [__webpack_require__(/*! ./cart-details.component.css */ "./src/app/modules/cart/cart-details/cart-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_services_checkout_service__WEBPACK_IMPORTED_MODULE_1__["CheckoutService"],
            src_app_core_services_discount_coupon_service__WEBPACK_IMPORTED_MODULE_2__["DiscountCouponService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/cart/cart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/cart/cart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-details/cart-details.component */ "./src/app/modules/cart/cart-details/cart-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'cart', component: _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_2__["CartDetailsComponent"]
    }
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/cart/cart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/cart/cart.module.ts ***!
  \*********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/modules/cart/cart-routing.module.ts");
/* harmony import */ var _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-details/cart-details.component */ "./src/app/modules/cart/cart-details/cart-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["fas"]);
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CartRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
            ],
            declarations: [_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_3__["CartDetailsComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/modules/comics/comics-details/comics-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comics/comics-details/comics-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/comics/comics-details/comics-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comics/comics-details/comics-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\" *ngIf=\"comic\">\r\n  <div class=\"column is-four-fifths is-full-mobile\">\r\n    <h1 class=\" title is-1 text-center\">{{comic.title}}\r\n      <a *ngIf=\"!isInTheCart(comic.id)\" (click)=\"addToCar(comic)\" class=\"button is-danger is-rounded button-float\">\r\n        <span class=\"icon\">\r\n          <fa-icon icon=\"cart-plus\" size=\"lg\"></fa-icon>\r\n        </span>\r\n      </a>\r\n    </h1>\r\n    <div class=\"columns is-multiline\">\r\n      <div class=\"column is-full\">\r\n        <div class=\"tabs is-centered\">\r\n          <ul *ngIf=\"tabs\">\r\n            <li *ngFor=\"let tab of tabs | keyvalue\" [ngClass]=\"{'is-active': tab.value}\" (click)=\"changeTab(tab.key)\">\r\n              <a>{{tab.key}}</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"column is-full\" [innerHTML]=\"comic.description\" *ngIf=\"getCurrentTab('About')\">\r\n      </div>\r\n      <div class=\"column is-full\" *ngIf=\"(!comic || !comic.description) && getCurrentTab('About')\">\r\n        <p class=\"subtitle is-6 text-center\">No results found.</p>\r\n      </div>\r\n      <div class=\"column is-full\">\r\n        <div *ngIf=\"characters && characters.length > 0 && getCurrentTab('Characters')\">\r\n          <div class=\"columns is-multiline\">\r\n            <div class=\"column is-one-fifth\" *ngFor=\"let character of characters\">\r\n              <div class=\"card\">\r\n                <div class=\"card-image\">\r\n                  <figure class=\"image is-4by3\">\r\n                    <img [src]=\"character.thumbnail.path + '.' + character.thumbnail.extension\" [alt]=\"character.name\">\r\n                  </figure>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <h6 class=\"title is-6 text-ellipsis\">{{character.name}}</h6>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column is-full\" *ngIf=\"(!characters || characters.length == 0) && getCurrentTab('Characters')\">\r\n        <p class=\"subtitle is-6 text-center\">No results found.</p>\r\n      </div>\r\n      <div class=\"column is-full\" *ngIf=\"creators && creators.length > 0 && getCurrentTab('Creators')\">\r\n        <div class=\"columns is-multiline\">\r\n          <div class=\"column is-one-fifth\" *ngFor=\"let creator of creators\">\r\n            <div class=\"card\">\r\n              <div class=\"card-image\">\r\n                <figure class=\"image is-4by3\">\r\n                  <img [src]=\"creator.thumbnail.path + '.' + creator.thumbnail.extension\" [alt]=\"creator.fullName\">\r\n                </figure>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <h6 class=\"title is-6 text-ellipsis\">{{creator.fullName}}</h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column is-full\" *ngIf=\"(!creators || creators.length == 0) && getCurrentTab('Creators')\">\r\n        <p class=\"subtitle is-6 text-center\">No results found.</p>\r\n      </div>\r\n      <div class=\"column is-full\" *ngIf=\"stories && stories.length > 0 && getCurrentTab('Stories')\">\r\n        <div class=\"columns is-multiline\">\r\n          <div class=\"column is-one-fifth\">\r\n            <ol type=\"1\">\r\n              <li *ngFor=\"let story of stories\">{{story.title}}</li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"column is-full\" *ngIf=\"(!stories || stories.length == 0) && getCurrentTab('Stories')\">\r\n        <p class=\"subtitle is-6 text-center\">No results found.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column is-full-mobile\">\r\n    <figure class=\"image is-1by2\">\r\n      <img [src]=\"comic.thumbnail.path + '.' + comic.thumbnail.extension\" [alt]=\"comic.name\">\r\n    </figure>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/comics/comics-details/comics-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comics/comics-details/comics-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComicsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsDetailsComponent", function() { return ComicsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_comics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/comics.service */ "./src/app/core/services/comics.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/checkout.service */ "./src/app/core/services/checkout.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComicsDetailsComponent = /** @class */ (function () {
    function ComicsDetailsComponent(router, route, comicsService, checkoutService, toastr) {
        this.router = router;
        this.route = route;
        this.comicsService = comicsService;
        this.checkoutService = checkoutService;
        this.toastr = toastr;
    }
    ComicsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tabs = {
            About: true,
            Characters: false,
            Creators: false,
            Stories: false
        };
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                var that_1 = _this;
                that_1.comicsService.getById(id).subscribe(function (res) {
                    that_1.comic = res.data.results[0];
                    that_1.comicsService
                        .getCharacters(that_1.comic.id)
                        .subscribe(function (characters) {
                        that_1.characters = characters.data.results;
                    });
                    that_1.comicsService.getCreators(that_1.comic.id).subscribe(function (creators) {
                        that_1.creators = creators.data.results;
                    });
                    that_1.comicsService.getStories(that_1.comic.id).subscribe(function (stories) {
                        that_1.stories = stories.data.results;
                    });
                });
            }
        });
    };
    ComicsDetailsComponent.prototype.changeTab = function (tab) {
        for (var key in this.tabs) {
            if (this.tabs.hasOwnProperty(key)) {
                this.tabs[key] = key === tab;
            }
        }
    };
    ComicsDetailsComponent.prototype.getCurrentTab = function (tab) {
        return this.tabs[tab];
    };
    ComicsDetailsComponent.prototype.addToCar = function (comic) {
        var that = this;
        that.checkoutService.add(comic);
        that.toastr.successToastr('Comic added to cart', 'Success!', { position: 'bottom-right' });
    };
    ComicsDetailsComponent.prototype.isInTheCart = function (id) {
        return this.checkoutService.isInTheCart(id);
    };
    ComicsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comics-details',
            template: __webpack_require__(/*! ./comics-details.component.html */ "./src/app/modules/comics/comics-details/comics-details.component.html"),
            styles: [__webpack_require__(/*! ./comics-details.component.css */ "./src/app/modules/comics/comics-details/comics-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_services_comics_service__WEBPACK_IMPORTED_MODULE_1__["ComicsService"],
            src_app_core_services_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], ComicsDetailsComponent);
    return ComicsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/comics/comics-list/comic-filter.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/comics/comics-list/comic-filter.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: ComicFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicFilterPipe", function() { return ComicFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_comics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/comics.service */ "./src/app/core/services/comics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComicFilterPipe = /** @class */ (function () {
    function ComicFilterPipe(comicsService) {
        this.comicsService = comicsService;
    }
    ComicFilterPipe.prototype.transform = function (items, searchText) {
        this.comicsService.getAll(searchText, 10, 0).subscribe(function (res) {
            items = res.data.results;
            return items;
        });
    };
    ComicFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'comicFilter'
        }),
        __metadata("design:paramtypes", [src_app_core_services_comics_service__WEBPACK_IMPORTED_MODULE_1__["ComicsService"]])
    ], ComicFilterPipe);
    return ComicFilterPipe;
}());



/***/ }),

/***/ "./src/app/modules/comics/comics-list/comics-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comics/comics-list/comics-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rare-comic-marvel {\r\n  box-shadow: 0 2px 3px rgb(255, 0, 9), 0 0 0 1px rgba(0, 0, 0, 0.1);\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/comics/comics-list/comics-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/comics/comics-list/comics-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\r\n  <div class=\"column is-4 is-offset-8\">\r\n    <div class=\"control is-loading\" [ngClass]=\"{'is-loading': isLoading}\">\r\n      <input class=\"input\" (keyup)=\"search()\" type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchText\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"columns is-multiline\" [ngClass]=\"{'lds-hourglass': isPreLoading}\">\r\n  <div class=\"column is-one-fifth\" *ngFor=\"let comic of comics\">\r\n    <div class=\"card\" [ngClass]=\"{'rare-comic-marvel': comic.isRare}\">\r\n      <div class=\"card-image\">\r\n        <figure class=\"image is-4by3\">\r\n          <img [src]=\"comic.thumbnail.path + '.' + comic.thumbnail.extension\" alt=\"Placeholder image\" />\r\n        </figure>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p class=\"title is-6 text-ellipsis\">\r\n          {{ comic.title }}\r\n        </p>\r\n      </div>\r\n      <footer class=\"card-footer\">\r\n        <a [routerLink]=\"['comics/details', comic.id]\" class=\"card-footer-item\">Details</a>\r\n        <a class=\"card-footer-item\" (click)=\"addToCar(comic)\" *ngIf=\"!isInTheCart(comic.id)\">Add to cart</a>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"buttons is-centered\" *ngIf=\"comics && comics.length > 0\">\r\n  <button class=\"button\" [ngClass]=\"{'is-loading': isLoading}\" (click)=\"showMore()\">Show more</button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/comics/comics-list/comics-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/comics/comics-list/comics-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComicsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsListComponent", function() { return ComicsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_comics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/comics.service */ "./src/app/core/services/comics.service.ts");
/* harmony import */ var src_app_core_services_checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/checkout.service */ "./src/app/core/services/checkout.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComicsListComponent = /** @class */ (function () {
    function ComicsListComponent(comicsService, checkoutService, toastr) {
        this.comicsService = comicsService;
        this.checkoutService = checkoutService;
        this.toastr = toastr;
        this.limit = 10;
        this.offset = 0;
    }
    ComicsListComponent.prototype.ngOnInit = function () {
        var that = this;
        that.isPreLoading = true;
        this.comicsService.getAll(that.searchText, that.limit, that.offset).subscribe(function (res) {
            that.comics = res.data.results;
            that.setRare();
            that.isPreLoading = false;
        });
    };
    ComicsListComponent.prototype.getRareComic = function () {
        return Math.floor(Math.random() * this.limit) + (this.offset * this.limit);
    };
    ComicsListComponent.prototype.setRare = function () {
        if (this.comics && this.comics.length > 0) {
            this.comics[this.getRareComic()].isRare = true;
        }
    };
    ComicsListComponent.prototype.search = function () {
        var that = this;
        that.isLoading = true;
        that.offset = 0;
        that.comicsService.getAll(that.searchText, that.limit, that.offset).subscribe(function (res) {
            that.comics = res.data.results;
            that.setRare();
            that.isLoading = false;
        });
    };
    ComicsListComponent.prototype.showMore = function () {
        var that = this;
        that.isLoading = true;
        that.offset += 1;
        that.comicsService.getAll(that.searchText, that.limit, that.offset).subscribe(function (res) {
            that.comics = that.comics.concat(res.data.results);
            that.setRare();
            that.isLoading = false;
        });
    };
    ComicsListComponent.prototype.addToCar = function (comic) {
        var that = this;
        that.checkoutService.add(comic);
        that.toastr.successToastr('Comic added to cart', 'Success!', { position: 'bottom-right' });
    };
    ComicsListComponent.prototype.isInTheCart = function (id) {
        return this.checkoutService.isInTheCart(id);
    };
    ComicsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comics-list',
            template: __webpack_require__(/*! ./comics-list.component.html */ "./src/app/modules/comics/comics-list/comics-list.component.html"),
            styles: [__webpack_require__(/*! ./comics-list.component.css */ "./src/app/modules/comics/comics-list/comics-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_core_services_comics_service__WEBPACK_IMPORTED_MODULE_1__["ComicsService"],
            src_app_core_services_checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], ComicsListComponent);
    return ComicsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/comics/comics-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/comics/comics-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ComicsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsRoutingModule", function() { return ComicsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comics_list_comics_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comics-list/comics-list.component */ "./src/app/modules/comics/comics-list/comics-list.component.ts");
/* harmony import */ var _comics_details_comics_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comics-details/comics-details.component */ "./src/app/modules/comics/comics-details/comics-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'comics',
        children: [
            { path: '', component: _comics_list_comics_list_component__WEBPACK_IMPORTED_MODULE_2__["ComicsListComponent"] },
            { path: 'details/:id', component: _comics_details_comics_details_component__WEBPACK_IMPORTED_MODULE_3__["ComicsDetailsComponent"] },
        ]
    }
];
var ComicsRoutingModule = /** @class */ (function () {
    function ComicsRoutingModule() {
    }
    ComicsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ComicsRoutingModule);
    return ComicsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/comics/comics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/comics/comics.module.ts ***!
  \*************************************************/
/*! exports provided: ComicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicsModule", function() { return ComicsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _comics_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comics-routing.module */ "./src/app/modules/comics/comics-routing.module.ts");
/* harmony import */ var _comics_list_comics_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comics-list/comics-list.component */ "./src/app/modules/comics/comics-list/comics-list.component.ts");
/* harmony import */ var _comics_details_comics_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comics-details/comics-details.component */ "./src/app/modules/comics/comics-details/comics-details.component.ts");
/* harmony import */ var _comics_list_comic_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comics-list/comic-filter.pipe */ "./src/app/modules/comics/comics-list/comic-filter.pipe.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fas"]);
var ComicsModule = /** @class */ (function () {
    function ComicsModule() {
    }
    ComicsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _comics_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComicsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
            ],
            declarations: [_comics_list_comics_list_component__WEBPACK_IMPORTED_MODULE_4__["ComicsListComponent"], _comics_details_comics_details_component__WEBPACK_IMPORTED_MODULE_5__["ComicsDetailsComponent"], _comics_list_comic_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["ComicFilterPipe"]]
        })
    ], ComicsModule);
    return ComicsModule;
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
    production: false,
    apiUrl: 'https://gateway.marvel.com/v1/public',
    apikey: '10c21ad55d21410ebae3100bdf343c22',
    ts: '1502840200286',
    hash: '525d13f5c677c793fab1bbaf34f516fd'
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

module.exports = __webpack_require__(/*! C:\Git\marvel-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map