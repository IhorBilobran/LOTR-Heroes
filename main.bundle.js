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

module.exports = "<div class=\"main\">\n\t<header>\n\t\t<button (click)='sidenav.toggle()' mat-button><mat-icon class=\"menu-button\">menu</mat-icon></button>\n\t\t<h1 class=\"lotr-font\">The Lord Of The Ring Heroes</h1>\n\t\t<button (click)='toggleVolume(volumeIcon, audio)' mat-icon-button>\n\t\t\t<mat-icon [innerText]='volumeCheck' #volumeIcon></mat-icon>\n\t\t</button>\n\t\t<audio loop autoplay muted #audio>\n\t\t\t <source src='./assets/music/bg-music.mp3' type=\"audio/mpeg\">\n\t\t</audio>\n\t</header>\n\n\t<div class=\"container\">\n\t\t<mat-sidenav-container>\n\n\t\t\t<mat-sidenav #sidenav mode=\"side\" opened='false'>\n\n\t\t\t\t<mat-list>\n\t\t\t\t\t<mat-list-item>\n\t\t\t\t\t\t<mat-form-field color='accent'>\n \t\t\t\t   \t\t<input matInput type=\"search\" color='accent' placeholder=\"Search\" [(ngModel)]='searchValue'>\n \t\t\t\t \t\t</mat-form-field>\n\t\t\t\t\t</mat-list-item>\n\n\t\t\t\t\t<ng-container *ngFor=\"let hero of list | async\">\n\t\t\t\t\t\t<mat-list-item *ngIf='search(hero.name)' (click)='setCurentHero(hero)' >\n\t\t\t\t\t\t\t<img class=\"avatar\" matListAvatar [src]=\"hero.photo\" alt=\"...\">\n\t\t\t\t\t\t\t<h3 matLine> {{hero.name}} </h3>\n\t\t\t\t\t    <p matLine>\n\t\t\t\t\t      <span class=\"elven-font\"> {{hero.name}} </span>\n\t\t\t\t\t    </p>\n\t\t\t\t\t\t\t<div class=\"img-ring\"></div>\n\t\t\t\t\t  </mat-list-item>\n\t\t\t\t  </ng-container>\n\t\t\t\t</mat-list>\n\n\t\t\t</mat-sidenav>\n\n\t\t\t<mat-sidenav-content >\n\t\t\t\t<app-hero-detail [check]='check' [currentHero]='currentHero'></app-hero-detail>\t\n\t\t\t</mat-sidenav-content>\n\n\t\t</mat-sidenav-container>\n\t</div>\n\n\t<footer>\n\t\t<app-feedback></app-feedback>\n\t</footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/***/ (function(module, exports) {

module.exports = ".img-ring {\n  width: 80px;\n  height: 50px;\n  background-image: url('ring.3dfb785db5c6d18c5d9f.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0;\n  -webkit-transition: opacity .2s ease-in;\n  transition: opacity .2s ease-in; }\n\n.main {\n  width: 100%;\n  height: 100vh;\n  color: #a0a0a0; }\n\nheader {\n  height: 150;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 15px 10px 15px 10px;\n  background-color: #232222;\n  border-bottom: 2px solid #ccc; }\n\n.container {\n  width: 100%;\n  height: 89vh; }\n\n.container mat-sidenav-container {\n    width: 100%;\n    height: 100%; }\n\n.container mat-sidenav-container mat-sidenav {\n      width: auto;\n      height: 100%; }\n\n.container mat-sidenav-container mat-sidenav::-webkit-scrollbar {\n        width: 12px;\n        background-color: #000; }\n\n.container mat-sidenav-container mat-sidenav::-webkit-scrollbar-thumb {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #555; }\n\n.container mat-sidenav-container mat-sidenav::-webkit-scrollbar-background {\n        background-color: #000; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item {\n        padding-left: 15px;\n        cursor: pointer;\n        color: #a0a0a0;\n        -webkit-transition: color .2s ease-in;\n        transition: color .2s ease-in; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item:hover {\n          color: #fff; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item:active .img-ring {\n          opacity: 1; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item .mat-list-avatar {\n          width: 55px;\n          height: 55px; }\n\n.container mat-sidenav-container mat-sidenav mat-list-item:first-child {\n          margin: 10px 0 10px 0; }\n\n.container mat-sidenav-container mat-sidenav-content .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #a0a0a0;\n      padding-top: 20px; }\n\n.container mat-sidenav-container mat-sidenav-content .container p {\n        font-size: 20px;\n        margin-bottom: 10px; }\n\n.container mat-sidenav-container mat-sidenav-content .container img {\n        margin-top: 30px;\n        margin-bottom: 30px;\n        max-width: 500px;\n        max-height: 500px;\n        border: 3px ridge #a0a0a0; }\n\napp-hero-detail {\n  width: 100%;\n  height: 100%; }\n"

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
        this.volume = 1.0;
        this.searchValue = '';
        this.list = HeroListService.list;
    }
    AppComponent.prototype.setCurentHero = function (obj) {
        this.currentHero = obj;
        this.check = false;
    };
    AppComponent.prototype.toggleVolume = function (icon, audio) {
        switch (icon._elementRef.nativeElement.innerText) {
            case 'volume_up':
                this.volume = 0.0;
                break;
            case 'volume_off':
                this.volume = 1.0;
                break;
        }
        return audio.volume = this.volume;
    };
    Object.defineProperty(AppComponent.prototype, "volumeCheck", {
        get: function () {
            if (this.volume < 1) {
                return 'volume_off';
            }
            return 'volume_up';
        },
        enumerable: true,
        configurable: true
    });
    // fix here
    AppComponent.prototype.search = function (name) {
        if (~name.toLowerCase().indexOf(this.searchValue)) {
            return true;
        }
        return false;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_list_service__ = __webpack_require__("./src/app/hero-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__ = __webpack_require__("./src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__ = __webpack_require__("./src/app/hero-detail/hero-detail.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__hero_list_service__["a" /* HeroListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <p>here will bee feedback component</p>\n</main>\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.sass":
/***/ (function(module, exports) {

module.exports = "main {\n  display: -ms-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__("./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__("./src/app/feedback/feedback.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\t<div class=\"container gif\" *ngIf='check'></div>\n\t<div class=\"container bg\" *ngIf='currentHero'>\n\t\t<h1 class=\"lotr-font\">{{currentHero.name}}</h1>\n\t\t<p>Race: {{currentHero.race}}</p>\n\t\t<p>Weapon: {{currentHero.weapon}}</p>\n\t\t<img [src]=\"currentHero.photo\" alt=\"hero-img\">\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.sass":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  width: 100%;\n  height: 100%; }\n\n.gif {\n  width: 100%;\n  height: 100%;\n  background-image: url('CTh42AK.gif');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #000; }\n\n.bg {\n  background-image: url('background.26412a9d569b996bff06.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a0a0a0;\n  padding-top: 20px; }\n\n.container p {\n    font-size: 20px;\n    margin-bottom: 10px; }\n\n.container img {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    max-width: 500px;\n    max-height: 500px;\n    border: 3px ridge #a0a0a0; }\n"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], HeroDetailComponent.prototype, "currentHero", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeroDetailComponent.prototype, "check", void 0);
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("./src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("./src/app/hero-detail/hero-detail.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
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
            return this.http.get('assets/hero-list.json')
                .map(function (element) { return element
                .sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); }); });
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
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatInputModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatInputModule */]
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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