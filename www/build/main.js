webpackJsonp([0],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_settings_menu_settings__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_aboutPage__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_aboutPage__["a" /* AboutPage */]);
    };
    HomePage.prototype.onPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__menu_settings_menu_settings__["a" /* MenuSettings */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/james/Git/Ionic/IonicMenu/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n    <button ion-button ion-only menuToggle="menu1" start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n\n    <button ion-button ion-only menuToggle="menu2" end>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <button ion-button ion-only menuToggle="menu3" end>\n      <ion-icon name="home"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n\n  <button ion-button block (click)="onAbout()"> About Page</button>\n  <button ion-button block color="danger" (click)="onPage()"> Settings Page</button>\n</ion-content>\n'/*ion-inline-end:"/home/james/Git/Ionic/IonicMenu/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_menu_settings_menu_settings__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_about_aboutPage__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_about_aboutPage__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_menu_settings_menu_settings__["a" /* MenuSettings */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                platforms: {
                    ios: {
                        menuType: 'reveal'
                    },
                    android: {
                        menuType: 'overlay'
                    },
                    windows: {
                        menuType: 'push'
                    }
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_about_aboutPage__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_menu_settings_menu_settings__["a" /* MenuSettings */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_about_aboutPage__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Home Page', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_0__pages_about_aboutPage__["a" /* AboutPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page.component;
    };
    MyApp.prototype.onOpen = function () {
        console.log("Menu opened!");
    };
    MyApp.prototype.onClose = function () {
        console.log("Menu closed!");
    };
    MyApp.prototype.onDrag = function () {
        console.log("Menu dragged!");
    };
    MyApp.prototype.ngAfterViewInit = function () {
        this.menuCtrl.open('menu1');
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/james/Git/Ionic/IonicMenu/src/app/app.html"*/'\n<!-- primeiro menu, com todas as configurações -->\n<ion-menu [content] = "myContent" id="menu1" enabled="true" persistent="true" side="left" swipeEnabled="true" (ionOpen)="onOpen()" (ionClose)="onClose()" (ionDrag)="onDrag()">\n    <ion-header>\n        <ion-title>\n            Menu 1\n        </ion-title>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item *ngFor = "let p of pages" (click)="openPage(p)" menuClose>\n                {{ p.title }}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n<!-- segundo menu -->\n<ion-menu [content] = "myContent" id="menu2" enabled="false" side="right"> \n    <ion-header>\n        <ion-title>\n            Menu 2\n        </ion-title>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-item>Item 1</ion-item>\n            <ion-item>Item 2</ion-item>\n            <ion-item>Item 3</ion-item>\n            <ion-item>Item 4</ion-item>\n            <ion-item>Item 5</ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!--  terceiro menu -->\n<ion-menu [content] = "myContent" id="menu3" side="right">\n    <ion-header>\n        <ion-title>\n            Menu 3\n        </ion-title>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <ion-item>Menu3 - Item 1</ion-item>\n            <ion-item>Menu3 - Item 2</ion-item>\n            <ion-item>Menu3 - Item 3</ion-item>\n            <ion-item>Menu3 - Item 4</ion-item>\n            <ion-item>Menu3 - Item 5</ion-item>\n            <ion-item>Menu3 - Item 6</ion-item>\n            <ion-item>Menu3 - Item 7</ion-item>\n            <ion-item>Menu3 - Item 8</ion-item>\n            <button ion-item menuClose="menu3">Close</button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #myContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/james/Git/Ionic/IonicMenu/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad About');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/james/Git/Ionic/IonicMenu/src/pages/about/aboutPage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button ion-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/james/Git/Ionic/IonicMenu/src/pages/about/aboutPage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=aboutPage.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuSettings = (function () {
    function MenuSettings(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    MenuSettings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuSettings');
    };
    MenuSettings.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'menu3');
        this.menuCtrl
            .enable(true, 'menu2')
            .open();
        /* this.menuCtrl.toggle("menu3")
        .then((opened: boolean) => {
          console.log("Abriu? " , opened);
        }).catch(err => console.log("Erro ao abrir menu3! " + err)
        ); */
    };
    MenuSettings.prototype.toggleMenu1Enable = function () {
        var isEnable = this.menuCtrl.isEnabled('menu1');
        this.menuCtrl.enable(!isEnable, 'menu1');
    };
    return MenuSettings;
}());
MenuSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-menu-settings',template:/*ion-inline-start:"/home/james/Git/Ionic/IonicMenu/src/pages/menu-settings/menu-settings.html"*/'<ion-header>\n    <ion-navbar>\n  \n      <button ion-button ion-only menuToggle="menu1" start>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <ion-title>\n        Menu Settings\n      </ion-title>\n  \n      <button ion-button ion-only menuToggle="menu2" end>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n      <button ion-button ion-only menuToggle="menu3" end>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <button ion-button block (click)="toggleMenu1Enable()">Togle Menu 1 Enabled</button>\n</ion-content>\n'/*ion-inline-end:"/home/james/Git/Ionic/IonicMenu/src/pages/menu-settings/menu-settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* MenuController */]) === "function" && _c || Object])
], MenuSettings);

var _a, _b, _c;
//# sourceMappingURL=menu-settings.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map