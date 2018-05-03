webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"main\">\r\n\t<header>\r\n\t\t<button (click)='sidenav.toggle()' mat-button><mat-icon class=\"menu-button\">menu</mat-icon></button>\r\n\t\t<h1 class=\"lotr-font\">The Lord Of The Ring Heroes</h1>\r\n\t\t<!-- переключатель звуку по кліку в інтерполяційних дужках значення яке буде тоглитись з компонента -->\r\n\t\t<!-- <mat-icon>{{'volume_up'}}</mat-icon> -->\r\n\t\t<button mat-icon-button><mat-icon>{{'volume_off'}}</mat-icon></button>\r\n\t</header>\r\n\r\n\t<div class=\"container\">\r\n\t\t<mat-sidenav-container>\r\n\r\n\t\t\t<mat-sidenav #sidenav mode=\"side\" opened='false'>\r\n\t\t\t\t<!-- <li *ngFor='let hero of list | async'>\r\n\t\t\t\t\t{{hero.name}} (<span class=\"elven-font\">{{hero.name}}</span>)\r\n\t\t\t\t</li>\r\n\t\t\t\t -->\r\n\t\t\t\t<mat-list>\r\n\t\t\t\t  <mat-list-item (click)='setCurentHero(hero)' *ngFor=\"let hero of list | async\" >\r\n\t\t\t\t\t\t<img class=\"avatar\" matListAvatar [src]=\"hero.photo\" alt=\"...\">\r\n\t\t\t\t\t\t\t<!-- <div (click)='setCurentHero(hero)'> -->\r\n\t\t\t\t\t\t\t\t<h3 matLine> {{hero.name}} </h3>\r\n\t\t\t\t\t\t    <p matLine>\r\n\t\t\t\t\t\t      <span class=\"elven-font\"> {{hero.name}} </span>\r\n\t\t\t\t\t\t    </p>\r\n\t\t\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t\t\t<div class=\"img-ring\"></div>\r\n\t\t\t\t  </mat-list-item>\r\n\t\t\t\t</mat-list>\r\n\r\n\t\t\t</mat-sidenav>\r\n\r\n\t\t\t<mat-sidenav-content >\r\n\t\t\t\t<div class=\"container gif\" *ngIf='check'>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"container bg\" *ngIf='currentHero'>\r\n\t\t\t\t\t<!-- <div class=\"hero-description\"> -->\r\n\t\t\t\t\t\t<h1 class=\"lotr-font\">{{currentHero.name}}</h1>\r\n\t\t\t\t\t\t<p>Race: {{currentHero.race}}</p>\r\n\t\t\t\t\t\t<p><mat-icon></mat-icon> {{currentHero.weapon}} <mat-icon></mat-icon> </p>\r\n\t\t\t\t\t\t<img [src]=\"currentHero.photo\" alt=\"hero-img\">\r\n\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t</div>\r\n\t\t\t</mat-sidenav-content>\r\n\r\n\t\t</mat-sidenav-container>\r\n\t</div>\r\n</div>\r\n\r\n<mat-sidenav _ngcontent-c0=\"\" class=\"mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform\r\n mat-drawer-side ng-star-inserted\" mode=\"side\" opened=\"true\" tabindex=\"-1\" ng-reflect-mode=\"side\"\r\n ng-reflect-opened=\"true\" style=\"transform: translate3d(0px, 0px, 0px); visibility: visible;\">\r\n\r\n<mat-sidenav _ngcontent-c0=\"\" class=\"mat-drawer mat-sidenav ng-tns-c4-0 ng-trigger ng-trigger-transform\r\n mat-drawer-side ng-star-inserted\" mode=\"side\" opened=\"true\" tabindex=\"-1\" ng-reflect-mode=\"side\"\r\n ng-reflect-opened=\"true\" style=\"transform: translate3d(0px, 0px, 0px); visibility: visible;\">\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports) {

module.exports = ".gif {\n  background-image: url('CTh42AK.51177e8b5bac1a787bd0.gif');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #000; }\n\n.bg {\n  background-image: url('background.26412a9d569b996bff06.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.img-ring {\n  width: 80px;\n  height: 50px;\n  background-image: url('ring.3dfb785db5c6d18c5d9f.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0;\n  -webkit-transition: opacity .2s ease-in;\n  transition: opacity .2s ease-in; }\n\n.main {\n  width: 100%;\n  height: 100vh;\n  color: #a0a0a0; }\n\nheader {\n  height: 150;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px 10px 15px 10px;\n  background-color: #232222;\n  border-bottom: 2px solid #ccc; }\n\n.container {\n  width: 100%;\n  height: 90vh; }\n\n.container mat-sidenav-container {\n    width: 100%;\n    height: 100%; }\n\n.container mat-sidenav-container mat-sidenav {\n      width: auto;\n      height: 100%; }\n\n.container mat-sidenav-container mat-sidenav::-webkit-scrollbar {\n        width: 12px;\n        background-color: #000; }\n\n.container mat-sidenav-container mat-sidenav::-webkit-scrollbar-thumb {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #555; }\n\n.container mat-sidenav-container mat-sidenav::-webkit-scrollbar-background {\n        background-color: #000; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item {\n        cursor: pointer;\n        color: #a0a0a0;\n        -webkit-transition: color .2s ease-in;\n        transition: color .2s ease-in; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item:hover {\n          color: #fff; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item:active .img-ring {\n          opacity: 1; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item .mat-list-avatar {\n          width: 55px;\n          height: 55px; }\n\n.container mat-sidenav-container mat-sidenav-content .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #a0a0a0;\n      padding-top: 20px; }\n\n.container mat-sidenav-container mat-sidenav-content .container p {\n        font-size: 20px;\n        margin-bottom: 10px; }\n\n.container mat-sidenav-container mat-sidenav-content .container img {\n        margin-top: 30px;\n        margin-bottom: 30px;\n        max-width: 500px;\n        max-height: 500px;\n        border: 3px ridge #a0a0a0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_list_service__ = __webpack_require__("./src/app/hero-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(HeroListService) {
        this.HeroListService = HeroListService;
        this.check = true;
        this.list = HeroListService.list;
    }
    AppComponent.prototype.setCurentHero = function (obj) {
        console.log(obj);
        this.currentHero = obj;
        this.check = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__hero_list_service__["a" /* HeroListService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hero_list_service__ = __webpack_require__("./src/app/hero-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_material_module__["a" /* MaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__hero_list_service__["a" /* HeroListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hero-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroListService = /** @class */ (function () {
    function HeroListService(http) {
        this.http = http;
    }
    Object.defineProperty(HeroListService.prototype, "list", {
        get: function () {
            return this.http.get('assets/hero-list.json').map(function (element) { return element; });
        },
        enumerable: true,
        configurable: true
    });
    HeroListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeroListService);
    return HeroListService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSidenavModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSidenavModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map