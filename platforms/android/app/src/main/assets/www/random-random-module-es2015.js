(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["random-random-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/random/random.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/random/random.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Más colecciones\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let col of colecciones\">\n      <ion-item detail button (click)='goToCollection(col.CollectionID)'>\n        <ion-icon name=\"albums\"></ion-icon> \n        <div style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ col.CollectionName }}<br />\n          <small *ngIf=\"col.Nickname\">&nbsp;{{col.Nickname}}</small>\n          <small *ngIf=\"!col.Nickname\">&nbsp;Usuario #{{col.UserID}}</small>\n        </div>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-button shape=\"round\" color=\"primary\" expand=\"block\" (click)=\"refresh()\">\n      <ion-icon name=\"refresh\"></ion-icon>Refrescar</ion-button>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/random/random-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/random/random-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RandomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPageRoutingModule", function() { return RandomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _random_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random.page */ "./src/app/random/random.page.ts");




const routes = [
    {
        path: '',
        component: _random_page__WEBPACK_IMPORTED_MODULE_3__["RandomPage"]
    }
];
let RandomPageRoutingModule = class RandomPageRoutingModule {
};
RandomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RandomPageRoutingModule);



/***/ }),

/***/ "./src/app/random/random.module.ts":
/*!*****************************************!*\
  !*** ./src/app/random/random.module.ts ***!
  \*****************************************/
/*! exports provided: RandomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPageModule", function() { return RandomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _random_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./random-routing.module */ "./src/app/random/random-routing.module.ts");
/* harmony import */ var _random_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random.page */ "./src/app/random/random.page.ts");







let RandomPageModule = class RandomPageModule {
};
RandomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _random_routing_module__WEBPACK_IMPORTED_MODULE_5__["RandomPageRoutingModule"]
        ],
        declarations: [_random_page__WEBPACK_IMPORTED_MODULE_6__["RandomPage"]]
    })
], RandomPageModule);



/***/ }),

/***/ "./src/app/random/random.page.scss":
/*!*****************************************!*\
  !*** ./src/app/random/random.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbmRvbS9yYW5kb20ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/random/random.page.ts":
/*!***************************************!*\
  !*** ./src/app/random/random.page.ts ***!
  \***************************************/
/*! exports provided: RandomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomPage", function() { return RandomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");





let RandomPage = class RandomPage {
    constructor(http, navCtrl, modalController, route, router, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.getCollections();
    }
    getCollections() {
        this.colecciones = [];
        this.http.getRandomCollections().subscribe((res) => {
            this.colecciones = res['body'];
            console.log("colecciones: ", this.colecciones);
        }, (error) => {
            console.error(error);
        });
        console.log(this.colecciones);
    }
    goToCollection(id) {
        console.log('id ', id);
        this.navCtrl.navigateForward("/collection/" + id);
    }
    refresh() {
        this.colecciones = [];
        this.getCollections();
    }
    ngOnInit() {
    }
};
RandomPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
RandomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-random',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./random.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/random/random.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./random.page.scss */ "./src/app/random/random.page.scss")).default]
    })
], RandomPage);



/***/ })

}]);
//# sourceMappingURL=random-random-module-es2015.js.map